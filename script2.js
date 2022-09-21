window.addEventListener('load',()=>{
    const input=document.querySelector("#new-task-input")
    const form=document.querySelector("#new-task-form")
    const all=document.getElementById("all")
    const active=document.getElementById("active")
    const completedbtn=document.getElementById("completed")
    const tasks=document.querySelector(".tasks")

    let nodes=[]
    let total=[]
    let completed=[]
    let actives=[]
    let items=0
    let uuid=100

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        e.preventDefault()
        items+=1
        total.push(input.value)
        // actives.push(input.value)
        console.log(total)
        document.querySelector(".display-items").innerHTML="Items "+items+" left"

        // adding a div by the name task to tasks div
        // const tasks=document.querySelector(".tasks")
        const task=document.createElement("div")
        task.classList.add("task")
        tasks.appendChild(task)

        //adding input to task
        const tempInput=document.createElement("input")
        const label=document.createElement("label")
        label.innerText=input.value
        tempInput.classList.add("toggle")
        tempInput.id=uuid
        tempInput.type="checkbox"
        label.htmlFor=tempInput.className
        tempInput.setAttribute("unchecked","unchecked")
        task.appendChild(tempInput)
        task.append(label)
        uuid+=1

        //Functionality of checked and unchecked
        tempInput.addEventListener('change',(e)=>{
            let tempText=task.children[1].innerText
            // console.log("()",tempText)

            if(tempInput.checked){    
                if(!completed.includes(tempText)){
                    items-=1
                    completed.push(tempText)
                    // document.querySelector(".toggle").style.text-decoration="line-through";
                    task.children[1].style.textDecoration ="line-through"
                    task.children[1].style.textDecorationColor="black"
                }
            }else{
                items+=1
                completed=completed.filter(e=>e!==tempText)
                task.children[1].style.textDecoration ="none"
                

            }

            document.querySelector(".display-items").innerHTML="Items "+items+" left"
            
        })
    })

    // On adding all button
    all.addEventListener('click',(e)=>{

        document.querySelector(".display-items").innerHTML="Items "+items+" left"

        if(document.getElementsByClassName("active-task")){
            let ele=document.getElementsByClassName("active-task")
            for(let i=0;i<ele.length;i++){
                ele[i].style.display='none'
            }
        }

        if(document.getElementsByClassName("completed-task")){
            let ele=document.getElementsByClassName("completed-task")
            for(let i=0;i<ele.length;i++){
                ele[i].style.display='none'
            }
        }

        if(document.getElementsByClassName("task")){
            let ele=document.getElementsByClassName("task")
            for(let i=0;i<ele.length;i++){
                ele[i].style.display='flex'
            }
        }
    })

    // On adding active button
    active.addEventListener('click',(e)=>{
        
        actives=total.filter(e=>!completed.includes(e))
        

        if(document.getElementsByClassName("task")){
            let ele=document.getElementsByClassName("task")
            for(let i=0;i<ele.length;i++){
                ele[i].style.display='none'
            }
        }
           
        if(document.getElementsByClassName("completed-task")){
            let ele=document.getElementsByClassName("completed-task")
            for(let i=0;i<ele.length;i++){
                ele[i].style.display='none'
            }
        }

        let activeTasks=document.createElement("div")
        activeTasks.className="active-task"

        for(let i=0;i<actives.length;i++){
            let activeInput=document.createElement("input")
            activeInput.classList.add("active-input")
            activeInput.type="text"

            activeInput.value=actives[i]
                
            activeInput.setAttribute("readonly","readonly")
            activeTasks.appendChild(activeInput)
        }
    
        if(document.getElementsByClassName("active-task")){
            let ele=document.getElementsByClassName("active-task")
            for(let i=0;i<ele.length;i++){
                ele[i].style.display='none'
            }
        }

        tasks.appendChild(activeTasks)
    })

    // On adding completed button
    completedbtn.addEventListener('click',(e)=>{
        if(document.getElementsByClassName("active-task")){
            let ele=document.getElementsByClassName("active-task")
            for(let i=0;i<ele.length;i++){
                ele[i].style.display='none'
            }
        }

        if(document.getElementsByClassName("task")){
            let ele=document.getElementsByClassName("task")
            for(let i=0;i<ele.length;i++){
                ele[i].style.display='none'
            }
        }
       
        let completedTasks=document.createElement("div")
        completedTasks.classList.add("completed-task")
        
        for(let i=0;i<completed.length;i++){
            let completedInput=document.createElement("input")
            completedInput.classList.add("completed-input")
            completedInput.type="text"
            completedInput.value=completed[i]
            completedInput.setAttribute("readonly","readonly")
            completedTasks.appendChild(completedInput)
        }

        if(document.getElementsByClassName("completed-task")){
            let ele=document.getElementsByClassName("completed-task")
            for(let i=0;i<ele.length;i++){
                ele[i].style.display='none'
            }
        }
        tasks.appendChild(completedTasks)
    })

})