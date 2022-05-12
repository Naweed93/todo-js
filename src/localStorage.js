import { newUser } from "./index";

export function localStorageManager(order){
    if (order == 'start'){
        newUser.setIsOnStart(true);
        getLocalStorageProjects();
        getLocalStorageTasks();
        getLocalStorageSubTasks();
        getLocalStorageUsername();
        getLocalStorageTheme();
        newUser.setIsOnStart(false);
    }
    else if(order == 'add-project'){
        setLocalStorageProjects();
    }
    else if(order == 'add-task'){
        setLocalStorageTasks();
    }
    else if(order == 'add-sub-task'){
        setLocalStorageSubTasks();
    }
    else if(order == 'add-username'){
        setLocalStorageUsername();
    }
    else if(order == 'add-theme'){
        setLocalStorageTheme();
    }
    //localStorage.clear();
}

function setLocalStorageProjects(){
    let index = 0;
    for (const item of newUser.getProject()) {
        const key1 = 'project-class-'+ index;
        const key2 = 'project-name-'+ index;
        localStorage.setItem(key1,item[0]);
        localStorage.setItem(key2,item[1]);
        index += 1;
    }
    localStorage.setItem('projectNum',index);
    localStorage.setItem('projectCounter',newUser.project_length)
}
function getLocalStorageProjects(){
    const index = localStorage.getItem('projectNum');
    for (let i = 0; i < index; i++) {
        if (i>1){
            const key1 = 'project-class-'+ i;
            const key2 = 'project-name-'+ i;
            newUser.addProject([localStorage.getItem(key1),localStorage.getItem(key2)]);
        }
    }
    newUser.project_length = localStorage.getItem('projectCounter')*1;
}

function setLocalStorageTasks(){
    let index = 0;
    for (const item of newUser.getTasks()) {
        const key = "task-" + index;
        localStorage.setItem(key,JSON.stringify(item));
        index += 1;
    }
    localStorage.setItem('task-num',index);
    localStorage.setItem('taskCounter', newUser.task_length);
}
function getLocalStorageTasks(){
    let index = localStorage.getItem('task-num');
    for (let i = 0; i < index; i++) {
        const key = "task-" + i;
        const taskObject = JSON.parse(localStorage.getItem(key));
        newUser.addTask(taskObject['project'], taskObject['date'], taskObject['class'],
         taskObject['name'], taskObject['completed']);
    }
    newUser.task_length = localStorage.getItem('taskCounter')*1;
}

function setLocalStorageSubTasks(){
    let index = 0;
    for (const item of newUser.getSubTasks()) {
        const key = "sub-task-" + index;
        localStorage.setItem(key,JSON.stringify(item));
        index += 1;
    }
    localStorage.setItem('sub-task-num',index);
    localStorage.setItem('subTaskCounter', newUser.sub_task_length);
}
function getLocalStorageSubTasks(){
    let index = localStorage.getItem('sub-task-num');
    for (let i = 0; i < index; i++) {
        const key = "sub-task-" + i;
        const subTaskObject = JSON.parse(localStorage.getItem(key));
        newUser.addSubTask(subTaskObject['task'],subTaskObject['class'],subTaskObject['name'],subTaskObject['completed']);
    }
    newUser.sub_task_length = localStorage.getItem('subTaskCounter')*1;
}

function setLocalStorageUsername(){
    localStorage.setItem('username',newUser.getUsername());
}
function getLocalStorageUsername(){
    const username = localStorage.getItem('username');
    if (username){
        newUser.setUsername(username);
    }
}

function setLocalStorageTheme(){
    localStorage.setItem('theme',newUser.getTheme);
}

function getLocalStorageTheme(){
    newUser.setTheme(localStorage.getItem('theme'));
}