import { buildwebsite } from "./base";
import { eventListenerManager } from "./eventListeners"
import { user } from "./user"
import { localStorageManager } from "./localStorage";


export const newUser = user("User Name");
localStorageManager('start');

buildwebsite();

eventListenerManager('start');
