import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventories from "../../hooks/useInventories";

const ManageInventories = () => {
  const [inventories,setInventories] = useInventories();
  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
        const url = `http://localhost:4000/inventory/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining =inventories.filter(inventory => inventory._id !== id);
            setInventories(remaining);
        })
    }
}
  return (
    <div>
        <h3 className="text-center my-3">All Items</h3>
      {inventories.map((inventory) => (
        <Table key={inventory._id} style={{backgroundColor: "rgb(218, 208, 182)"}}  striped responsive="sm" hover>
        <thead >
          <tr >
            <th className="w-50">{inventory.name}</th>
            <th className="w-25">${inventory.price}</th>
            <th className="w-25">{inventory.quantity}</th>
            <th className="w-25">
                <button className="btn btn-danger" onClick={()=>handleDelete(inventory._id)}>DELETE</button>
            </th>
          </tr>
        </thead>
      </Table>
      ))}
      
      <Link className='text-decoration-none fw-bolder text-center text-white  detail-btn px-3 py-2' to={'/additem'}>Add New Item</Link>  
   
    </div>
  );
};

export default ManageInventories;
