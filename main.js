/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildModal\": () => (/* binding */ buildModal),\n/* harmony export */   \"buildwebsite\": () => (/* binding */ buildwebsite)\n/* harmony export */ });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n/* harmony import */ var _taskDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskDetails */ \"./src/taskDetails.js\");\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals */ \"./src/modals.js\");\n\n\n\n\n\nfunction buildwebsite(){\n    document.body.append((0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.sidebarComponent)(), (0,_projectList__WEBPACK_IMPORTED_MODULE_1__.projectListComponent)(), (0,_taskDetails__WEBPACK_IMPORTED_MODULE_2__.taskDetailsComponent)());\n}\n\nfunction buildModal(item){\n    if(!document.querySelector('.modal')){\n        const modal = document.createElement('div');\n        \n        modal.classList.add('modal');\n\n        modal.appendChild((0,_modals__WEBPACK_IMPORTED_MODULE_3__.modalComponent)()[item]);\n        document.body.append(modal);\n        modalBehavior();\n    }\n}\n\nfunction modalBehavior(){\n    document.querySelector('.modal p:last-child').addEventListener('click',\n    removeModal);\n}\nfunction removeModal(){\n    document.body.removeChild(document.querySelector('.modal'));\n}\n\n//# sourceURL=webpack://todo/./src/base.js?");

/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildEventListeners\": () => (/* binding */ buildEventListeners)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n\n\n\nfunction buildEventListeners(){\n    document.querySelector('.new-project-btn').addEventListener('click',\n    _base__WEBPACK_IMPORTED_MODULE_0__.buildModal.bind(null, 'addProject'));\n    document.querySelector('.settings svg').addEventListener('click',\n    _base__WEBPACK_IMPORTED_MODULE_0__.buildModal.bind(null, 'settings'));\n    document.querySelector('.project-name svg').addEventListener('click',\n    _base__WEBPACK_IMPORTED_MODULE_0__.buildModal.bind(null, 'editProject'));\n    document.querySelector('.project-delete-btn').addEventListener('click',\n    _base__WEBPACK_IMPORTED_MODULE_0__.buildModal.bind(null, 'deleteProject'));\n    document.querySelector('.new-task').addEventListener('click',\n    _base__WEBPACK_IMPORTED_MODULE_0__.buildModal.bind(null, 'addTask'));\n    document.querySelector('.task-name svg').addEventListener('click',\n    _base__WEBPACK_IMPORTED_MODULE_0__.buildModal.bind(null, 'editTask'));\n    document.querySelector('.new-sub-task').addEventListener('click',\n    _base__WEBPACK_IMPORTED_MODULE_0__.buildModal.bind(null, 'addSubTask'));\n    document.querySelector('.delete-sub-task').addEventListener('click',\n    _base__WEBPACK_IMPORTED_MODULE_0__.buildModal.bind(null, 'deleteTask'));\n}\n\n//# sourceURL=webpack://todo/./src/eventListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\n\n\n(0,_base__WEBPACK_IMPORTED_MODULE_0__.buildwebsite)();\n(0,_eventListeners__WEBPACK_IMPORTED_MODULE_1__.buildEventListeners)();\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modals.js":
/*!***********************!*\
  !*** ./src/modals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalComponent\": () => (/* binding */ modalComponent)\n/* harmony export */ });\nfunction modalComponent(){\n    const settingsInterface = document.createElement('div');\n    const addProject = document.createElement('div');\n    const editProject = document.createElement('div');\n    const projectDelete = document.createElement('div');\n    const taskDelete = document.createElement('div');\n    const editTask = document.createElement('div');\n    const addTask = document.createElement('div');\n    const addSubTask = document.createElement('div');\n\n    settingsInterface.classList.add('settings-interface');\n    projectDelete.classList.add('project-delete');\n    taskDelete.classList.add('task-delete');\n    addProject.classList.add('add-project');\n    editProject.classList.add('edit-project');\n    editTask.classList.add('edit-task');\n    addTask.classList.add('add-task');\n    addSubTask.classList.add('add-sub-task');\n\n\n    settingsInterface.innerHTML = `<div class=\"change-username\">\n    <p>Enter your name:</p>\n    <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"username\">\n</div>\n<div class=\"change-theme\">\n    <p>Change theme:</p>\n    <label class=\"switch\">\n        <input type=\"checkbox\">\n        <span class=\"slider\"></span>\n    </label>\n</div>\n<div class=\"settings-buttons\">\n    <p>Save</p>\n    <p>Cancel</p>\n</div>`;\n    projectDelete.innerHTML = `<h3>Are you sure?</h3>\n    <p>(All the tasks within the project will be deleted!)</p>\n    <div class=\"project-delete-buttons\">\n        <p>Delete</p>\n        <p>Cancel</p>\n    </div>`;\n    taskDelete.innerHTML = `<h3>Are you sure?</h3>\n    <div class=\"task-delete-buttons\">\n        <p>Delete</p>\n        <p>Cancel</p>\n    </div>`;\n    addProject.innerHTML = `<div class=\"change-project-name\">\n    <p>project name:</p>\n    <input type=\"text\" id=\"add-project\" name=\"add-project\" placeholder=\"New project\">\n</div>\n<div class=\"add-project-buttons\">\n    <p>Ok</p>\n    <p>Cancel</p>\n</div>`;\n    editProject.innerHTML = `<div class=\"change-project-name\">\n    <p>project name:</p>\n    <input type=\"text\" id=\"edit-project\" name=\"edit-project\">\n</div>\n<div class=\"edit-project-buttons\">\n    <p>Ok</p>\n    <p>Cancel</p>\n</div>`;\n    editTask.innerHTML = `<div class=\"change-task-name\">\n    <p>task name:</p>\n    <input type=\"text\" id=\"edit-task\" name=\"edit-task\">\n</div>\n<div class=\"change-task-date\">\n    <p>Due date:</p>\n    <date></date>\n</div>\n<div class=\"edit-task-buttons\">\n    <p>Ok</p>\n    <p>Cancel</p>\n</div>`;\n    addTask.innerHTML = `<div class=\"change-task-name\">\n    <p>task name:</p>\n    <input type=\"text\" id=\"add-task\" name=\"add-task\">\n</div>\n<div class=\"change-task-date\">\n    <p>Due date:</p>\n    <date></date>\n</div>\n<div class=\"add-task-buttons\">\n    <p>Ok</p>\n    <p>Cancel</p>\n</div>`;\n    addSubTask.innerHTML = `<div class=\"change-sub-task-name\">\n    <p>sub task name:</p>\n    <input type=\"text\" id=\"add-sub-task\" name=\"add-sub-task\">\n</div>\n<div class=\"add-sub-task-buttons\">\n    <p>Ok</p>\n    <p>Cancel</p>\n</div>`;\n\n    return {settings:settingsInterface, addProject:addProject, editProject:editProject,\n        deleteProject:projectDelete, deleteTask:taskDelete, editTask:editTask,\n        addTask:addTask, addSubTask:addSubTask};\n}\n\n//# sourceURL=webpack://todo/./src/modals.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectListComponent\": () => (/* binding */ projectListComponent)\n/* harmony export */ });\nfunction projectListComponent(){\n    const projectList = document.createElement('div');\n    const projectHeader = document.createElement('div');\n    const taskList = document.createElement('div');\n    const projectName = document.createElement('div');\n    const projectDeleteBtn = document.createElement('p');\n    const activeTasks = document.createElement('div');\n    const completedTasks = document.createElement('div');\n    const task1 = document.createElement('div');\n    const newTask = document.createElement('div');\n\n    projectList.classList.add('project-list');\n    projectHeader.classList.add('project-header');\n    taskList.classList.add('task-list');\n    projectName.classList.add('project-name');\n    projectDeleteBtn.classList.add('project-delete-btn');\n    activeTasks.classList.add('active-tasks');\n    completedTasks.classList.add('completed-tasks');\n    task1.classList.add('task1');\n    newTask.classList.add('new-task');\n\n    projectList.append(projectHeader, taskList);\n    projectHeader.append(projectName, projectDeleteBtn);\n    taskList.append(activeTasks, completedTasks);\n    activeTasks.append(task1,newTask);\n\n\n    projectName.innerHTML = `<h2>My Project</h2>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" fill=\"currentColor\" class=\"bi bi-pencil\" viewBox=\"0 0 16 16\">\n        <path d=\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"/>\n      </svg>`;\n    projectDeleteBtn.innerText = `Delete`;\n    task1.innerHTML = `<input type=\"checkbox\" id=\"task1\" name=\"task1\" value=\"task1\">\n    <div class=\"task-content\">\n        <p>purchase a host</p>\n        <date>19/12/2022</date>\n    </div>`;\n    newTask.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" fill=\"currentColor\" class=\"bi bi-plus\" viewBox=\"0 0 16 16\">\n    <path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/>\n</svg>\n<p>Add new task...</p>`;\n    completedTasks.innerHTML = `<h3>Completed tasks</h3>\n    <div class=\"task2\">\n        <input type=\"checkbox\" checked id=\"task2\" name=\"task2\" value=\"task2\">\n        <div class=\"task-content\">\n            <p>buy domain</p>\n            <date>18/12/2022</date>\n        </div>\n    </div>`;\n\n    \n    \n    return projectList;\n}\n\n//# sourceURL=webpack://todo/./src/projectList.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sidebarComponent\": () => (/* binding */ sidebarComponent)\n/* harmony export */ });\nfunction sidebarComponent(){\n    const sidebar = document.createElement('div');\n    const sidebarContent = document.createElement('div');\n    const settings = document.createElement('div');\n    const logo = document.createElement('div');\n    const sidebarProjects = document.createElement('div');\n    const sidebarStatistics = document.createElement('div');\n    const allTasksBtn = document.createElement('div');\n    const todayTasksBtn = document.createElement('div');\n    const taskProject1 = document.createElement('div');\n    const newProjectBtn = document.createElement('div');\n\n    sidebar.classList.add('sidebar');\n    sidebarContent.classList.add('sidebar-content');\n    settings.classList.add('settings');\n    logo.classList.add('logo');\n    sidebarProjects.classList.add('sidebar-projects');\n    sidebarStatistics.classList.add('sidebar-statistics');\n    allTasksBtn.classList.add('all-tasks-btn');\n    todayTasksBtn.classList.add('today-tasks-btn');\n    taskProject1.classList.add('task-project-1');\n    newProjectBtn.classList.add('new-project-btn');\n\n    sidebar.appendChild(sidebarContent);\n    sidebar.appendChild(settings);\n    sidebarContent.appendChild(logo);\n    sidebarContent.appendChild(sidebarProjects);\n    sidebarContent.appendChild(sidebarStatistics);\n    logo.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"currentColor\" class=\"bi bi-check2-all\" viewBox=\"0 0 16 16\">\n    <path d=\"M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z\"/>\n    <path d=\"m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z\"/>\n  </svg>\n  <h1>Worganizer</h1>`;\n    sidebarProjects.appendChild(allTasksBtn);\n    sidebarProjects.appendChild(todayTasksBtn);\n    sidebarProjects.appendChild(taskProject1);\n    sidebarProjects.appendChild(newProjectBtn);\n    allTasksBtn.innerHTML=`<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-list-task\" viewBox=\"0 0 16 16\">\n    <path fill-rule=\"evenodd\" d=\"M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z\"/>\n    <path d=\"M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z\"/>\n    <path fill-rule=\"evenodd\" d=\"M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z\"/>\n  </svg>\n<p>All tasks</p>`;\n    todayTasksBtn.innerHTML=`<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-calendar2-check\" viewBox=\"0 0 16 16\">\n    <path d=\"M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z\"/>\n    <path d=\"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z\"/>\n    <path d=\"M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z\"/>\n  </svg>\n<p>Today</p>`;\n    taskProject1.innerHTML=`<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-folder2\" viewBox=\"0 0 16 16\">\n    <path d=\"M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z\"/>\n  </svg>\n<p>My Project</p>`;\n    newProjectBtn.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-plus\" viewBox=\"0 0 16 16\">\n    <path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/>\n  </svg>\n<p>New project</p>`;\n    sidebarStatistics.innerHTML=`<p>total projects: 19</p>\n    <p>total tasks: 19</p>\n    <p>19 may 2022 </p>`;\n    settings.innerHTML=`<p>User Name</p>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" fill=\"currentColor\" class=\"bi bi-gear-fill\" viewBox=\"0 0 16 16\">\n        <path d=\"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z\"/>\n    </svg>`;\n    \n\n    return sidebar;\n}\n\n//# sourceURL=webpack://todo/./src/sidebar.js?");

/***/ }),

/***/ "./src/taskDetails.js":
/*!****************************!*\
  !*** ./src/taskDetails.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskDetailsComponent\": () => (/* binding */ taskDetailsComponent)\n/* harmony export */ });\nfunction taskDetailsComponent(){\n    const taskDetails = document.createElement('div');\n    const taskHeader = document.createElement('div');\n    const taskProperties = document.createElement('div');\n    const deleteSubTask = document.createElement('p');\n    const taskName = document.createElement('div');\n    const taskDueDate = document.createElement('div');\n    const subTasks = document.createElement('div');\n    const subTask1 = document.createElement('div');\n    const newSubTask = document.createElement('div');\n    const subTaskName = document.createElement('div');\n\n    taskDetails.classList.add('task-details');\n    taskHeader.classList.add('task-header');\n    taskProperties.classList.add('task-properties');\n    deleteSubTask.classList.add('delete-sub-task');\n    taskName.classList.add('task-name');\n    taskDueDate.classList.add('task-due-date');\n    subTasks.classList.add('sub-tasks');\n    subTask1.classList.add('sub-task-1');\n    newSubTask.classList.add('new-sub-task');\n    subTaskName.classList.add('sub-task-name');\n\n    taskDetails.append(taskHeader, taskProperties, deleteSubTask);\n    taskHeader.append(taskName);\n    taskProperties.append(taskDueDate);\n    taskProperties.innerHTML += '<h4>Sub tasks:</h4>';\n    taskProperties.append(subTasks);\n    subTasks.append(subTask1, newSubTask);\n    subTask1.innerHTML = `<input type=\"checkbox\" checked id=\"task3\" name=\"task3\" value=\"task3\">`;\n    subTask1.append(subTaskName);\n\n\n    taskName.innerHTML = `<h3>purchase a host</h3>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" fill=\"currentColor\" class=\"bi bi-pencil\" viewBox=\"0 0 16 16\">\n        <path d=\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"/>\n    </svg>`;\n    taskDueDate.innerHTML = `<p>Due date:</p>\n    <date>19/12/2022</date>`;\n    subTaskName.innerHTML = `<p>sub task 1</p>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"red\" class=\"bi bi-x-lg\" viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\" d=\"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z\"/>\n        <path fill-rule=\"evenodd\" d=\"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z\"/>\n      </svg>`;\n      newSubTask.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" fill=\"currentColor\" class=\"bi bi-plus\" viewBox=\"0 0 16 16\">\n      <path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/>\n  </svg>\n  <p>Add new sub task...</p>`;\n  deleteSubTask.innerText = `Delete task`;\n\n    return taskDetails;\n}\n\n//# sourceURL=webpack://todo/./src/taskDetails.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;