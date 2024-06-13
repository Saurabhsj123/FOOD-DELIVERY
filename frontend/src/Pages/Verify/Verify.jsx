import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { storecontext } from '../../Context/Storecontext'
import axios from 'axios'
import { toast } from 'react-toastify'


function Verify() {

    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(storecontext)
    const navigate = useNavigate()

    const verifyPayment = async ()=>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId})
        if(response.data.success){
            navigate("/myorders")
            toast.success("ordered successful")
            }
            else{
                navigate("/")          
                toast.error("ordered failed")
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[])


  return (
    <div className='verify'>
        <div className="spinner">

        </div>
    </div>
  )
}

export default Verify
