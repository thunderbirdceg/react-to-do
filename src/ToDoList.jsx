import { useState } from 'react'

function ToDoList(){
    const [tasks,setTasks] = useState(["Orange","Apple"])
    const [task,setTask] = useState("")

    function handleTaskChange(event){
        setTask(event.target.value)
    }

    function addtask(){
       
        if(task.trim()!==""){
        setTasks(t=> [...t,task])
        setTask("")
        }
       
    }
    function removeTask(index){
        setTasks(tasks.filter((_,i)=> i!=index))
        
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks =[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks)
        }

    }

    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks =[...tasks];
            [updatedTasks[index+1],updatedTasks[index]]=[updatedTasks[index],updatedTasks[index+1]];
            setTasks(updatedTasks)
        }

    }

    return (
<div className='container'>
    <h1>To-Do-List</h1>
    <div>
    <input type="text" onChange={handleTaskChange} value={task} placeholder='Enter a task'/>
    <button className='add-task' onClick={addtask}>Add</button>
    </div>
    <div className='list-cont'>
        <ol>
            {tasks.map( (e,i) => 
            <li className='task' key={i}>
                <span className='text'>{e}</span>
            <button className='delete' onClick={()=>removeTask(i)} >Delete</button>  
            <button className='move-button'  onClick={()=>moveTaskUp(i)}  >👆</button> 
            <button  className='move-button'   onClick={()=>moveTaskDown(i)} >👇</button> 
            </li>
            )}
        </ol>
    </div>
    
</div>    
)
}
export default ToDoList