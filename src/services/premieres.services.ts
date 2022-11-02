import { PremieresModel } from "../models/premieres.model";

const getAllPremieres = async () => await PremieresModel.findAll();
const getPremieres = async (id: number) => await PremieresModel.findByPk(id);

export { getAllPremieres, getPremieres };
