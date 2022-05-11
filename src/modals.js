import {newUser} from "./index"
import {addProjectTasksPage} from "./base"

function modalComponent(){
    const settingsInterface = document.createElement('div');
    const addProject = document.createElement('div');
    const editProject = document.createElement('div');
    const projectDelete = document.createElement('div');
    const taskDelete = document.createElement('div');
    const editTask = document.createElement('div');
    const addTask = document.createElement('div');
    const addSubTask = document.createElement('div');

    settingsInterface.classList.add('settings-interface');
    projectDelete.classList.add('project-delete');
    taskDelete.classList.add('task-delete');
    addProject.classList.add('add-project');
    editProject.classList.add('edit-project');
    editTask.classList.add('edit-task');
    addTask.classList.add('add-task');
    addSubTask.classList.add('add-sub-task');


    settingsInterface.innerHTML = `<div class="change-username">
    <p>Enter your name:</p>
    <input type="text" id="username" name="username" placeholder="username">
</div>
<div class="change-theme">
    <p>Change theme:</p>
    <label class="switch">
        <input type="checkbox" id="theme-check">
        <span class="slider light">light</span>
    </label>
</div>
<div class="settings-buttons">
    <p>Save</p>
    <p>Cancel</p>
</div>`;
    projectDelete.innerHTML = `<h3>Are you sure?</h3>
    <p>(All the tasks within the project will be deleted!)</p>
    <div class="project-delete-buttons">
        <p>Delete</p>
        <p>Cancel</p>
    </div>`;
    taskDelete.innerHTML = `<h3>Are you sure?</h3>
    <div class="task-delete-buttons">
        <p>Delete</p>
        <p>Cancel</p>
    </div>`;
    addProject.innerHTML = `<div class="change-project-name">
    <p>project name:</p>
    <input type="text" id="add-project" name="add-project" placeholder="New project">
</div>
<div class="add-project-buttons">
    <p>Ok</p>
    <p>Cancel</p>
</div>`;
    editProject.innerHTML = `<div class="change-project-name">
    <p>project name:</p>
    <input type="text" id="edit-project" name="edit-project">
</div>
<div class="edit-project-buttons">
    <p>Ok</p>
    <p>Cancel</p>
</div>`;
    editTask.innerHTML = `<div class="change-task-name">
    <p>task name:</p>
    <input type="text" id="edit-task" name="edit-task">
</div>
<div class="change-task-date">
    <p>Due date:</p>
    <input type="date" id="edit-task-date" name="add-task-date">
</div>
<div class="edit-task-buttons">
    <p>Ok</p>
    <p>Cancel</p>
</div>`;
    addTask.innerHTML = `<div class="change-task-name">
    <p>task name:</p>
    <input type="text" id="add-task" name="add-task">
</div>
<div class="change-task-date">
    <p>Due date:</p>
    <input type="date" id="add-task-date" name="add-task-date">
</div>
<div class="add-task-buttons">
    <p>Ok</p>
    <p>Cancel</p>
</div>`;
    addSubTask.innerHTML = `<div class="change-sub-task-name">
    <p>sub task name:</p>
    <input type="text" id="add-sub-task" name="add-sub-task">
</div>
<div class="add-sub-task-buttons">
    <p>Ok</p>
    <p>Cancel</p>
</div>`;

    return {settings:settingsInterface, addProject:addProject, editProject:editProject,
        deleteProject:projectDelete, deleteTask:taskDelete, editTask:editTask,
        addTask:addTask, addSubTask:addSubTask};
}
function addProjectModal(){
    const myproject = document.createElement('div');
    newUser.project_length += 1;
    const className = 'project-' + (newUser.project_length);
    const projectName = document.querySelector('#add-project').value;
    newUser.addProject([className, projectName])
    myproject.classList.add(className);
    myproject.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-folder2" viewBox="0 0 16 16">
    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z"></path>
  </svg>
<p>`+
    projectName +
    `</p>`;
    document.querySelector('.sidebar-projects').insertBefore(myproject,document.querySelector('.new-project-btn'));
    myproject.addEventListener('click',addProjectTasksPage.bind(
        null,className
    ));
    removeModal();
}
function editProjectModal(){
    document.querySelector('.project-name h2').innerText = document.querySelector('#edit-project').value;
    document.querySelector('.active-project p').innerText = document.querySelector('#edit-project').value;
    removeModal();
}
function addTaskModal(){
    const addedTask = document.createElement('div');
    addedTask.classList.add('task4');
    addedTask.innerHTML = `<input type="checkbox" id="task1" name="task1" value="task1">
    <div class="task-content">
        <p>`+ document.querySelector('#add-task').value + `</p>
        <date>`+ document.querySelector('#add-task-date').value +`</date>
    </div>`;
    document.querySelector('.active-tasks').insertBefore(addedTask, document.querySelector('.new-task'));
    removeModal();
}
function editTaskModal(){
    document.querySelector('.active-task p').innerText = document.querySelector('#edit-task').value;
    document.querySelector('.task-name h3').innerText = document.querySelector('#edit-task').value;
    document.querySelector('.active-task date').innerText = document.querySelector('#edit-task-date').value;

    removeModal();
}
function addSubTaskModal(){
    const addedSubTask = document.createElement('div');
    addedSubTask.classList.add('sub-task-4');
    addedSubTask.innerHTML = `<input type="checkbox" id="task3" name="task3" value="task3">
    <div class="sub-task-name"><p>`+ document.querySelector('#add-sub-task').value + `</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"></path>
        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"></path>
      </svg></div>`;
      document.querySelector('.sub-tasks').insertBefore(addedSubTask, document.querySelector('.new-sub-task'));
    removeModal();
}
function deleteProjectModal(){
    document.querySelector('.sidebar-projects').removeChild(document.querySelector('.active-project'));
    removeModal();
}
function deleteTaskModal(){
    document.querySelector('.task-details').innerHTML = '';
    document.querySelector('.active-task').parentElement.removeChild(document.querySelector('.active-task'));
}
function settingsModal(){
    let userName = document.querySelector('#username').value
    document.querySelector('.settings p').innerText = userName;
    newUser.setUsername(userName);
    console.log(newUser.getUsername())
    console.log(newUser.getProject())
    removeModal();
}
function changeTheme(){
    console.log(newUser.getUsername());
    const themeElement = document.querySelector('.slider');
    const theme = themeElement.innerText
    if(theme == 'light'){
        themeElement.innerText = "dark";
        themeElement.classList.add('dark');
        themeElement.classList.remove('light');
        newUser.setTheme('dark');
    }
    else{
        themeElement.innerText = "light";
        themeElement.classList.add('light');
        themeElement.classList.remove('dark')
        newUser.setTheme('light')
    }
}

export function buildModal(item){
    if(!document.querySelector('.modal')){
        const modal = document.createElement('div');
        
        modal.classList.add('modal');

        modal.appendChild(modalComponent()[item]);
        document.body.append(modal);
        modalBehavior(item);
    }
}

function modalBehavior(item){
    document.querySelector('.modal p:last-child').addEventListener('click',
    removeModal);
    if( item == 'addProject'){
        document.querySelector('.add-project-buttons p:first-child').addEventListener('click',
        addProjectModal);
    }
    if( item == 'editProject'){
        document.querySelector('.edit-project-buttons p:first-child').addEventListener('click',
        editProjectModal);
    }
    if( item == 'deleteProject'){
        document.querySelector('.project-delete-buttons p:first-child').addEventListener('click',
        deleteProjectModal);
    }
    if( item == 'addTask'){
        document.querySelector('.add-task-buttons p:first-child').addEventListener('click',
        addTaskModal);
    }
    if( item == 'editTask'){
        document.querySelector('.edit-task-buttons p:first-child').addEventListener('click',
        editTaskModal);
    }
    if( item == 'deleteTask'){
        document.querySelector('.task-delete-buttons p:first-child').addEventListener('click',
        deleteTaskModal);
    }
    if( item == 'addSubTask'){
        document.querySelector('.add-sub-task-buttons p:first-child').addEventListener('click',
        addSubTaskModal);
    }
    if( item == 'settings'){
        document.querySelector('.settings-buttons p:first-child').addEventListener('click',
        settingsModal);
        document.querySelector('#theme-check').addEventListener('change',
        changeTheme)
    }
}
function removeModal(){
    document.body.removeChild(document.querySelector('.modal'));
}