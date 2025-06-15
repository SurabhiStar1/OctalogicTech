import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Vehicle from './Vehicle';

class Booking extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public vehicleId!: number;
  public startDate!: Date;
  public endDate!: Date;
}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vehicles',
        key: 'id',
      },
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings',
  }
);

Booking.belongsTo(Vehicle, { foreignKey: 'vehicleId' });
Vehicle.hasMany(Booking, { foreignKey: 'vehicleId' });

export default Booking; 