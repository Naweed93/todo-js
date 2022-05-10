import { buildModal } from "./modals";


export function buildEventListeners(){
    document.querySelector('.new-project-btn').addEventListener('click',
    buildModal.bind(null, 'addProject'));
    document.querySelector('.settings svg').addEventListener('click',
    buildModal.bind(null, 'settings'));
    document.querySelector('.project-name svg').addEventListener('click',
    buildModal.bind(null, 'editProject'));
    document.querySelector('.project-delete-btn').addEventListener('click',
    buildModal.bind(null, 'deleteProject'));
    document.querySelector('.new-task').addEventListener('click',
    buildModal.bind(null, 'addTask'));
    document.querySelector('.task-name svg').addEventListener('click',
    buildModal.bind(null, 'editTask'));
    document.querySelector('.new-sub-task').addEventListener('click',
    buildModal.bind(null, 'addSubTask'));
    document.querySelector('.delete-sub-task').addEventListener('click',
    buildModal.bind(null, 'deleteTask'));
}