import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventories from "../../hooks/useInventories";

const ManageInventories = () => {
  const [inventories] = useInventories();
  return (
    <div>
        <h3 className="text-center my-3">All Items</h3>
      {inventories.map((inventory) => (
        <Table style={{backgroundColor: "rgb(218, 208, 182)"}} className='mx-auto w-100' striped  hover>
        <thead >
          <tr >
            <th className="w-50">{inventory.name}</th>
            <th className="w-25">${inventory.price}</th>
            <th className="w-25">{inventory.quantity}</th>
            <th className="w-25">
                <button className="btn btn-danger">DELETE</button>
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
