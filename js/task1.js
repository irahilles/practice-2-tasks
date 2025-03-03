// Create task list. There is an input where u put your task name. after pressing button add the task is added to the list. next to each task there is button "delete", for removing the task from the list.
// The task list has to be accesseble after refreshing the page.


const refs = {
    form: document.querySelector('#task1-form'),
    input: document.querySelector('[name="to-do-list"]'),
    list: document.querySelector('#task-list'),
};

let taskList = [];

refs.form.addEventListener('submit', (e)=>{
e.preventDefault();
const userValue = refs.input.value.trim();
if(!userValue){return};
taskList.push(userValue);
refs.list.innerHTML = '';
refs.list.insertAdjacentHTML('beforeend', showList(taskList));
refs.input.value = '';
});

function showList(taskList){
    return taskList.map((task, index)=>`<li class="list-item">
            <p>${task}</p>
            <button class="delete"  data-index="${index}">Delete</button>
        </li>`).join('');
};

refs.list.addEventListener('click', (e)=>{
   if(e.target.tagName === 'BUTTON'){
    const index = Number(e.target.dataset.index); 
        deleteTask(index);
   }
});

function deleteTask(index) {
    taskList.splice(index, 1); 
    renderList(); 
}