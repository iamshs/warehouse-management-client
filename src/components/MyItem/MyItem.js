import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  //delete
  const handleDelete = id=>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
        const url = `http://localhost:4000/myitem/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
           
            const remaining =items.filter(item => item._id !== id);
            setItems(remaining);
        })
    }
  }

//loading data
  useEffect(() => {
    const myItems = async () => {
      const email = user?.email;
      const url = `http://localhost:4000/myitem?email=${email}`;
      const { data } = await axios.get(url);
      setItems(data);
     
    };
    myItems();
  }, [user]);

  return (
    <div>
       
      <h1 className="text-center">Your Items {items.length}</h1>

      {items.map((item) => (
        <Table responsive striped hover key={item._id}>
          <thead className="d-flex align-content-center justify-content-between ms-0">
            <tr >
              <th>{item.name}</th>
              <th>
              <img className="w-25" src={item.img} alt="" />
              </th>
              <th>{item.price}</th>
              <th>{item.quantity}</th>
              <th>
                  <button onClick={()=>handleDelete(item._id)} className="btn btn-danger">Delete</button>
              </th>
            </tr>
          </thead>
         
        </Table>
      ))}
    </div>
  );
};

export default MyItem;
