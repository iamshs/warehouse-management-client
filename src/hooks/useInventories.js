import { useEffect, useState } from "react"

const useInventories = () =>{
    const [inventories,setInventories]=useState([])

    useEffect(()=>{
        fetch('http://intense-bastion-09820.herokuapp.com/intense-bastion-09820.herokuapp.com//inventory')
        .then(res=>res.json())
        .then(data=>setInventories(data))
    },[]);
    return [inventories,setInventories]
}

export default useInventories