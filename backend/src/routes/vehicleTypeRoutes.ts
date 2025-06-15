import express from 'express';
import { getVehicleTypes, createVehicleType } from '../controllers/vehicleTypeController';
import { getVehicleTypesByWheelCount } from '../controllers/vehicleController';

const router = express.Router();

router.get('/', getVehicleTypes);
router.post('/', createVehicleType);
router.get('/by-wheel-count/:wheelCount', getVehicleTypesByWheelCount);

export default router; 