import { useNavigate } from 'react-router-dom';
import { useAuth } from '../react/context/AuthContext';


const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('LOGOUT');
    navigate('/example-routing-login');
    logout();
  };

  return (
    <>
      <h2>Dashboard Page (Protected)</h2>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Dashboard;
