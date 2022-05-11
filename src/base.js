import { sidebarComponent } from "./sidebar";
import { projectListComponent } from "./projectList";
import { taskDetailsComponent } from "./taskDetails";
import { newUser } from "./index";
import { buildModal } from "./modals";
import { buildTaskEventListener, buildTaskCheckListener, buildSubTaskCheckListener, buildDeleteSubTaskListener } from "./eventListeners";

export function buildwebsite(){
    document.body.append(sidebarComponent(), projectListComponent(), taskDetailsComponent());
}

//changing project-list interface when clicking on projects in sidebar.
//today button behavior must be added
export function addProjectTasksPage(projectClass){
    let index = 0
    for (let item of newUser.getProject()) {
        if(item[0] == projectClass){
            break;
        }
        index += 1;
    }

    //delete task-details content
    const selectedProject = document.querySelector('.' + projectClass);
    if(selectedProject.classList[1] != 'active-project'){
        document.querySelector('.task-details').innerHTML = ''
    }
    //create container
    const projectList = document.querySelector('.project-list');
    projectList.innerHTML='';
    
    //change .active-project to current project
    if(document.querySelector('.active-project')){
        document.querySelector('.active-project').classList.remove('active-project');
    }
    selectedProject.classList.add('active-project');
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
        item[0].classList.add(item[1], 'project-task');
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
            item[0].innerHTML = `<input type="checkbox" checked id="`+ item[1] +`" name="`+item[1]+`">`;
          }
          else{
            item[0].innerHTML = `<input type="checkbox" id="`+ item[1] +`" name="`+ item[1] +`">`;
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

    buildTaskEventListener();
    buildTaskCheckListener();
}

//changing task-details interface when clicking on tasks in sidebar.
export function addTaskDetailPage(taskClass){
    //changing active task
    const activeTask = document.querySelector('.active-task');
    if (activeTask){
        activeTask.classList.remove('active-task')
    }
    document.querySelector('.'+taskClass).classList.add('active-task');



    //getting task and subtask list.
    let task
    let subTasksList=[]
    for (let item of newUser.getTasks()) {
        if(item['class']==taskClass){
            task=item;
            break;
        }
    }
    for (let item of newUser.getSubTasks()) {
        if(item['task'] == task['class']){
            subTasksList.push(item)
        }
    }
    
    //getting parent element and remove its previous content.
    const taskDetails = document.querySelector('.task-details');
    taskDetails.innerHTML = "";

    //adding elements
    const taskHeader = document.createElement('div');
    const taskProperties = document.createElement('div');
    const deleteSubTask = document.createElement('p');
    const taskName = document.createElement('div');
    const taskDueDate = document.createElement('div');
    const subTasksHeader = document.createElement('h4');
    const subTasks = document.createElement('div');
    const subTaskItems = [];
    for (let index = 0; index < subTasksList.length; index++) {
        subTaskItems.push(document.createElement('div'));
        
    }
    const newSubTask = document.createElement('div');

    //adding classes.
    taskHeader.classList.add('task-header');
    taskProperties.classList.add('task-properties');
    deleteSubTask.classList.add('delete-sub-task');
    taskName.classList.add('task-name');
    taskDueDate.classList.add('task-due-date');
    subTasks.classList.add('sub-tasks');
    for (let index = 0; index < subTaskItems.length; index++) {
        subTaskItems[index].classList.add(subTasksList[index]['class']);
    }
    newSubTask.classList.add('new-sub-task');

    //adding content
    taskDetails.append(taskHeader, taskProperties, deleteSubTask);
    taskHeader.append(taskName);
    taskProperties.append(taskDueDate,subTasksHeader,subTasks);

    for (let index = 0; index < subTaskItems.length; index++) {//loop to add every subtaskitem to .sub-tasks
        subTasks.append(subTaskItems[index]);
        subTaskItems[index].innerHTML = `<input type="checkbox" id="`+subTasksList[index]['class']+`" name="`+subTasksList[index]['class']+`">`;
        const subTaskName = document.createElement('div');
        subTaskName.classList.add('sub-task-name');
        subTaskItems[index].append(subTaskName);
        subTaskName.innerHTML = `<p>`+subTasksList[index]['name']+`</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
      </svg>`;
    }

    subTasks.append(newSubTask);

    taskName.innerHTML = `<h3>`+task['name']+`</h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    </svg>`;


    taskDueDate.innerHTML = `<p>Due date:</p>
    <date>`+ task['date'] +`</date>`;
    subTasksHeader.innerHTML = `Sub tasks:`
    newSubTask.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>
  <p>Add new sub task...</p>`;
    deleteSubTask.innerText = `Delete task`;

    //adding eventListeners
    document.querySelector('.task-name svg').addEventListener('click',
    buildModal.bind(null, 'editTask'));
    document.querySelector('.new-sub-task').addEventListener('click',
    buildModal.bind(null, 'addSubTask'));
    document.querySelector('.delete-sub-task').addEventListener('click',
    buildModal.bind(null, 'deleteTask'));

    buildSubTaskCheckListener();
    buildDeleteSubTaskListener();

}

export function changeTaskStatus(taskClass){
    const task = document.querySelector('.' + taskClass);
    const activeTasks = document.querySelector('.active-tasks');
    const completedTasks = document.querySelector('.completed-tasks');
    for (const item of newUser.getTasks()) {
        if(item['class'] == taskClass){
            if(item['completed']){
                task.parentNode.removeChild(task);
                activeTasks.insertBefore(task,document.querySelector('.new-task'));
            }
            else{
                task.parentNode.removeChild(task);
                completedTasks.append(task);
            }
            newUser.changeTaskStatus(newUser.getTasks().indexOf(item));
            break;
        }
    }
}

export function changeSubTaskStatus(subTaskClass){
    for (const item of newUser.getSubTasks()) {
        if(item['class'] == subTaskClass){
            console.log(item['completed']);
            newUser.changeSubTaskStatus(newUser.getSubTasks().indexOf(item));
            break;
        }
    }
}

export function deleteSubTaskElement(subTaskClass){
    const subTask = document.querySelector('.'+subTaskClass);
    for (const item of newUser.getSubTasks()) {
        if( item['class'] == subTaskClass){
            newUser.deleteSubTask(newUser.getSubTasks().indexOf(item));
            subTask.parentElement.removeChild(subTask);
            console.log(newUser.getSubTasks())
            break;
        }
    }
}