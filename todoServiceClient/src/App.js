import './App.css';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Home from './Pages/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import Container from "@mui/material/Container"
import { getMeReduxServices } from './Redux/Services/Services';
import { useSelector,useDispatch } from 'react-redux'
import React, {useEffect} from 'react';

function App() {
  const {user}=useSelector(state=>state.AuthReducer)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getMeReduxServices())
  }, [])

  return (
      <div className="App">
      {/* <Header/> */}
     <Container maxWidth='lg' >
      <Routes>
        <Route path='/' element={user.fullName?<Home/>:<Register/>} />
        <Route exact path='/auth/register' element={user.fullName?<Navigate to='/' replace />:<Register/>} />
        <Route exact path='/auth/sign-in' element={user.fullName?<Navigate to='/' replace />:<Login/>} />
        {/* <Route path="/posts" element={<Post/>} /> */}
      </Routes>
     </Container>
    </div>
  );
}

export default App;
