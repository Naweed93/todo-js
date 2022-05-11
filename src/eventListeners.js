import { buildModal } from "./modals";
import { addProjectTasksPage } from "./base";


export function buildEventListeners(){
    document.querySelector('.new-project-btn').addEventListener('click',
    buildModal.bind(null, 'addProject'));
    document.querySelector('.settings svg').addEventListener('click',
    buildModal.bind(null, 'settings'));
    document.querySelector('.project-name svg').addEventListener('click',
    buildModal.bind(null, 'editProject'));
    document.querySelector('.new-task').addEventListener('click',
    buildModal.bind(null, 'addTask'));
    document.querySelector('.task-name svg').addEventListener('click',
    buildModal.bind(null, 'editTask'));
    document.querySelector('.new-sub-task').addEventListener('click',
    buildModal.bind(null, 'addSubTask'));
    document.querySelector('.delete-sub-task').addEventListener('click',
    buildModal.bind(null, 'deleteTask'));
    for(let i = 0; i < document.querySelectorAll('.sidebar-projects>div').length - 1;i++){
        const project = document.querySelectorAll('.sidebar-projects>div')[i]
        project.addEventListener('click',addProjectTasksPage.bind(
            null,project.classList[0]
        ));
    }
}