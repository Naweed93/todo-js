import { newUser } from "./index";

export function localStorageManager(order){
    if (order == 'start'){
        console.log(order);
        getLocalStorageProjects();
        getLocalStorageTasks();
        getLocalStorageSubTasks();
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
    localStorage.clear()
}

export function setLocalStorageProjects(){
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
        const key1 = 'project-class-'+ i;
        const key2 = 'project-name-'+ i;
        newUser.addProject([localStorage.getItem(key1),localStorage.getItem(key2)]);
    }
}

export function setLocalStorageTasks(){
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

export function setLocalStorageSubTasks(){
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