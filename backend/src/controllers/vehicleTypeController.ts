import { Request, Response } from 'express';
import VehicleType from '../models/VehicleType';

export const getVehicleTypes = async (req: Request, res: Response) => {
  try {
    const { wheelCount } = req.query;
    const whereClause = wheelCount ? { wheelCount: parseInt(wheelCount as string) } : {};
    
    const vehicleTypes = await VehicleType.findAll({
      where: whereClause,
    });
    
    res.json(vehicleTypes);
  } catch (error) {
    console.error('Error fetching vehicle types:', error);
    res.status(500).json({ message: 'Error fetching vehicle types' });
  }
};

export const createVehicleType = async (req: Request, res: Response) => {
  try {
    const { name, wheelCount } = req.body;
    const vehicleType = await VehicleType.create({ name, wheelCount });
    res.status(201).json(vehicleType);
  } catch (error) {
    console.error('Error creating vehicle type:', error);
    res.status(500).json({ message: 'Error creating vehicle type' });
  }
}; 