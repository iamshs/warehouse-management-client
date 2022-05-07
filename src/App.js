
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login/Login';
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';
import Signup from './components/Auth/SignUp/Signup';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} >Home</Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/inventory/:_id' element={
          <RequireAuth>
            <InventoryDetails></InventoryDetails>
          </RequireAuth>
        }>

        </Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
