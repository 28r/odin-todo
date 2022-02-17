import { parseISO } from 'date-fns'

import Checked from './assets/checked.png'
import Unchecked from './assets/unchecked.png'
import Delete from './assets/delete.png'

let myLists = [];
let focusList = 0;
let loadingModuleUsedLast = undefined;

function Todo(title, description, dueDate, priority, notes, checkList, markedForDeletion) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checkList = checkList;
    this.markedForDeletion = markedForDeletion;
}

function List(todos, color, listName) {
    this.todos = todos;
    this.color = color;
    this.listName = listName;
}

function AddSamples() {
    myLists[0] = new List([], 'red', 'Default');
    AddNewTodo('Do the dishes', `In the dishwasher`, new Date(2022, 1, 20), '8', 'none', false, false);
    AddNewTodo('Learn JavaScript', 'and React', new Date(2022, 1, 22), '10', 'none', false, false);
    AddNewTodo('Cook bulgogi', 'with soju', new Date(2022, 1, 22), '6', 'none', false, false);
    // months in JavaScript are indexed 0-11; must account for this later
    localStorage.setItem("myLists", JSON.stringify(myLists));
    //todo
}

function LoadPage() {
    LoadSideBar();
    LoadTodos();
}

function LoadTodos() {
    let todosarea = document.getElementById('todos');
    todosarea.innerHTML = "&nbsp;"
    for (let i = 0; i < myLists[focusList].todos.length; i++) {
        let thisTodo = document.createElement('div');
        thisTodo.innerHTML = `Title: ${myLists[focusList].todos[i].title}. Description: ${myLists[focusList].todos[i].description}. Due date: ${parseISO(myLists[focusList].todos[i].dueDate).toLocaleDateString()}. Priority: ${myLists[focusList].todos[i].priority}. Notes: ${myLists[focusList].todos[i].notes}.`;
        let thisIcon = document.createElement('img');
        if (myLists[focusList].todos[i].checkList === false) {
            thisIcon.src = Unchecked;
        }
        else if (myLists[focusList].todos[i].checkList === true) {
            thisIcon.src = Checked;
        }
        thisIcon.classList.add('icon');
        thisIcon.setAttribute('onclick', `ToggleChecked(${focusList}, ${i})`);
        let DeleteIcon = document.createElement('img'); 
        DeleteIcon.src = Delete;
        DeleteIcon.classList.add('icon'); 
        DeleteIcon.style.cursor = 'pointer';
        DeleteIcon.setAttribute('onclick', `DeleteTodo(${focusList}, ${i})`); 
        let thisElement = document.createElement('div');
        thisElement.appendChild(thisIcon);
        thisElement.appendChild(DeleteIcon); 
        thisElement.appendChild(thisTodo);
        thisElement.classList.add('listitem');
        todosarea.appendChild(thisElement);
    }
    loadingModuleUsedLast = 'LoadTodos';
}

function LoadSideBar() {
    let sidebar = document.getElementById('sidebardynamic');
    sidebar.innerHTML = "&nbsp;";
    for (let i = 0; i < myLists.length; i++) {
        let thisList = document.createElement('div');
        thisList.innerHTML = `${myLists[i].listName}`;
        thisList.classList.add('sidebaritem');
        thisList.setAttribute("onclick", `SwitchLists(${i});`);
        sidebar.appendChild(thisList);
    }
}

function AddNewTodo(title, description, dueDate, priority, notes, checkList, markedForDeletion) {
    myLists[focusList].todos[myLists[focusList].todos.length] = new Todo(title, description, dueDate.toISOString(), priority, notes, checkList, markedForDeletion);
    localStorage.setItem("myLists", JSON.stringify(myLists));
}

function AddNewList(todos, color, listName) {
    myLists[myLists.length] = new List(todos, color, listName);
    localStorage.setItem("myLists", JSON.stringify(myLists));
}

function SwitchLists(index) {
    focusList = index;
    LoadTodos();
}
window.SwitchLists = SwitchLists;

function ToggleChecked(index1, index2) {
    if (myLists[index1].todos[index2].checkList === true) {
        myLists[index1].todos[index2].checkList = false;
    }
    else if (myLists[index1].todos[index2].checkList === false) {
        myLists[index1].todos[index2].checkList = true;
    }
    localStorage.setItem("myLists", JSON.stringify(myLists));
    if (loadingModuleUsedLast === 'ShowAllTodos') {
        ShowAllTodos();
    }
    else if (loadingModuleUsedLast === 'LoadTodos') {
        LoadTodos();
    }
}
window.ToggleChecked = ToggleChecked;

function DeleteTodo(index1, index2) {
    myLists[index1].todos.splice(index2, 1);
    localStorage.setItem("myLists", JSON.stringify(myLists));
    if (loadingModuleUsedLast === 'ShowAllTodos') {
        ShowAllTodos();
    }
    else if (loadingModuleUsedLast === 'LoadTodos') {
        LoadTodos();
    }
    //todo
}
window.DeleteTodo = DeleteTodo;

function ShowAllTodos() {
    let todosarea = document.getElementById('todos');
    todosarea.innerHTML = "&nbsp;"
    for (let i = 0; i < myLists.length; i++) {
        for (let j = 0; j < myLists[i].todos.length; j++) {
            let thisTodo = document.createElement('div');
            thisTodo.innerHTML = `In list: ${myLists[i].listName}. Title: ${myLists[i].todos[j].title}. Description: ${myLists[i].todos[j].description}. Due date: ${parseISO(myLists[i].todos[j].dueDate).toLocaleDateString()}. Priority: ${myLists[i].todos[j].priority}. Notes: ${myLists[i].todos[j].notes}.`;
            let thisIcon = document.createElement('img');
            if (myLists[i].todos[j].checkList === false) {
                thisIcon.src = Unchecked;
            }
            else if (myLists[i].todos[j].checkList === true) {
                thisIcon.src = Checked;
            }
            thisIcon.classList.add('icon');
            thisIcon.setAttribute('onclick', `ToggleChecked(${i}, ${j})`);
            let DeleteIcon = document.createElement('img'); 
            DeleteIcon.src = Delete;
            DeleteIcon.classList.add('icon'); 
            DeleteIcon.style.cursor = 'pointer';
            DeleteIcon.setAttribute('onclick', `DeleteTodo(${i}, ${j})`); 
            let thisElement = document.createElement('div');
            thisElement.appendChild(thisIcon);
            thisElement.appendChild(DeleteIcon);
            thisElement.appendChild(thisTodo);
            thisElement.classList.add('listitem');
            todosarea.appendChild(thisElement);
        }
    }
    loadingModuleUsedLast = 'ShowAllTodos';
}
window.ShowAllTodos = ShowAllTodos;

if (localStorage.getItem("myLists") === null) {
    AddSamples();
    LoadPage();
}
else {
    myLists = JSON.parse(localStorage.getItem("myLists")).slice();
    LoadPage();
}

function newListForDebugPurposes() {
    AddNewList([], 'red', 'anylist'); focusList = 1; AddNewTodo('oi', 'sim sou eu', new Date(2022, 8, 9), '10', 'empty', false, false); focusList = 0; LoadSideBar();
}
window.newListForDebugPurposes = newListForDebugPurposes;