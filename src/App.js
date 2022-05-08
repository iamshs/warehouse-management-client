
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Login from './components/Auth/Login/Login';
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';
import Signup from './components/Auth/SignUp/Signup';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';
import ManageInventories from './components/ManageInventories/ManageInventories';

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
        <Route path='/manage' element={<ManageInventories/>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
