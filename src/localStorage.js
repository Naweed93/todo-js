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
        console.log(order);
        setLocalStorageProjects();
    }
    else if(order == 'add-task'){
        console.log(order);
        setLocalStorageTasks();
    }
    else if(order == 'add-sub-task'){
        console.log(order);
        setLocalStorageSubTasks();
    }
    else if(order == 'add-username'){
        console.log(order);
        setLocalStorageUsername();
    }
    else if(order == 'add-theme'){
        console.log(order);
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
}

function setLocalStorageTasks(){
    let index = 0;
    for (const item of newUser.getTasks()) {
        const key = "task-" + index;
        localStorage.setItem(key,JSON.stringify(item));
        index += 1;
    }
    localStorage.setItem('task-num',index);
}
function getLocalStorageTasks(){
    let index = localStorage.getItem('task-num');
    for (let i = 0; i < index; i++) {
        const key = "task-" + i;
        const taskObject = JSON.parse(localStorage.getItem(key));
        newUser.addTask(taskObject['project'], taskObject['date'], taskObject['class'],
         taskObject['name'], taskObject['completed']);
    }
}

function setLocalStorageSubTasks(){
    let index = 0;
    for (const item of newUser.getSubTasks()) {
        const key = "sub-task-" + index;
        localStorage.setItem(key,JSON.stringify(item));
        index += 1;
    }
    localStorage.setItem('sub-task-num',index);
}
function getLocalStorageSubTasks(){
    let index = localStorage.getItem('sub-task-num');
    for (let i = 0; i < index; i++) {
        const key = "sub-task-" + i;
        const subTaskObject = JSON.parse(localStorage.getItem(key));
        newUser.addSubTask(subTaskObject['task'],subTaskObject['class'],subTaskObject['name'],subTaskObject['completed']);
    }
}

function setLocalStorageUsername(){
    localStorage.setItem('username',newUser.getUsername());
}
function getLocalStorageUsername(){
    newUser.setUsername(localStorage.getItem('username'));
}

function setLocalStorageTheme(){
    localStorage.setItem('theme',newUser.getTheme);
}

function getLocalStorageTheme(){
    newUser.setTheme(localStorage.getItem('theme'));
}