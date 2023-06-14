
import './App.css';

function App() {
  const names = ["Adrian", "Marble-Vigilante", "Wonder-Woman", "Spiderman", "SpiderKiller"];
  return (
  <div className='App'>
    {names.map((name, index) => {
      return <h1> {name} </h1>
})}
  </div>
  );
}
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
