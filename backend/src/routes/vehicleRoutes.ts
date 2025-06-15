import express from 'express';
import { getVehiclesByType } from '../controllers/vehicleController';

const router = express.Router();

router.get('/by-type/:type', getVehiclesByType);

export default router; 