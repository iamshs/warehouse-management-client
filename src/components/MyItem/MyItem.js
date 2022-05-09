import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
const [user]= useAuthState(auth)
const [items,setItems] = useState([])

useEffect(()=>{
    const myItems = async ()=>{
        const email = user.email
     const url = `http://localhost:4000/myitem?email=${email}`
     const {data} = await axios.get(url)
     setItems(data) 
    }
    myItems()
},[user])

    return (
        <div>
           <h1>Your Items {items.length}</h1> 
        </div>
    );
};

export default MyItem;