import React, { useEffect, useState } from 'react';
import './App.css';

import socket from './utils/socket';
import TodoListCard from './components/TodoListCard';

const FormComments = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ name, setName] = useState('');
  const [ itemList, setItemList] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    await socket.emit('addItemList', { name , itemList} );
    socket.on('refreshTodoList', (todoList) => {
      setTodoList(todoList);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/todoList')
      .then((response) => response.json())
      .then((todoList) => {
        console.log(todoList);
        setTodoList(todoList);
        setIsLoading(false);
      })
  }, []);

  return (
    <form className="form">
      <div className="labels">
        <label>
          Tarefa:
          <br />
          <input type="text" onChange={({ target }) => setName(target.value)} name="name" />
        </label>
        <label>
          Descrição da tarefa:
          <br />
          <input onChange={({ target }) => setItemList(target.value)} type="text" name="comment" />
        </label>
        <button
          type="button"
          className="button"
          onClick={ handleClick }
        >Adicionar tarefa</button>
      </div>
      { 
        isLoading ? <p>Carregando</p> : ( 
          <div className="todoList">
            {
              todoList.map(({_id, name, itemList}) => (
                <TodoListCard
                  id={_id}
                  key={_id}
                  name={name}
                  itemList={itemList}
                />
              ))
            }
          </div>
        )}
    </form>
  );
};

export default FormComments;