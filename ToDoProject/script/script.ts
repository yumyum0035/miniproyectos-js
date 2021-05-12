/* --- 1. requisitos --- 
	1.1 peticion de funcionalidad
		necesitamos una web para almacenar las tareas de los usuarios, API, tematizacion
	-----[]
	1.2 traducir funcionalidades de HTML, JS, partes de la aplicación
		- input nombre tarea
		- boton para agregar tarea 
		- listado de tareas
		- boton eliminar tareas
		- boton eliminar tareas individuales
	-----
	1.3 definir acciones de usuario (como actua la gente con nuestro programa)
		- añadir tarea
		- eliminar (tarea o tareas) 
	-----
	1.4 definir resultados a mostrar (acciones de usuario -> output)
		- Lista de tareas
*/
/* --- 2. planificación --- 
	2.1 hitos de la aplicación
		- crear un HTML estatico
		- montar la base del javascript -> estructura & pseudocodigo
		- implementar lógica de javascript para que sea dinámico
		- rellenar las diferentes partes del js anterior
	-----
	2.2 tareas concretas
		- crear input y button y dejar espacio para el listado ul
		- definir las variables que necesitara el programa
		- definir todas las funciones de javascript

*/

let ul = document.getElementById("tasks")!;
let taskButton = document.getElementById("addTask")!
let inputName = (<HTMLInputElement>document.getElementById("inputName"));
let inputDesc = (<HTMLInputElement>document.getElementById("inputDesc"));

interface Task {
	name: string;
	description: string;
	completed: boolean;
}

let tasks: Task[] = [
	{
		name: "Prepare a to do list",
		description: "you know, just see how it's going to be or something.",
		completed: false,
	},
	{
		name: "Code the list",
		description: "write el javascript and html or something.",
		completed: false,
	},
	{
		name: "Prettify it!",
		description: "AKA the most important step, hands down.",
		completed: false,
	},
]

function addTaskAfterClick() {
	if(inputName.value.length > 0) {
		console.log("first function!!");
		addTask();
	}
}

function addTask() {
	//this function adds a Task to the task array
	let newTask:Task = {
		name: inputName.value,
		description: inputDesc.value,
		completed: false
	};

	console.log("second function!!");

	tasks.push(newTask);
	newTaskHTML(newTask.name, newTask.description);
}

function newTaskHTML(name:string, description:string) {
	let li = document.createElement("li");
		ul.appendChild(li);
		li.innerHTML = `<h3> <input type="checkbox"> ${name}</h3>
						<p>${description}</p>`
}

function removeTask(taskToRemove:Task) {
	//removes task from array
	return tasks.filter((element)=> element != taskToRemove);
}
 
function displayTasks() {
	//shows tasks in HTML
	for (let index in tasks) {
		newTaskHTML(tasks[index].name,tasks[index].description);
	}
}

displayTasks();
taskButton.addEventListener("click",addTaskAfterClick)