import axios from "axios";
import { useEffect, useState } from "react"



const useToken = users => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            
            const email = users?.user?.email;
           
            if (email) {
                const { data } = await axios.post('https://intense-bastion-09820.herokuapp.com/login', { email });
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            
            }
        }
        getToken();
    }, [users]);
    return [token];
}

export default useToken;