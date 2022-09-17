import React from 'react'
import "./Auth.scss"
import { TextField,Button,Alert } from '@mui/material'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function SignIn(props) {
  const {handleSubmit,register,formState:{errors}}=useForm()
  const [error,setError]=React.useState("")
  const onSubmit = (data)=>{
    if(parseInt(data.mobile)){
      setError("")
      axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/auth/signin`,{mobileNo:data.mobile})
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
        setError("Check your internet connection")
      })
    }else{
      setError("Enter valid mobile number")
    }
  }

  return (
    <div className='body'>
    <div className="shadow-sm auth-container">
        <img src="/cleverpeblack.png" alt="cleverpe" className="logo" />
        <h3>Be Clever Pe Later</h3>
        <h6>Partner SignIn</h6>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField error={errors.mobile?true:false} {...register("mobile",{required:true,valueAsNumber:true})} className="textfield" fullWidth variant="outlined" id="outlined-basic" label="Mobile Number" />


        {error.length>0&&<Alert className="alert" severity="error">{error}</Alert>}
        <Button type="submit" className="mt-4" fullWidth variant="contained">Signin</Button>
        <p className="grey subtitle my-3">By continuing, you agree to CleverPe <Link to="/termsandconditions">Terms and Conditions</Link> of Use and <Link to="/privacypolicy">Privacy Policy</Link>.</p>

        <hr />
        <div className="mt-3">
          <p className="newtext">New to partner.cleverpe? Dive in by creating an account</p>
          <Button fullWidth variant="outlined" onClick={()=>props.history.push("/signup",props.location.state)}>create an account</Button>
        </div>
        </form>

    <p className='grey subtitle mt-3'>
    ©2022 Cleverpe Technologies Private Limited
    </p>
    </div>

    </div>
  )
}
const mapStateToProps = ({loading})=>{
  return {
      loading
  }
}


export default connect(mapStateToProps)(SignIn)