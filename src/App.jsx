import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Person";
import Singer from "./Singer";

function App() {
  const actors = ['salib', 'jasim', 'jalil', 'jayed'];
  const singers=[
   {name: 'jamil', age:29},
   {name: 'jamissl', age:29},
   {name: 'jamial', age:29},
    ]
  return (
    <>
      <h1>Vite + React</h1>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name="Raj"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
      {/* <Device name="LapTop" price="200999"></Device>
      <Device name="Mobile" price="20088"></Device>
      <My></My>
      <Student name="Sakib" age="34" />
      <Student name="Musfik" age="35" />
      <Student />
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  console.log(props);
  return (
    <div>
      <h4>
        This is Device :{props.name} price: {props.price}
      </h4>
    </div>
  );
}

function My() {
  const module = 1;
  const person = {
    name: "sakib",
    age: 34,
  };
  const arr = [1, 2, 3, 4];
  return (
    <div>
      <p>
        He is a {person.name} with age {person.age}
      </p>
      <p>
        He is a {arr[0]} with age {arr[2]}
      </p>
      <p>Hi my First react Module: {module}</p>
    </div>
  );
}

function Student({ name = "Shawal", age = 23 }) {
  // console.log(props);
  return (
    <div className="student">
      <h2>This is Student Id</h2>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
    </div>
  );
}
function Developer() {
  const developer = {
    margin: "20px",
    padding: "20px",
    border: "2px solid green",
    borderRadius: "20px",
  };
  return (
    <div style={developer}>
      <h2>This is Developer Id</h2>
      <h3>Name:</h3>
      <h3>Age:</h3>
    </div>
  );
}

export default App;
