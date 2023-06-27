import './App.css';
import React, { useState } from "react";


function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  };

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
            return <div>
                      <h1>{task.taskName}</h1>
                      <button className="button"
                      onClick ={() => deleteTask(task.id)}>X</button>
                   </div>
        })}
      </div>
    </div>
    )
}


//Module 4
// function App() {
//   const [count, setCount] = useState(0);

//   const increase = () => {setCount(count + 1)};
//   const decrease = () => {setCount(count - 1)};
//   const setZero = () => (setCount(0))
 
//   return(
//     <div className='App'>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Descrease</button>
//       <button onClick={() =>{
//           setZero(0);
//       }}>Set to Zero</button>

//       {count}    
//     </div>
//   )
// }



//SET TEXT COLOR

// function App() {
//   const [textColor, setTextColor] = useState("black");

//   return(
//   <div className='App'>
//     <button onClick={() => {
//       setTextColor(textColor === "black" ? "blue" : "black")}}
//       > Change Color </button>
//     <h1 style={{color:textColor}}>Change this to blue</h1> 
//   </div>
//   );
// }


// //ShowText HideText
// function App() {
//   const [showButton, setShowText] = useState(true);
  
//   return (
//     <div className='App'>
//       <button onClick={ () => {setShowText(!showButton)}}> Show/Hide </button>
//       {showButton === true && <h1> Hi my name is Adrian </h1>}
      
//     </div>
    
//   )
// }

// // INPUT STATES
// function App() {
//   const [inputValue, setInputValue] = useState("")

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   }
  
//   return (
//     <div className='App'>
//       <input type="text" onChange={handleInputChange}></input>
//       {inputValue}
//     </div>
//   )
// }

//INCREASE BUTTON
// function App() {
//   const [age, setAge] = useState(1);
  
//   const increaseAge = () => {
//     setAge(age + 1)
//   }

//   return (
//     <div className='App'>
//       {age}
//       <button onClick={increaseAge}> Increase Age </button>
//     </div>
//     );
// }
//PLANETS
// function App() {
//   const planets = [
//     {name: "Mars", isGasPlanet:false},
//     {name: "Jupiter", isGasPlanet:true},
//   ];
//   return (
//     <div className='App'>
//       {planets.map((planet, index) => planet.isGasPlanet && <h1> {planet.name} </h1>
//       )}
//     </div>
//   )
// }

// const Planet = (props) => {
//   return (
//     <div>
//       <h1>{props.name} {props.isGasPlanet}</h1>
//     </div>
//   )
// }

// function App() {
//   const users = [
//     {name:"Adrian", age: 35},
//     {name:"Marble-Vigilante", age:100},  
//     {name:"SpiderKiller", age:1234},
//   ];

//   return (
//     <div className='App'>
//       {users.map((user, index) => {
//         return (
//           <User name = {user.name} age = {user.age}/>
//         )
//       })}
//     </div>
//   )
// } 

  // const age = 19;
  // const isBlue = true;

  // return(  
  //  <div className="App">{age >= 18 ? <h1>Yes</h1> : <h1>No</h1>}
  //  <h1 style={{color: isBlue ? "blue" : "green"}}>Compton</h1>
  //  {isBlue && <button>This is a button</button>}
  //  </div>
  // );

  // const Job = (props) => {
  //   return (
  // <div>  
  //    <h1>{props.salary}</h1>
  //    <h1>{props.position}</h1>
  //    <h1>{props.company}</h1>
  // </div>
  //     );
  // }
  


export default App;
