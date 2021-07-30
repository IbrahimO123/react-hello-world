
import React, { useEffect, useState } from 'react'

function ToDoList() {
    const toDo = {
        task: " Send the monthly transactions to Customers",
        details: "Sending the monthly email to all the classic customers of my organization contain details about what they purchased and how much they where charged for it.",
        Date: "05/06/2021",
        status: "closed",
        priority: "Very High"
    }
    const [actionLog, setAction]= useState([]);
    const [task,setTask] = useState(toDo.task);
    const [details,setDetails] = useState(toDo.details);
    const [date,setDate] = useState(toDo.Date);
    const [status,setStatus] = useState(toDo.status);
    const [priority,setPriority]= useState(toDo.priority);
    useEffect(() => {
        setAction([
            ...actionLog,
            {
               task: " Send the monthly transactions to Customers",
               details: "Sending the monthly email to all the classic customers of my organization contain details about what they purchased and how much they where charged for it.",
               Date: "30/07/2021",
               status: "Open",
              priority: "High"
            }
        ])  
        },[])

    const changeTask = (e) => {setTask(e.target.value)}
    const changeDetails = (e) => {setDetails(e.target.value)}
    const changeDate = (e) => {setDate(e.target.value)}
    const changeStatus = (e) => {setStatus(e.target.value)}
    const changePriority = (e) => {setPriority(e.target.value)}
    const addTask = () => {
        setAction([
            ...actionLog,
            {
                task:task,
                details:details,
                Date:Date,
                status:status,
                priority:priority
            }
        ])
        setTask('')
        setDetails('')
        setDate('')
        setStatus('')
        setPriority('')
    }

    return (
        <>
        <div className="todo" >
        <p className="task-heading" >Task To Do</p>
        <p  className="task-box">
            <label className="task-label">Tasks:</label>
            <input className="task-input" type="text" placeholder="Task to do" value={task} onChange={(e) => changeTask(e)} tabIndex="1"></input>
        </p>
        <p className="task-box">
         <span className="task-label">Details:</span>
         <textarea className="task-input task-area" value={details} onChange={(e) => changeDetails(e)} placeholder="Details about the task" >
         </textarea>  
        </p>
        <p className="task-box">
            <label className="task-label">Date:</label>
            <input className="task-input" type="date" onChange={(e) => changeDate(e)}  value={date} tabIndex="3"></input>
        </p>
        <p className="task-box">
            <label className="task-label">Status:</label>
            <input className="task-input" type="text" value={status} onChange={(e) => changeStatus(e)}  tabIndex="4"></input>
        </p>
        <p className="task-box">
            <label className="task-label">Priority:</label>
            <input className="task-input" value={priority} onChange={(e) => changePriority(e)} type="text" placeholder="Importance level"  tabIndex="5"></input>
        </p>
        <p className="task-box">
            <label className="task-label">Comment:</label>
            <input className="task-input" type="text" placeholder="Add comment"  tabIndex="5"></input>
        </p>
        <p className="task-button">
            <button type="submit" onclick={addTask} className="task-button">Add Task</button>
        </p>
        </div>
        <div className="task-table">
        {
            actionLog.map((action,serial) => (
                <h6 key={serial}>{action.task} | {action.details} | {action.Date} | {action.status} | {action.priority}</h6>
            )
            )
        }
        </div>
        </>
    )
}

export default ToDoList

