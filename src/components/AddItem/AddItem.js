import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import axios from "axios";
import { toast } from "react-toastify";

const AddItem = () => {
  const [user] = useAuthState(auth);
 
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    //my item post
     const myItem = {
       email:user.email,
       name: data.name ,
       img:data.img,
       supplier:data.supplier,
       price:data.price
     }
    axios.post('https://intense-bastion-09820.herokuapp.com//myitem', myItem).then(response=>{
      const {data} = response
      if (data.insertedId){
        toast('Your Item has added')
       
      }
     
    })

    //inventory data post
    const url = `https://intense-bastion-09820.herokuapp.com/inventory`;
    
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
      
       console.log(result)
        
       
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="my-4">Please Add A new Item</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          value={user?.displayName}
          className="mb-2"
          {...register("displayName", { disabled: true }, { required: true, maxLength: 20 })}
        />
        <input
         value={user?.email}
          className="mb-2"
          {...register("email",{ disabled: true }, { required: true, maxLength: 20 })}
        />
        <input
          placeholder=" Item Name"
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
