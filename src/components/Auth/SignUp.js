import React from 'react'
import "./Auth.scss"
import { TextField,Button,Alert } from '@mui/material'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {Link} from 'react-router-dom'

function SignUp(props) {
  const {handleSubmit,register,formState:{errors}}=useForm()
  const [error,setError]= React.useState("")
  
  const onSubmit = (data)=>{
    data.email = data.email.trim()
    axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/auth/signup`,{...data,type:2})
    .then(res=>{
      if(res.data.msg==="Error"){
        setError(res.data.result)
      }else{
        if(props.location.state){
          props.history.push("/verifyotp",{auth:props.location.state.route,data:res.data})  
        }else{
          props.history.push("/verifyotp",{auth:"myprofile",data:res.data})
        }
      }
      
    })
    .catch(err=>{
      setError("Something went wrong, check your internet connection and try again")
    })
  }

  return (
    <div className='body'>
    <div className="shadow-sm auth-container">
        <img src="/cleverpeblack.png" alt="cleverpe" className="logo" />
        <h3>Be Clever Pe Later</h3>
        <h6>SignIn by entering the information below</h6>
        <form onSubmit = {handleSubmit(onSubmit)}>
        <TextField {...register('name',{required:true})} className="textfield" fullWidth variant="outlined" id="outlined-basic" label="Name" />
        <TextField {...register('email',{required:true})} className="textfield" fullWidth variant="outlined" id="outlined-basic" label="Email" />
        <TextField {...register('mobileNo',{required:true})} className="textfield" fullWidth variant="outlined" id="outlined-basic" label="Mobile Number" />
        <TextField {...register('postCode',{required:true})} className="textfield" fullWidth variant="outlined" id="outlined-basic" label="Pin Code" />
        {error.length>0&&<Alert className="alert" severity="error">{error}</Alert>}
        <p className="grey subtitle my-3">By continuing, you agree to CleverPe <Link to="/termsandconditions">Terms and Conditions</Link> of Use and <Link to="/privacypolicy">Privacy Policy</Link>.</p>
        <Button type="submit" className="mt-4" fullWidth variant="contained">SignUp</Button>
        </form>

    <p className='grey subtitle mt-3'>
    ©2022 Cleverpe Technologies Private Limited
    </p>
    </div>

    </div>

  )
}

export default SignUp
