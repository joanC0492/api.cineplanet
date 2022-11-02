import { sequelize } from "../config/mysql";
import { DataTypes } from "sequelize";

const PremieresModel = sequelize.define(
  "premieres",
  {
    description: {
      type: DataTypes.STRING, // tipo string
      allowNull: false, // not null
    },
    image: {
      type: DataTypes.STRING, // tipo string
      allowNull: false, // not null
    },
  },
  {
    timestamps: false // Fecha de creaacion y update
  }
);

export { PremieresModel };