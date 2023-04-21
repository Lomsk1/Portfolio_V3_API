import Web from "../models/webModel";
import { createOne, getAll } from "./handlerFactory";

export const getAllWeb = getAll(Web);
export const createWeb = createOne(Web);
