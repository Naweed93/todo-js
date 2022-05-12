import { localStorageManager } from "./localStorage";

export const user = (_username) =>{
    let _projects = [['all-tasks-btn','All tasks'],['today-tasks-btn','Today']];
    let _tasks = [];
    let _subTasks = [];
    let _theme = 'light';
    let project_length = 2;
    let task_length = 0;
    let sub_task_length = 0;
    let _isOnStart ;
    const addProject = (project) => {
        _projects.push(project);
        if(!_isOnStart){
            localStorageManager('add-project');
            document.querySelector(".sidebar-statistics p:first-child").innerText ='total projects: '+ _projects.length;
        }
    };
    const getProject = () =>{
        return _projects;
    };
    const deleteProject = (index) =>{
        _projects.splice(index, 1);
        document.querySelector(".sidebar-statistics p:first-child").innerText ='total projects: '+ _projects.length;
        localStorageManager('add-project');
    };
    const changeProjectName = (newName, index) => {
        _projects[index][1] = newName;
        localStorageManager('add-project');
    };
    const getTasks = () => {
        return _tasks;
    };
    const deleteTask = (index) => {        
            _tasks.splice(index, 1);   
            document.querySelectorAll(".sidebar-statistics p")[1].innerText ='total tasks: '+ _tasks.length;
            localStorageManager('add-task');
    };
    const addTask = (taskProject,taskDate,taskClass,taskName, taskCompleted = false) => {
        _tasks.push({
            "project":taskProject,
            "date":taskDate,
            "class":taskClass,
            "name":taskName,
            "completed":taskCompleted
        });
        if(!_isOnStart){
            localStorageManager('add-task');
            document.querySelectorAll(".sidebar-statistics p")[1].innerText ='total tasks: '+ _tasks.length;
        }
    };
    const editTask = (taskName,taskDate,index) => {
        _tasks[index]['name']=taskName;
        _tasks[index]['date']=taskDate;
        localStorageManager('add-task');
    };
    const changeTaskStatus = (index) => {
        if (_tasks[index]['completed'] ){
            _tasks[index]['completed'] = false ;
        }
        else{
            _tasks[index]['completed'] = true ;
        }
        localStorageManager('add-task');
    };
    const getUsername = () =>{
        return _username
    };
    const setUsername = (username) =>{
        _username = username;
        if(!_isOnStart){
            localStorageManager('add-username');
        }
    };
    const setTheme = (theme) => {
        _theme = theme;
        if(!_isOnStart){
            localStorageManager('add-theme');
        }
    };
    const getTheme = () => {
        return _theme;
    };
    const getSubTasks = () => {
        return _subTasks;
    };
    const addSubTask = (subTaskParent, subTaskClass, subTaskName, subTaskCompleted = false) => {
        _subTasks.push({
            'task': subTaskParent,
            'class': subTaskClass,
            'name': subTaskName,
            'completed': subTaskCompleted
        });
        if(!_isOnStart){
            localStorageManager('add-sub-task');
        }
    };
    const deleteSubTask = (index) => {
        _subTasks.splice(index, 1);
        localStorageManager('add-sub-task');
    };
    const changeSubTaskStatus = (index) => {
        if (_subTasks[index]['completed'] ){
            _subTasks[index]['completed'] = false ;
        }
        else{
            _subTasks[index]['completed'] = true ;
        }
        localStorageManager('add-sub-task');
    };
    const setIsOnStart = (value) =>{
        _isOnStart = value;
    }
    return { addProject, getUsername, setUsername, getProject, getTasks, setTheme, project_length,
        deleteProject, deleteTask, task_length, addTask, changeProjectName, sub_task_length, getSubTasks,
        editTask, addSubTask, deleteSubTask, changeTaskStatus, changeSubTaskStatus, getTheme, setIsOnStart };
};