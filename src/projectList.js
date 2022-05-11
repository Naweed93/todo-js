export function projectListComponent(){
    const projectList = document.createElement('div');
    const projectHeader = document.createElement('div');
    const taskList = document.createElement('div');
    const projectName = document.createElement('div');
    const activeTasks = document.createElement('div');
    const completedTasks = document.createElement('div');
    const task1 = document.createElement('div');
    const newTask = document.createElement('div');

    projectList.classList.add('project-list');
    projectHeader.classList.add('project-header');
    taskList.classList.add('task-list');
    projectName.classList.add('project-name');
    activeTasks.classList.add('active-tasks');
    completedTasks.classList.add('completed-tasks');
    task1.classList.add('task1');
    newTask.classList.add('new-task');

    projectList.append(projectHeader, taskList);
    projectHeader.append(projectName);
    taskList.append(activeTasks, completedTasks);
    activeTasks.append(task1,newTask);


    projectName.innerHTML = `<h2>My Project</h2>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
      </svg>`;
    newTask.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
<p>Add new task...</p>`;
    completedTasks.innerHTML = `<h3>Completed tasks</h3>
    <div class="task2">
        <input type="checkbox" checked id="task2" name="task2" value="task2">
        <div class="task-content">
            <p>buy domain</p>
            <date>18/12/2022</date>
        </div>
    </div>`;

    
    
    return projectList;
}