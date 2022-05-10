import { sidebarComponent } from "./sidebar";
import { projectListComponent } from "./projectList";
import { taskDetailsComponent } from "./taskDetails";
import { modalComponent } from "./modals";

export function buildwebsite(){
    document.body.append(sidebarComponent(), projectListComponent(), taskDetailsComponent());
}

export function buildModal(item){
    if(!document.querySelector('.modal')){
        const modal = document.createElement('div');
        
        modal.classList.add('modal');

        modal.appendChild(modalComponent()[item]);
        document.body.append(modal);
        modalBehavior();
    }
}

function modalBehavior(){
    document.querySelector('.modal p:last-child').addEventListener('click',
    removeModal);
}
function removeModal(){
    document.body.removeChild(document.querySelector('.modal'));
}