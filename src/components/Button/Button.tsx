import React, { FC } from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;// voltar para corrigir tirando essas interrogaçoes 
  textColor?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  border?: string;
  icon?:string;
}

const Button: FC<ButtonProps> = ({ onClick, children, text, textColor = '#ffffff', backgroundColor = '#131313',border='#a65f3e',icon }) => {

  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    border: `2px solid ${border}`,/* Definindo borda sólida vermelha */
    borderRadius: "5px", /* Definindo raio de borda */
    padding: "5px 30px"
  };

  const iconStyle = {
    marginRight: '10px', // Espaçamento à direita do ícone
    width: '12px', // Largura do ícone
    height: '12px', // Altura do ícone
  };

  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <button style={buttonStyle} className="custom-button" onClick={onClick}>
      {icon && <img src={icon} alt="Icon" style={iconStyle} />} {/* Renderizar ícone se estiver definido */}
      {capitalize(text)}
    </button>
  );
}

export default Button;
