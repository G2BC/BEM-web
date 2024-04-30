import React from 'react';
import './Button.css';

function Button({ onClick, children, text, textColor, backgroundColor }) {

    const buttonStyle = {
        backgroundColor: backgroundColor || '#000', // Cor de fundo padrão preto
        color: textColor || '#ffffff', // Cor do texto padrão branco
        
        border: "2px solid #FF0000",/* Definindo borda sólida vermelha */
        borderRadius: "5px", /* Definindo raio de borda */
        padding:"5px 30px"
      };
    
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
      
    return (
    <button style={buttonStyle} className="custom-button" onClick={onClick}>
      {capitalize(text)}
      
    </button>

  );
}

export default Button;
