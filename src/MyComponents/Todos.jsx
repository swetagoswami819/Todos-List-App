import React from 'react'
import {Todoitem} from './Todoitem';

export const Todos = (props) => {
  return (
    <div className="container">
        <h3 className='text-center'>Todos List</h3>
        {props.todos.length==0?"No Todos to display" : 
        props.todos.map((todo) => {
            return <Todoitem todo={todo} onDelete={props.onDelete}/>
        })}
    </div>
  )
}
 
