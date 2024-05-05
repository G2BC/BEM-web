import React from 'react';
import './Footer.css'; // Estilo CSS para o Footer (substitua pelo seu arquivo CSS)
import Logo from './../../assets/cogumelo.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-footer">
        <img src={Logo} alt="Logo" className="footer-image" />
          <h2>BEM</h2>
        </div>
        <div className="footer-section">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/ajuda">Ajuda</a></li>
            <li><a href="/colaboradores">Colaboradores</a></li>
            <li><a href="/fale conosco">Fale Conosco</a></li>
          </ul>
          <div className="juntese-section">
            <h2>Junte-se à nós:</h2>
            <p>Venha se unir à nossa comunidade fungística
              e explore o mundo dos cogumelos conosco!</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      Copyright &copy; {new Date().getFullYear()} Brazilian Edible Mushrooms 
      </div>
    </footer>
  );
};

export default Footer;
