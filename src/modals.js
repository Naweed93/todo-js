export function modalComponent(){
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
        <input type="checkbox">
        <span class="slider"></span>
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
    <date></date>
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
    <date></date>
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