import { parse, parseISO } from 'date-fns'

import Checked from './assets/checked.png'
import Unchecked from './assets/unchecked.png'
import Delete from './assets/delete.png'

let myLists = [];
let focusList = 0;
let loadingModuleUsedLast = undefined;

function Todo(title, description, dueDate, priority, notes, checkList) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checkList = checkList;
}

function List(todos, color, listName) {
    this.todos = todos;
    this.color = color;
    this.listName = listName;
}

function AddSamples() {
    myLists[0] = new List([], 'red', 'Default');
    AddNewTodo('Do the dishes', `In the dishwasher`, new Date(2022, 1, 20), '8', 'none', false);
    AddNewTodo('Learn JavaScript', 'and React', new Date(2022, 1, 22), '10', 'none', false);
    AddNewTodo('Cook bulgogi', 'with soju', new Date(2022, 1, 22), '6', 'none', false);
    // months in JavaScript are indexed 0-11
    localStorage.setItem("myLists", JSON.stringify(myLists));
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
        let DeleteIcon = document.createElement('img');
        DeleteIcon.src = Delete;
        DeleteIcon.classList.add('icon');
        DeleteIcon.style.cursor = 'pointer';
        DeleteIcon.setAttribute('onclick', `DeleteList(${i})`); 
        let thisElement = document.createElement('div');
        let thisList = document.createElement('span');
        thisList.innerHTML = `${myLists[i].listName}`;
        thisList.setAttribute("onclick", `SwitchLists(${i});`);
        thisElement.appendChild(DeleteIcon);
        thisElement.appendChild(thisList);
        thisElement.classList.add('sidebaritem');
        sidebar.appendChild(thisElement);
    }
}

function AddNewTodo(title, description, dueDate, priority, notes, checkList) {
    myLists[focusList].todos[myLists[focusList].todos.length] = new Todo(title, description, dueDate.toISOString(), priority, notes, checkList);
    localStorage.setItem("myLists", JSON.stringify(myLists));
}

function AddNewList(todos, color, listName) {
    myLists[myLists.length] = new List(todos, color, listName);
    localStorage.setItem("myLists", JSON.stringify(myLists));
}

function parseDate(s) {
    var b = s.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
}

function UserAddTodo() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    let notes = document.getElementById('notes').value;
    if (!dueDate) {
        window.alert("Couldn't add your todo as requested — check if you have picked a title and a due date.");
        return 1;
    }
    if (!notes) {
        notes = 'none';
    }
    if (!description) {
        description = 'none';
    }
    if (!priority) {
        priority = 7;
    }
    let date = parseDate(dueDate);
    if (title && dueDate && priority > 0 && priority < 11) {
        AddNewTodo(title, description, date, priority, notes, false);
    }
    else {
        window.alert("Couldn't add your todo as requested — check if you have picked a title and a due date. Priority must be set between 1 and 10!");
        return 1;
    }
    localStorage.setItem("myLists", JSON.stringify(myLists));
    if (loadingModuleUsedLast === 'ShowAllTodos') {
        ShowAllTodos();
    }
    else if (loadingModuleUsedLast === 'LoadTodos') {
        LoadTodos();
    }
}
window.UserAddTodo = UserAddTodo;

function UserAddList() {
    let listName = document.getElementById('listName').value;
    let color = document.getElementById('color').value;
    if (!listName) {
        window.alert("Please pick a name for your list.");
        return 1;
    }
    if (!color) {
        color = '#ff0000';
    }
    AddNewList([], color, listName);
    localStorage.setItem("myLists", JSON.stringify(myLists));
    LoadSideBar();
}
window.UserAddList = UserAddList;

function SwitchLists(index) {
    focusList = index;
    LoadTodos();
}
window.SwitchLists = SwitchLists;

function ExpandNewList() {
    if (document.getElementById('addtodoform').classList.contains('invisible') === false) {
        ExpandNewTodo();
    }
    let button = document.getElementById('newlist');
    let form = document.getElementById('addlistform');
    if (form.classList.contains('invisible') === true) {
        form.classList.remove('invisible');
        button.innerHTML = 'Collapse';
    }
    else {
        form.classList.add('invisible');
        button.innerHTML = 'New List';
    }
}
window.ExpandNewList = ExpandNewList;

function ExpandNewTodo() {
    if (document.getElementById('addlistform').classList.contains('invisible') === false) {
        ExpandNewList();
    }
    let button = document.getElementById('newtodo');
    let form = document.getElementById('addtodoform');
    if (form.classList.contains('invisible') === true) {
        form.classList.remove('invisible');
        button.innerHTML = 'Collapse';
    }
    else {
        form.classList.add('invisible');
        button.innerHTML = 'New Todo';
    }
}
window.ExpandNewTodo = ExpandNewTodo;

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

function DeleteList(index1) {
    myLists.splice(index1, 1);
    localStorage.setItem("myLists", JSON.stringify(myLists));
    LoadSideBar();
    if (focusList === index1) {
        focusList = 0;
    }
    if (loadingModuleUsedLast === 'ShowAllTodos') {
        ShowAllTodos();
    }
    else if (loadingModuleUsedLast === 'LoadTodos') {
        LoadTodos();
    }
}
window.DeleteList = DeleteList;

if (localStorage.getItem("myLists") === null) {
    AddSamples();
    LoadPage();
}
else {
    myLists = JSON.parse(localStorage.getItem("myLists")).slice();
    LoadPage();
}

function newListForDebugPurposes() {
    AddNewList([], 'red', 'anylist'); let helper = focusList; focusList = myLists.length - 1; AddNewTodo('oi', 'sim sou eu', new Date(2022, 8, 9), '10', 'empty', false); focusList = helper; LoadSideBar();
}
window.newListForDebugPurposes = newListForDebugPurposes;