import { sequelize } from "../config/mysql";
import { DataTypes } from "sequelize";

const CandystoreModel = sequelize.define(
  "candystores",
  {
    name: {
      type: DataTypes.STRING, // tipo string
      allowNull: false, // not null
    },
    description: {
      type: DataTypes.STRING, // tipo string
      allowNull: false, // not null
    },
    price: {
      type: DataTypes.FLOAT, // tipo float
      allowNull: false, // not null
    },
  },
  {
    timestamps: false, // Fecha de creaacion y update
  }
);

export { CandystoreModel };
