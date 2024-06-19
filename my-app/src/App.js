//Hoang Nguyen
//U12840485

import TaskGenerator from "./TaskGenerator";
import FancyText from "./FancyText";


export default function App() {
  return (
    <div className='App'>
      <FancyText type='title' text="Task Management and Motivation App"/>
      <TaskGenerator/>
      <footer>
        <p>© 2024 Hoang Nguyen.</p>
      </footer>
    </div>    
  )
}