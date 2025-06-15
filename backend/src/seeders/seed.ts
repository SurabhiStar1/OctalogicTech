import sequelize from '../config/database';
import Vehicle from '../models/Vehicle';
import VehicleType from '../models/VehicleType';

async function seed() {
  try {
    // Drop all tables and recreate them
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await sequelize.sync({ force: true });
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

    // Create vehicle types
    const vehicleTypes = [
      { name: 'Sports Bike', wheelCount: 2 },
      { name: 'Cruiser Bike', wheelCount: 2 },
      { name: 'Sedan', wheelCount: 4 },
      { name: 'SUV', wheelCount: 4 },
    ];

    await VehicleType.bulkCreate(vehicleTypes);

    // Create vehicles
    const vehicles = [
      { name: 'Yamaha R1', type: 'Sports Bike' },
      { name: 'Kawasaki Ninja', type: 'Sports Bike' },
      { name: 'Harley Davidson', type: 'Cruiser Bike' },
      { name: 'Royal Enfield', type: 'Cruiser Bike' },
      { name: 'Toyota Camry', type: 'Sedan' },
      { name: 'Honda Accord', type: 'Sedan' },
      { name: 'Toyota RAV4', type: 'SUV' },
      { name: 'Honda CR-V', type: 'SUV' },
    ];

    await Vehicle.bulkCreate(vehicles);

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
}

seed(); 