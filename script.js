window.addEventListener('load',()=>{
    const form=document.querySelector("#new-task-form")
    const input=document.querySelector("#new-task-input")
    const tasks=document.querySelector("#tasks")

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const task=input.value

        if(!task){
            alert("Please add a task")
        }else{
            const task_el=document.createElement("div")
            task_el.classList.add("task")

            const task_content=document.createElement("div")
            task_content.classList.add("content")
            task_el.appendChild(task_content)

            const task_input_ele=document.createElement("input")
            task_input_ele.classList.add("text")
            task_input_ele.type="text"
            task_input_ele.value=task
            task_input_ele.setAttribute("readonly","readonly")
            task_content.appendChild(task_input_ele)

            const task_actions_el=document.createElement("div")
            task_actions_el.classList.add("actions")

            const task_edit_el=document.createElement("button")
            task_edit_el.classList.add("edit")
            task_edit_el.innerHTML="Edit"

            const task_delete_el=document.createElement("button")
            task_delete_el.classList.add("delete")
            task_delete_el.innerHTML="Delete"

            task_actions_el.appendChild(task_edit_el)
            task_actions_el.appendChild(task_delete_el)
            task_el.appendChild(task_actions_el)

            tasks.appendChild(task_el)
            input.value=""

            task_edit_el.addEventListener('click',()=>{
                if(task_edit_el.innerText.toLocaleLowerCase()==="edit"){
                    task_input_ele.removeAttribute("readonly","readonly")
                    
                    task_input_ele.focus()
                    task_edit_el.innerText="Save"
                }else{
                    task_edit_el.setAttribute("readonly","readonly")
                    task_edit_el.innerText="Edit"
                }
            })

            task_delete_el.addEventListener('click',()=>{
                tasks.removeChild(task_el)
            })
        }
    })
})