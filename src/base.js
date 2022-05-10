import { sidebarComponent } from "./sidebar";
import { projectListComponent } from "./projectList";
import { taskDetailsComponent } from "./taskDetails";

export function buildwebsite(){
    document.body.append(sidebarComponent(), projectListComponent(), taskDetailsComponent());
}