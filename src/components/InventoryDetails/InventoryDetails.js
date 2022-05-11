import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./inventoryDetails.css";

const InventoryDetails = () => {
  const { _id } = useParams();
  const [inventory, setInventory] = useState({});
  const [reload,setReload] = useState(false)

  useEffect(() => {
    const url = `https://intense-bastion-09820.herokuapp.com/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory]);

  //delivered button

  const handleDeliver = () => {
    // e.preventDefault()
    // const quantity = e.target.quantity.value



   
        const updateQuantity = parseInt(inventory.quantity) - 1
        const totalQuantity = { quantity: updateQuantity }

        fetch(`https://intense-bastion-09820.herokuapp.com/motor/${_id}`
            , {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(totalQuantity)
            })
            .then(res => res.json())
            .then(() => {
                setReload(!reload)
              
                alert('Item Delivered')
            })
    
}

  //handle restock
  const handleSubmit = (e) => {
    e.preventDefault();
    const quantity = e.target.quantity.value;

    if (quantity < 0) {
      alert("Enter positive number");
      e.target.reset();
      return;
    } else if (quantity === "") {
      alert("Invalid input");
      return;
    } else {
      const updateQuantity = parseInt(inventory.quantity) + parseInt(quantity);
      const totalQuantity = { quantity: updateQuantity };

      fetch(`https://intense-bastion-09820.herokuapp.com/motor/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(totalQuantity),
      })
        .then((res) => res.json())
        .then(() => {
          setReload(!reload)
          e.target.reset();
          alert("Item added");
        });
    }
  };

  return (
    <>
      <div className="details-container">
        <div>
          <img src={inventory.img} alt="" />
        </div>
        <div>
          <h1>{inventory.name}</h1>
          <p>{inventory.details}</p>
          <h3>Price:${inventory.price}</h3>
          <h5>Quantity:{inventory.quantity}</h5>
          <p>
            <small>
              <span className="fw-bolder">ID:</span>
              {inventory._id}
            </small>
          </p>
        </div>
        <button onClick={handleDeliver}  className="w-75 py-2 detail-btn text-white fw-bolder">
          Delivered
        </button>
        <Link
          className="text-decoration-none fw-bolder text-center text-white w-75 detail-btn py-2"
          to={"/manage"}
        >
          Manage Inventories
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="number" name="quantity" placeholder="Add quantity" />{" "}
        <br />
        <button className="mt-2 mb-2" type="submit">
          Update Quantity
        </button>
      </form>
    </>
  );
};

export default InventoryDetails;
