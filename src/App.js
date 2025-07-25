import './App.css';
import Header from "./MyComponents/Header"
import {Todos} from "./MyComponents/Todos"
import {Footer} from "./MyComponents/Footer"
import React, {useState} from 'react'
function App() {
const onDelete = (todo) => {
  console.log("I am onDelete function from App.js",todo);
  //Deleting this way in react doess not work-->
  //let index=todos.indexOf(todo);
  //todos.splice(index,1);

  setTodos(todos.filter((e)=>{
    return e!==todo;

  }));

}
  const [todos, setTodos] = useState([
    {
    sno : 1,
    title : "Go to the Market",
    desc : "You need to go to the market to buy vegetables"
    },
    {
      sno  : 2,
      title : "Go to the Mall",
      desc : "You need to go to the mall to buy clothes"
    },
    {
      sno  : 3,
      title : "Go to the Gym",
      desc : "You need to go to the gym to exercise"
    }
  
  ]);

  return (
    <>
    <Header title="My Todos List" searchBar={true}/>
    <Todos todos={todos} onDelete={onDelete}/>
  
    </>
  );
}

export default App;
