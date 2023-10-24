//clona o template <li>
let template = document.querySelector(".template")
let newTask = template.cloneNode(true)

//FUNÇÃO QUE ADICIONA A TAREFA
function addTask(){
    
    //titulo da tarefa
    let taskTitle = document.querySelector("#task-title").value
    
    if(taskTitle){//se estiver valor no input

        template = document.querySelector(".template")
        newTask = template.cloneNode(true)

        //adiciona o titulo na nova task
        newTask.querySelector(".task-title").textContent = taskTitle
        
        //remover classes desnecessárias
        newTask.classList.remove("hide")
        newTask.classList.remove("template")

        //adicionando task ao HTML
        document.querySelector("#task-list").appendChild(newTask)

        //resetando input
        document.querySelector("#task-title").value = ""

        //método para remover
        newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this)
        })

        //método para conclir a tarefa ou retornar
        newTask.querySelector(".done-btn").addEventListener("click", function(){

            doneTask(this)
            
        })

    }

}

//EVENTO DE ADICIONAR TAREFA VIA BOTÃO #add-btn
let addBtn = document.querySelector("#add-btn")
addBtn.addEventListener("click", function(e){
    e.preventDefault()
    addTask()
})

//REMOVER TAREFA
function removeTask(task){
    task.parentNode.remove()
}

//CONCLUIR UMA TAREFA
function doneTask(task){
    task.parentNode.classList.toggle("done")
}