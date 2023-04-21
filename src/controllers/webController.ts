import Web from "../models/webModel";
import { createOne, deleteOne, getAll, updateOne } from "./handlerFactory";

export const getAllWeb = getAll(Web);
export const createWeb = createOne(Web);
export const updateWeb = updateOne(Web);
export const deleteWeb = deleteOne(Web);
