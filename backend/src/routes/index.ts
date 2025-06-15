import express from 'express';
import vehicleTypeRoutes from './vehicleTypeRoutes';
import vehicleRoutes from './vehicleRoutes';
import bookingRoutes from './bookingRoutes';

const router = express.Router();

router.use('/vehicle-types', vehicleTypeRoutes);
router.use('/vehicles', vehicleRoutes);
router.use('/bookings', bookingRoutes);

export default router; 