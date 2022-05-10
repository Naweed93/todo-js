import { buildwebsite, addProjectSidebar } from "./base";
import { buildEventListeners } from "./eventListeners"
import { user } from "./user"

buildwebsite();


export const newUser = user(document.querySelector('.settings p').innerText);

for(let i = 2; i < newUser.getProject().length ; i++ ){
    addProjectSidebar(newUser.getProject()[i][0],newUser.getProject()[i][1]);
}
console.log(newUser.getTasks()[0]['project']);

buildEventListeners();