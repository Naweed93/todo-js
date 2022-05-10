export const user = (_username) =>{
    let _projects = [['all-tasks-btn','All tasks'],['today-tasks-btn','Today'],['project-1','My project'],['project-2','your project']];
    let _tasks = [
        {"project":"project-1",
        "date": "19/12/2021",
        "class":"task-1",
        "name":"task1",
        "completed":true
    },
    {"project":"project-2",
        "date": "19/12/2021",
        "class":"task-2",
        "name":"task2",
        "completed":false
    },
    {"project":"project-3",
        "date": "19/12/2021",
        "class":"task-3",
        "name":"task3",
        "completed":false
    },
    {"project":"project-1",
        "date": "1/12/2021",
        "class":"task-4",
        "name":"task4",
        "completed":false
    },
    {"project":"project-1",
        "date": "14/12/2021",
        "class":"task-5",
        "name":"task5",
        "completed":false
    }
    ];
    let _theme = 'light';
    const addProject = (project) => {
        _projects.push(project);
    };
    const getProject = () =>{
        return _projects;
    };
    const getTasks = () => {
        return _tasks;
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
    return { addProject, getUsername, setUsername, getProject, getTasks, setTheme };
};