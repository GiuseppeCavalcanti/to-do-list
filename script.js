

function newtask() {
    let inputtask = document.getElementById("inputtask")
    let addbtn = document.getElementById("buttoncriar")
    let tasklist = document.getElementById("task-list")
    const taskText = inputtask.value.trim();

    let btnverificado = document.getElementById("btn")


    if (inputtask.value.length == '') {

        console.log('Digite uma tarefa')
    }



    if (inputtask !== '') {

        let newtask = document.createElement("li")


        tasklist.innerHTML += `<li><p>${taskText}</p></li>` ;


    }

    inputtask.value = ''



}

