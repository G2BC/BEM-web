import React, { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  textColor?: string;
  backgroundColor?: string;
  border?: string;
  icon?: string;
}

interface StyledButtonProps {
  backgroundColor?: string;
  textColor?: string;
  border?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  background-color: ${(props) => props.backgroundColor || '#131313'};
  color: ${(props) => props.textColor || '#ffffff'};
  border: 2px solid ${(props) => props.border || '#a65f3e'};
  border-radius: 5px;

  &:hover {
    background-color: #9D8D8F;
    color: #ffffff;
    border: #9D8D8F;
  }
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 12px;
  height: 12px;
`;

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Button: FC<ButtonProps> = ({ onClick, text, textColor, backgroundColor, border, icon }) => {
  return (
    <StyledButton onClick={onClick} backgroundColor={backgroundColor} textColor={textColor} border={border}>
      {icon && <Icon src={icon} alt="Icon" />} {capitalize(text)}
    </StyledButton>
  );
};

export default Button;
