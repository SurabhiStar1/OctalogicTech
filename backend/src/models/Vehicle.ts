import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import VehicleType from './VehicleType';

class Vehicle extends Model {
  public id!: number;
  public name!: string;
  public type!: string;
}

Vehicle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: VehicleType,
        key: 'name',
      },
    },
  },
  {
    sequelize,
    modelName: 'Vehicle',
    tableName: 'vehicles',
    timestamps: true,
  }
);

// Define association
Vehicle.belongsTo(VehicleType, { foreignKey: 'type', targetKey: 'name' });

export default Vehicle; 