import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:4000/inventory`;
    
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
      
       
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="my-4">Please Add A new Item</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder=" Name"
          className="mb-2"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          placeholder="Supplier"
          className="mb-2"
          {...register("supplier", { required: true, maxLength: 20 })}
        />
        <input
          placeholder="Price"
          className="mb-2"
          type="number"
          {...register("price")}
        />

        <input
          placeholder="Quantity"
          className="mb-2"
          type="number"
          {...register("quantity")}
        />
        <input
          placeholder="Image-URL"
          className="mb-2"
          type="text"
          {...register("img")}
        />
        <textarea
          placeholder="details"
          className="mb-2"
          {...register("details")}
        />
        <input placeholder="" className="mb-2" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
