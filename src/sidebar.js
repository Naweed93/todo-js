import { newUser } from "./index";

export function sidebarComponent(){
    const sidebar = document.createElement('div');
    const sidebarContent = document.createElement('div');
    const settings = document.createElement('div');
    const logo = document.createElement('div');
    const sidebarProjects = document.createElement('div');
    const sidebarStatistics = document.createElement('div');

    const projects = newUser.getProject();
    const projectsComponent = [];
    for (let index = 0; index < projects.length; index++) {
      projectsComponent[index] = document.createElement('div');
      
    }

    const newProjectBtn = document.createElement('div');



    sidebar.classList.add('sidebar');
    sidebarContent.classList.add('sidebar-content');
    settings.classList.add('settings');
    logo.classList.add('logo');
    sidebarProjects.classList.add('sidebar-projects');
    sidebarStatistics.classList.add('sidebar-statistics');

    for (let index = 0; index < projectsComponent.length; index++) {
      if(index == 0){
        projectsComponent[index].classList.add(projects[index][0],'active-project');
      }
      else{
        projectsComponent[index].classList.add(projects[index][0]);
      }
      
    }

    newProjectBtn.classList.add('new-project-btn');




    sidebar.appendChild(sidebarContent);
    sidebar.appendChild(settings);
    sidebarContent.appendChild(logo);
    sidebarContent.appendChild(sidebarProjects);
    sidebarContent.appendChild(sidebarStatistics);

    for (const item of projectsComponent) {
      sidebarProjects.appendChild(item)
    }
    sidebarProjects.appendChild(newProjectBtn);

    logo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
    <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
  </svg>
  <h1>Worganizer</h1>`;
    for (let index = 0; index < projectsComponent.length; index++) {
      if(index<2){
        projectsComponent[index].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
        <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
        </svg>
        <p>`+projects[index][1]+`</p>`; 
      }
      else{
        projectsComponent[index].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-folder2" viewBox="0 0 16 16">
        <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z"></path>
        </svg>
        <p>`+projects[index][1]+`</p>`;
      }
    }
    newProjectBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>
<p>New project</p>`;
    sidebarStatistics.innerHTML=`<p>total projects: `+projects.length+`</p>
    <p>total tasks: `+newUser.getTasks().length+`</p>
    <p>19 may 2022 </p>`;
    settings.innerHTML=`<p>`+newUser.getUsername()+`</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
    </svg>`;
    

    return sidebar;
}