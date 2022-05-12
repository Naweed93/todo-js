import { buildModal } from "./modals";
import { addProjectTasksPage, addTaskDetailPage, changeTaskStatus, changeSubTaskStatus, deleteSubTaskElement} from "./base";

export function eventListenerManager(order, detail=''){
    if (order == 'start'){
        startEventListener();
        buildTaskEventListener();
        buildTaskCheckListener();
    }
    else if (order == 'project-list-event-listeners'){
        buildTaskEventListener();
        buildTaskCheckListener();
    }
    else if (order == 'task-details-event-listeners'){
        buildSubTaskCheckListener();
        buildDeleteSubTaskListener();
    }
    else if (order == 'new-sub-task'){
        newSubTaskCheckListener(detail);
        newDeleteSubTaskListener(detail);
    }
    else if (order == 'new-task'){
        newTaskCheckListener(detail);
    }
}

function startEventListener(){
    document.querySelector('.new-project-btn').addEventListener('click',
    buildModal.bind(null, 'addProject'));
    document.querySelector('.settings svg').addEventListener('click',
    buildModal.bind(null, 'settings'));
    document.querySelector('.project-name svg').addEventListener('click',
    buildModal.bind(null, 'editProject'));
    document.querySelector('.new-task').addEventListener('click',
    buildModal.bind(null, 'addTask'));
    //document.querySelector('.task-name svg').addEventListener('click',
    //buildModal.bind(null, 'editTask'));
    //document.querySelector('.new-sub-task').addEventListener('click',
    //buildModal.bind(null, 'addSubTask'));
    //document.querySelector('.delete-sub-task').addEventListener('click',
    //buildModal.bind(null, 'deleteTask'));
    for(let i = 0; i < document.querySelectorAll('.sidebar-projects>div').length - 1;i++){
        const project = document.querySelectorAll('.sidebar-projects>div')[i]
        project.addEventListener('click',addProjectTasksPage.bind(
            null,project.classList[0]
        ));
    }
}

function buildTaskEventListener(){
    const task = document.querySelectorAll('.project-task');
    for (let element of task) {
        element.addEventListener('click',addTaskDetailPage.bind(null, element.classList[0]));
    }
}

function buildTaskCheckListener(){
    const taskChecks = document.querySelectorAll('.project-task>input');
    for (const element of taskChecks) {
        element.addEventListener('change',changeTaskStatus.bind(null, element.id))
    }
}

function newTaskCheckListener(elementID){
    const taskCheck = document.querySelector('#'+elementID);
    taskCheck.addEventListener('change',changeTaskStatus.bind(null, elementID));
}

function buildSubTaskCheckListener(){
    const subTaskChecks = document.querySelectorAll('.sub-tasks input');
    for (const element of subTaskChecks) {
        element.addEventListener('change',changeSubTaskStatus.bind(null, element.id))
    }
}

function buildDeleteSubTaskListener(){
    const subTasks = document.querySelectorAll('.sub-tasks input');
    for (const element of subTasks) {
        document.querySelector('.'+element.id+' svg').addEventListener('click',deleteSubTaskElement.bind(null, element.id))
    }
}

function newSubTaskCheckListener(elementID){
    const subTaskCheck = document.querySelector('#'+elementID);
    subTaskCheck.addEventListener('change', changeSubTaskStatus.bind(null, elementID));
}

function newDeleteSubTaskListener(elementID){
    const subTask = document.querySelector('.'+elementID+' svg');
    subTask.addEventListener('click',deleteSubTaskElement.bind(null, elementID))
}