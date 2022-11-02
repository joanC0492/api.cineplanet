import { CandystoreModel } from "../models/candystore.model";

const getAllCandyStore = async () => await CandystoreModel.findAll();
const getCandyStore = async (id: number) => await CandystoreModel.findByPk(id);

export { getAllCandyStore, getCandyStore };
