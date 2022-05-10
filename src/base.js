import { sidebarComponent } from "./sidebar";
import { projectListComponent } from "./projectList";
import { taskDetailsComponent } from "./taskDetails";
import { newUser } from "./index";
import { buildModal } from "./modals";

export function buildwebsite(){
    document.body.append(sidebarComponent(), projectListComponent(), taskDetailsComponent());
}

export function addProjectSidebar(projectClass,projectName){
    const newProject = document.createElement('div');
    newProject.classList.add(projectClass);
    newProject.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-folder2" viewBox="0 0 16 16">
    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z"></path>
  </svg>
<p>`+projectName+`</p>`;
    document.querySelector('.sidebar-projects').insertBefore(newProject,document.querySelector('.new-project-btn'));
}

//changing project-list interface when clicking on projects in sidebar.
//today button behavior must be added
export function addProjectTasksPage(index){
    //create container
    const projectList = document.querySelector('.project-list');
    projectList.innerHTML='';
    
    //create elements
    const projectHeader = document.createElement('div');
    const taskList = document.createElement('div');
    const projectName = document.createElement('div');
    const activeTasks = document.createElement('div');
    const completedTasks = document.createElement('div');
    const newTask = document.createElement('div');

    const tasks = []
    for (let item of newUser.getTasks()) {  //selecting tasks of the specific project.
        if(index>1){ //index = 0 means all tasks, index=1 means today tasks
            if(item['project'] == newUser.getProject()[index][0]){
                tasks.push([document.createElement('div'),item['class'],item['completed'],item['name'],item['date']]);
            }
        }
        else{
            tasks.push([document.createElement('div'),item['class'],item['completed'],item['name'],item['date']]);
        }
    }

    //adding classes
    projectList.classList.add('project-list');
    projectHeader.classList.add('project-header');
    taskList.classList.add('task-list');
    projectName.classList.add('project-name');
    activeTasks.classList.add('active-tasks');
    completedTasks.classList.add('completed-tasks');
    newTask.classList.add('new-task');
    
    for (let item of tasks) {
        item[0].classList.add(item[1]);
    }

    //adding content
    projectList.append(projectHeader, taskList);
    projectHeader.append(projectName);
    taskList.append(activeTasks, completedTasks);
    completedTasks.innerHTML = `<h3>Completed tasks</h3>`
    
    for (let item of tasks) {
        if(!item[2]){ // item[2] is the task[complete] attribute. if its true then it will
                      // be added to completed tasks
            activeTasks.append(item[0]);
        }
        else{
            completedTasks.append(item[0]);
        }
    }
    activeTasks.append(newTask);

    if(index>1){    //delete project button shouldn't appear for all tasks and today tasks.
        const projectDeleteBtn = document.createElement('p');
        projectDeleteBtn.classList.add('project-delete-btn');
        projectHeader.append(projectDeleteBtn);
        projectDeleteBtn.innerText = `Delete`;
    }

    projectName.innerHTML = `<h2>`+ newUser.getProject()[index][1] + `</h2>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
      </svg>`;
    for (let item of tasks) {
          if (item[2]){ // item[2] is the task[complete] attribute. if its true then checkbox
                        // should be checked.
            item[0].innerHTML = `<input type="checkbox" checked id="task1" name="task1" value="task1">`;
          }
          else{
            item[0].innerHTML = `<input type="checkbox" id="task1" name="task1" value="task1">`;
          }
          item[0].innerHTML += `<div class="task-content">
          <p>`+item[3]+`</p>
          <date>`+item[4]+`</date>
            </div>`;
    }
    newTask.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
<p>Add new task...</p>`;

    //adding event listeners
    document.querySelector('.project-name svg').addEventListener('click',
    buildModal.bind(null, 'editProject'));
    document.querySelector('.new-task').addEventListener('click',
    buildModal.bind(null, 'addTask'));
    if(index>1){
        document.querySelector('.project-delete-btn').addEventListener('click',
        buildModal.bind(null, 'deleteProject'));
    }
}

