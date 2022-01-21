import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { NavBar } from './GlobalStyles';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import { LogoutButton } from './GlobalStyles';

function App() {

  const [isAuth, setIsAuth] = useState(false);


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };

  return (
    <Router>

      <NavBar>
        <Link to="/">Home</Link>
        {!isAuth ? (<Link to="/login">Login</Link>) :
          <>
            <Link to="/create-post">Create Post</Link>
            <LogoutButton onClick={signUserOut}>Logout</LogoutButton>
          </>
        }
      </NavBar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} isAuth={isAuth} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
