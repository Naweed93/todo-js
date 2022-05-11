import { localStorageManager } from "./localStorage";

export const user = (_username) =>{
    let _projects = [['all-tasks-btn','All tasks'],['today-tasks-btn','Today']];
    let _tasks = [];
    let _subTasks = [];
    let _theme = 'light';
    let project_length = 2;
    let task_length = 5;
    let sub_task_length = 4;
    const addProject = (project) => {
        _projects.push(project);
        localStorageManager('add-project');
    };
    const getProject = () =>{
        return _projects;
    };
    const deleteProject = (index) =>{
        _projects.splice(index, 1);
    };
    const changeProjectName = (newName, index) => {
        _projects[index][1] = newName;
    };
    const getTasks = () => {
        return _tasks;
    };
    const deleteTask = (index) => {        
            _tasks.splice(index, 1);   
    };
    const addTask = (taskProject,taskDate,taskClass,taskName, taskCompleted = false) => {
        _tasks.push({
            "project":taskProject,
            "date":taskDate,
            "class":taskClass,
            "name":taskName,
            "completed":taskCompleted
        });
        localStorageManager('add-task');
    };
    const editTask = (taskName,taskDate,index) => {
        _tasks[index]['name']=taskName;
        _tasks[index]['date']=taskDate;
        };
    const changeTaskStatus = (index) => {
        if (_tasks[index]['completed'] ){
            _tasks[index]['completed'] = false ;
        }
        else{
            _tasks[index]['completed'] = true ;
        }
    };
    const getUsername = () =>{
        return _username
    };
    const setUsername = (username) =>{
        _username = username;
    };
    const setTheme = (theme) => {
        _theme = theme;
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
        localStorageManager('add-sub-task');
    };
    const deleteSubTask = (index) => {
        _subTasks.splice(index, 1);
    };
    const changeSubTaskStatus = (index) => {
        if (_subTasks[index]['completed'] ){
            _subTasks[index]['completed'] = false ;
        }
        else{
            _subTasks[index]['completed'] = true ;
        }
    };
    return { addProject, getUsername, setUsername, getProject, getTasks, setTheme, project_length,
        deleteProject, deleteTask, task_length, addTask, changeProjectName, sub_task_length, getSubTasks,
        editTask, addSubTask, deleteSubTask, changeTaskStatus, changeSubTaskStatus };
};