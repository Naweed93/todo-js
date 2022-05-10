import { buildwebsite } from "./base";
import { buildEventListeners } from "./eventListeners"
import { user } from "./user"

export const newUser = user("User Name");

buildwebsite();

buildEventListeners();