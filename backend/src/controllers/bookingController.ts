import { Request, Response } from 'express';
import Booking from '../models/Booking';
import Vehicle from '../models/Vehicle';
import { Op } from 'sequelize';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

    console.log('Received booking request:', req.body);

    // Validate required fields
    if (!firstName || !lastName || !vehicleId || !startDate || !endDate) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if the vehicle exists
    const vehicle = await Vehicle.findByPk(vehicleId);
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    // Check for overlapping bookings
    const overlappingBooking = await Booking.findOne({
      where: {
        vehicleId,
        [Op.or]: [
          {
            startDate: {
              [Op.between]: [startDate, endDate]
            }
          },
          {
            endDate: {
              [Op.between]: [startDate, endDate]
            }
          },
          {
            [Op.and]: [
              { startDate: { [Op.lte]: startDate } },
              { endDate: { [Op.gte]: endDate } }
            ]
          }
        ]
      }
    });

    if (overlappingBooking) {
      return res.status(400).json({ 
        error: 'This vehicle is already booked for the selected dates',
        existingBooking: {
          startDate: overlappingBooking.startDate,
          endDate: overlappingBooking.endDate
        }
      });
    }

    const booking = await Booking.create({
      firstName,
      lastName,
      vehicleId,
      startDate,
      endDate
    });

    console.log('Created booking:', booking.toJSON());
    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.findAll({
      include: [{
        model: Vehicle,
        attributes: ['name', 'type']
      }]
    });
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
}; 