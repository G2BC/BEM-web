import { useNavigate } from "react-router-dom";

export const useRegisterNavigation = () => {
  const navigate = useNavigate();
  
  const handleRegisterClick = () => {
    navigate("/register");
  };
  
  return handleRegisterClick;
};

export const useLoginNavigation = () => {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    navigate("/login");
  };
  
  return handleLoginClick;
};
