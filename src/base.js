import { sidebarComponent } from "./sidebar";
import { taskDetailsComponent } from "./taskDetails";

export function buildwebsite(){
    document.body.insertBefore(sidebarComponent(),document.body.firstChild);
    document.body.appendChild(taskDetailsComponent());
}