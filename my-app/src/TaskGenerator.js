import * as React from 'react'
import FancyText from './FancyText.js';
import taskList from "./tasks.js";
import "./App.css"

export default function TaskGenerator() {
    const [index, setIndex] = React.useState(0);
    const task = taskList[index];
    const nextTask = () => setIndex((index + 1) % taskList.length);

    // Generate text displayed
    let taskText, motivationalMessage;
    if(task.isCompleted){
        taskText = `Task ${task.id}: ${task.name} - Completed ✔`;
        motivationalMessage = "Keep up the good work! 👏"
    }else {
        taskText = `Task ${task.id}: ${task.name} - Pending...`;
        motivationalMessage = "You can do it! 💪"
    }
    
    return (
        <div className='generator'>
            <p>Welcome!</p>
            <FancyText type='task' text={taskText}/>
            <FancyText type='message' text={motivationalMessage}/>
            <button onClick={nextTask}>Next Task</button>
        </div>
    )
}