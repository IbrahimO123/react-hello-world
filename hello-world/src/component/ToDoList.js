import React, { useEffect, useState } from 'react';
import {MdDelete} from 'react-icons/md';

function ToDoList({actionLog, setAction}) {
    const [task,setTask] = useState('');
    const [details,setDetails] = useState('');
    const [date,setDate] = useState('');
    const [priority,setPriority]= useState('');
    const [comment,setComment]= useState('');
    useEffect(() => {
        setAction([
            ...actionLog,
            {
               task: "Send the monthly transactions to Customers",
               details: "Sending the monthly email to all the classic customers of my organization contain details about what they purchased and how much they where charged for it.",
               date: "2021-07-30",
               priority: "High",
               comment: "no comments is available",
            }
        ]) 
        },[])

    const changeTask = (e) => {setTask(e.target.value)}
    const changeDetails = (e) => {setDetails(e.target.value)}
    const changeDate = (e) => {setDate(e.target.value)}
    const changePriority = (e) => {setPriority(e.target.value)}
    const changeComment = (e) => {setComment(e.target.value)}
    const addTask = (e) => {
        e.preventDefault();
        if (task && details && date) {
        setAction([
            ...actionLog,
            {
                task:task,
                details:details,
                date:date,
                priority:priority,
                comment:comment,
            }
            
        ])
        setTask('')
        setDetails('')
        setDate('')
        setComment('')
        }
        else {
            alert('Fill in the task or details input, also set the date')
        }
        
    }
    
    
    return (
        <>
        <div className="todo" >
        <p className="task-heading" >Task To Do</p>
        <p  className="task-box">
            <label className="task-label">Tasks:</label>
            <input className="task-input" type="text" required placeholder="Task to do" value={task} onChange={(e) => changeTask(e)} tabIndex="1"></input>
        </p>
        <p className="task-box">
         <span className="task-label">Details:</span>
         <textarea className="task-input task-area" type="text" required value={details} onChange={(e) => changeDetails(e)} placeholder="Details about the task" >
         </textarea>  
        </p>
        <p className="task-box">
            <label className="task-label">Date:</label>
            <input className="task-input" type="date" required onChange={(e) => changeDate(e)}  value={date} tabIndex="3"></input>
        </p>
        <p className="task-box">
            <label className="task-label" htmlFor="priority">Priority:</label>
            <select className="task-input" required value={priority} onChange={(e) => changePriority(e)} type="text" placeholder="Importance level" list="priority" name="priority" id="priority" tabIndex="5">
            <option value="Very Low">Very Low</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Very High">Very High</option>
            </select>
        </p>
        <p className="task-box">
            <label className="task-label">Comment:</label>
            <input className="task-input" type="text" required placeholder="Add comment" value={comment} onChange={(e) => changeComment(e)}  tabIndex="6"></input>
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
                                <th id="prior" >Priority</th>
                                <th>Comment</th>
                              </tr>
                     </thead>                     
           { 
               
               actionLog.map((action,serial) => 
               (
                            <tbody className="task-body" id="task-body" key={serial}>
                            <tr>
                                <td><button className="del" onClick={() => setAction( 
                                    actionLog =>
                                    actionLog.filter(
                                        (item, key) => key !== serial
                                    )
                                )} id="delete" ><MdDelete/></button>{action.task}</td>
                                <td>{action.details}</td>
                                <td>{action.date} </td>
                                <td>{action.priority}</td>
                                <td>{action.comment}</td>
                                
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

