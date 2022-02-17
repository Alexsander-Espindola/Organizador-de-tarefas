import React, { useEffect, useState } from 'react';
// import socket from '../utils/socket';

const FormComments = () => {
  const [comments, setComments] = useState([]);
  const [ name, setName] = useState('');
  const [ comment, setComment] = useState('');

  const handleClick = () => {
    console.log(name, comment)
  }

  // useEffect(() => {
  //   fetch('http://localhost:3001/')
  //     .then((response) => response.json())
  //     .then((comments) => {
  //       console.log(comments);
  //     })
  // }, []);

  return (
    <form>
      <ul>
        {
          comments.map(({ name, comment}) => (
            <li>
              nome = { name } mensagem = { comment }
            </li>
          ))
        }
      </ul>
      <label>
        Nome:
        <input type="text" onChange={({ target }) => setName(target.value)} name="name" />
      </label>
      <label>
        Sua mensagem:
        <input onChange={({ target }) => setComment(target.value)} type="text" name="comment" />
      </label>
      <button
        type="button"
        onClick={ handleClick }
      >Enviar</button>
    </form>
  );
};

export default FormComments;