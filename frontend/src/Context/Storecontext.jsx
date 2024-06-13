import { createContext, useEffect, useState } from "react";
// import { food_list } from "../Assets/assets";
import axios from "axios"

export const storecontext = createContext(null)

const StorecontextProvider = (props)=>{

    const [cartItems, setCartItems] = useState({});
    // const url = "http://localhost:4000"
    const url = `${window.location.origin}`
    const [token , setToken] = useState("")
    const [food_list, setFoodList] =useState([])
    
    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){

            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product)=> product._id === item)
                totalAmount += itemInfo.price* cartItems[item]
            }
        }
        return totalAmount;
    }

    useEffect(()=>{
        async function loadData(){
            await fetchFoodList()
            
        }
        loadData()
    },[])

    const fetchFoodList = async()=>{
        const response = await axios.get(url+"/api/food/list") 
        setFoodList(response.data.data)
    }

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
       
    }
    

    return (
        <storecontext.Provider value={contextValue}>
            {props.children}
        </storecontext.Provider>
    )
}

export default StorecontextProvider