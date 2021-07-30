
import React, { useEffect, useState } from 'react'

function ToDoList() {
    const toDo = {
        task: " Send the monthly transactions to Customers",
        details: "Sending the monthly email to all the classic customers of my organization contain details about what they purchased and how much they where charged for it.",
        Date: "2021-07-30",
        status: "closed",
        priority: "Very High",
        comment: "Copy the executives while sending the email"
    }
    const [actionLog, setAction]= useState([]);
    const [task,setTask] = useState(toDo.task);
    const [details,setDetails] = useState(toDo.details);
    const [date,setDate] = useState(toDo.Date);
    const [status,setStatus] = useState(toDo.status);
    const [priority,setPriority]= useState(toDo.priority);
    const [comment,setComment]= useState(toDo.comment);
    useEffect(() => {
        setAction([
            ...actionLog,
            {
               task: " Send the monthly transactions to Customers",
               details: "Sending the monthly email to all the classic customers of my organization contain details about what they purchased and how much they where charged for it.",
               Date: "2021-07-30",
               status: "Open",
               priority: "High",
               comment: "",
            }
        ])  
        },[])

    const changeTask = (e) => {setTask(e.target.value)}
    const changeDetails = (e) => {setDetails(e.target.value)}
    const changeDate = (e) => {setDate(e.target.value)}
    const changeStatus = (e) => {setStatus(e.target.value)}
    const changePriority = (e) => {setPriority(e.target.value)}
    const changeComment = (e) => {setComment(e.target.value)}
    const addTask = () => {
        setAction([
            ...actionLog,
            {
                task:task,
                details:details,
                Date:Date,
                status:status,
                priority:priority,
                comment:comment,
            }
        ])
        setTask('')
        setDetails('')
        setDate('')
        setStatus('')
        setPriority('')
        setComment('')
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
            <input className="task-input" type="text" placeholder="Add comment" value={comment} onChange={(e) => changeComment(e)}  tabIndex="6"></input>
        </p>
        <p className="task-button">
            <button type="submit" onClick={addTask} className="task-button">Add Task</button>
        </p>
        </div>
        <div className="table">
                  <table className="task-table">
                     <thead>
                     <tr className="task-heading">
                                <th>Task</th>
                                <th>Details</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Priority</th>
                                <th>Comment</th>
                              </tr>
                     </thead>
                             
           { actionLog.map((action,serial) => (
                            <tbody className="task-body" key={serial}>
                            <tr>
                                <td>{action.task}</td>
                                <td>{action.details}</td>
                                <td>{action.Date} </td>
                                <td> {action.status} </td>
                                <td> {action.priority}</td>
                                <td> {action.comment}</td>
                              </tr>
                            </tbody>  
            )
            )
        }
        </table>
        </div>
        </>
    )
}

export default ToDoList

