import { buildwebsite } from "./base";
import { buildEventListeners } from "./eventListeners"
import { user } from "./user"
import { localStorageManager } from "./localStorage";


export const newUser = user("User Name");
localStorageManager('start');

buildwebsite();

buildEventListeners();