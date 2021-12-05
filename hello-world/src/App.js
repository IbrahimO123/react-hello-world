import React,{useState} from 'react';
import ToDoList from './component/ToDoList';

function App() {

 //actionLog = localStorage.setItem('TodoList',JSON.stringify(actionLog))?localStorage.setItem('TodoList',JSON.stringify(actionLog)):[];
  
  const saveData = JSON.parse(localStorage.getItem('TodoList')) || [];
  const [actionLog, setAction]= useState(saveData);
  localStorage.setItem('TodoList',JSON.stringify(actionLog))
  

  const removeAll = () => {
    localStorage.removeItem('TodoList');
    setAction([])
  }
  
  return (
    <div className="App">
           <ToDoList  actionLog={actionLog} removeAll={removeAll} setAction={setAction} />
           
    </div>
  );
}


export default App;
