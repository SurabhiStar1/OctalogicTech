import VehicleType from '../models/VehicleType';
import Vehicle from '../models/Vehicle';
import sequelize from '../config/database';

async function seed() {
  try {
    await sequelize.sync({ force: true });

    // Create vehicle types
    const vehicleTypes = await VehicleType.bulkCreate([
      { name: 'Hatchback', wheelCount: 4 },
      { name: 'SUV', wheelCount: 4 },
      { name: 'Sedan', wheelCount: 4 },
      { name: 'Sports Bike', wheelCount: 2 },
    ]);

    // Create vehicles
    await Vehicle.bulkCreate([
      { model: 'Swift', vehicleTypeId: vehicleTypes[0].id },
      { model: 'i20', vehicleTypeId: vehicleTypes[0].id },
      { model: 'Fortuner', vehicleTypeId: vehicleTypes[1].id },
      { model: 'Creta', vehicleTypeId: vehicleTypes[1].id },
      { model: 'City', vehicleTypeId: vehicleTypes[2].id },
      { model: 'Civic', vehicleTypeId: vehicleTypes[2].id },
      { model: 'Ninja 400', vehicleTypeId: vehicleTypes[3].id },
      { model: 'R15', vehicleTypeId: vehicleTypes[3].id },
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seed(); 