import { Sequelize } from 'sequelize';
import sequelize from '../config/database';
import * as createVehicleTypes from './20240613_create_vehicle_types';
import * as createVehicles from './20240613_create_vehicles';
import * as createBookings from './20240613_create_bookings';

async function runMigrations() {
  try {
    // Run migrations in order
    await createVehicleTypes.up(sequelize.getQueryInterface());
    console.log('Created vehicle_types table');
    
    await createVehicles.up(sequelize.getQueryInterface());
    console.log('Created vehicles table');
    
    await createBookings.up(sequelize.getQueryInterface());
    console.log('Created bookings table');
    
    console.log('All migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
    throw error;
  }
}

// Run migrations if this file is executed directly
if (require.main === module) {
  runMigrations()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

export default runMigrations; 