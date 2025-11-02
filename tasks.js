
const taskInput=document.getElementById('taskInput');
const addTaskToList=document.getElementById('addTaskToList');

const taskBody=document.getElementById('taskBody');
const taskTemplate=document.getElementById('taskTemplate');


    const tasks=[
        // {
        // id:1,
        // name:'Purchase milk',
        // completed:false
        // },
        // {
        //  id:2,
        //  name:'Worship the god and pray',
        //  completed:false
        // },
        // {
        //     id:3,
        //     name:'Join the office daily standup meeting',
        //     completed:false;
        // },
        // {
        //     id:4,
        //     name:'Switch my tasks into teams calender',
        //     completed:false

        // }
    ]

    addTaskToList.addEventListener('click',()=>{
    const taskName= taskInput.value.trim();

    if(taskName==='') return;    

    tasks.push({
        id:Date.now(),
        name:taskName,
        completed:false
    })

        taskInput.value="";

        displayTask();
    })


    function displayTask()
    {
     
        taskBody.innerHTML="";

        tasks.forEach(task=>{
            const clone=taskTemplate.content.cloneNode(true);

            console.log(task);

            clone.querySelector(".text-name").textContent=task.name;

            const statusBadge=clone.querySelector(".task-status");

            statusBadge.textContent=task.completed ? "🟢 Completed": "🔴 pending";

            statusBadge.style.cursor="pointer";

            statusBadge.addEventListener("click",()=>{
                if(!task.completed)
                {
                    task.completed=true;
                    displayTask();
                }
            })

            const deleteBtn=clone.querySelector(".delete-btn");

            console.log(task.id);
            deleteBtn.addEventListener("click",()=>{
                deleteTask(task.id);
            })
            taskBody.appendChild(clone);
        })
        
    //     listTasks.innerHTML = "";
    //    tasks.forEach(task=> {
    //         const li=document.createElement("li");

    //         //create a span for task name
    //         const taskText=document.createElement("span")
    //         taskText.textContent=task.name;
            
    //         const deleteBtn=document.createElement("button");
    //         deleteBtn.textContent="Delete";
    //         deleteBtn.style.marginLeft="10px";
    //         deleteBtn.style.cursor="pointer"
            
    //         deleteBtn.addEventListener("click",()=>{
    //             deleteTask(task.id);
    //         });

    //         li.appendChild(taskText);
    //         li.appendChild(deleteBtn);

    //         listTasks.append(li);
            

    }

    function deleteTask(id)
    {
        const index=tasks.findIndex(task=>task.id===id);

         tasks.splice(index,1);
            displayTask();
    }