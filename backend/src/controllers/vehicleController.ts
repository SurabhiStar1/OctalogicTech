import { Request, Response } from 'express';
import VehicleType from '../models/VehicleType';
import Vehicle from '../models/Vehicle';

export const getVehicleTypesByWheelCount = async (req: Request, res: Response) => {
  try {
    const { wheelCount } = req.params;
    const vehicleTypes = await VehicleType.findAll({
      where: { wheelCount: parseInt(wheelCount) },
    });
    res.json(vehicleTypes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vehicle types' });
  }
};

export const getVehiclesByType = async (req: Request, res: Response) => {
  try {
    const { type } = req.params;
    const vehicles = await Vehicle.findAll({
      where: { type },
    });
    res.json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ message: 'Error fetching vehicles' });
  }
}; 