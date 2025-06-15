import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class VehicleType extends Model {
  public id!: number;
  public name!: string;
  public wheelCount!: number;
}

VehicleType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    wheelCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'VehicleType',
    tableName: 'vehicle_types',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['name'],
      },
    ],
  }
);

export default VehicleType; 