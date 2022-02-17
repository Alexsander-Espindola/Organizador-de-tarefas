import React from 'react';

function LanguageCard({ index, name, itemList }) {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>
          Tarefa: <span data-testid={`item-list-${index}`}>{itemList}</span>  
        </li>
      </ul>
    </div>
  );
}

export default LanguageCard;