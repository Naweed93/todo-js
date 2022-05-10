export function taskDetailsComponent(){
    const taskDetails = document.createElement('div');
    const taskHeader = document.createElement('div');
    const taskProperties = document.createElement('div');
    const deleteSubTask = document.createElement('p');
    const taskName = document.createElement('div');
    const taskDueDate = document.createElement('div');
    const subTasks = document.createElement('div');
    const subTask1 = document.createElement('div');
    const newSubTask = document.createElement('div');
    const subTaskName = document.createElement('div');

    taskDetails.classList.add('task-details');
    taskHeader.classList.add('task-header');
    taskProperties.classList.add('task-properties');
    deleteSubTask.classList.add('delete-sub-task');
    taskName.classList.add('task-name');
    taskDueDate.classList.add('task-due-date');
    subTasks.classList.add('sub-tasks');
    subTask1.classList.add('sub-task-1');
    newSubTask.classList.add('new-sub-task');
    subTaskName.classList.add('sub-task-name');

    taskDetails.append(taskHeader, taskProperties, deleteSubTask);
    taskHeader.append(taskName);
    taskProperties.append(taskDueDate);
    taskProperties.innerHTML += '<h4>Sub tasks:</h4>';
    taskProperties.append(subTasks);
    subTasks.append(subTask1, newSubTask);
    subTask1.innerHTML = `<input type="checkbox" id="task3" name="task3" value="task3">`;
    subTask1.append(subTaskName);


    taskName.innerHTML = `<h3>purchase a host</h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    </svg>`;
    taskDueDate.innerHTML = `<p>Due date:</p>
    <date>19/12/2022</date>`;
    subTaskName.innerHTML = `<p>sub task 1</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
      </svg>`;
      newSubTask.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>
  <p>Add new sub task...</p>`;
  deleteSubTask.innerText = `Delete task`;

    return taskDetails;
}