import React from 'react';

function LanguageCard({ index, name, itemList }) {
  return (
    <ul>
      <li>{name}</li>
      <li>
        Tarefa: <span data-testid={`item-list-${index}`}>{itemList}</span>  
      </li>
    </ul>
  );
}

export default LanguageCard;