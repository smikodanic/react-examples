import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../react/context/AuthContext';


const ExampleRoutingLogin = () => {
  const { login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('LOGIN');
    login();
    // navigate('/example-routing-dashboard');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      <br /><br />click login then go to: <Link to="/example-routing-dashboard">Example: Routing - Dashboard (protected route)</Link>
    </div>
  );
};


export default ExampleRoutingLogin;
