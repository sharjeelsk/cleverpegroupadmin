import React from 'react'
import "./Auth.scss"
import { TextField,Button,Alert } from '@mui/material'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {setUser,getUserInfo} from '../redux/user/userActions'


function VerifyOtp(props) {
    console.log("verify otp props", props)
    const [error,setError]=React.useState("")
    const [otp,setOtp]=React.useState("")
    const [timer,setTimer]=React.useState(0)

    React.useEffect(()=>{
        if(timer>0){
            setTimeout(() => {
                setTimer(timer-1)
            }, 1000);
        }
    },[timer])

    const getUser = (otp)=>{
        axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/auth/verifyOTP`,{...props.location.state.data,otp})
        .then(res=>{
            console.log(res)
            if(res.status===201){
                setError(res.data.result)
            }else{

                props.setUser(res.data.result)
                props.getUserInfo(res.data.result)
                props.history.push('/dashboard')        
            }
            // if(res.data.result!=="Incorrect" && res.data.result!=="Not Found"){
            //     props.setUser(res.data.result)
            //     props.getUserInfo(res.data.result)
            //     props.history.push(props.location.state.auth)
                
            // }else{
            //     setError(res.data.result)
            // }
            
        })
        .catch(err=>{
            setError("Something went wrong")
        })
    }

    const handleSubmit = ()=>{
        // if(otp===props.location.state.data.otp){
        //    getUser()
        // }else{
        //     setError("Invalid OTP")
        // }
        getUser(otp)
    }

    const handleOtpChange = (otpm)=>{
        setOtp(parseInt(otpm))
        // if(parseInt(otpm)===props.location.state.data.otp){
        //    getUser()
        // }
        if(parseInt(otpm).length===6){
            getUser(otpm)
        }
    }

  return (
    <div className='body'>
    <div className="shadow-sm auth-container">
        <img src="/cleverpeblack.png" alt="cleverpe" className="logo" />
        <h3>Be Clever Pe Later</h3>
        <h6>OTP has been sent to {props.location.state.data.mobileNo}</h6>
        {
            props.location.state.auth==="merchantprofile"&&        
            <section>
                <p className="mototext">You're just one step away in becoming a CleverPe Partner !!</p>
            </section>
            // <div className="row my-4">
            // <div className="col-6 checkbox-head align-items-center row m-auto">
            //   <div className="col-3">
            //   <img src={checkgreen} alt="checkblack" />
            //   </div>
            //   <div className="col-9">
            //     <p>Enter Details and verify GSTIN</p>
            //   </div>
            
            // </div>
            // <div className="col-6 checkbox-head align-items-center row m-auto">
            //   <div className="col-3">
            //   <img src={checkblack} alt="checkblack" />
            //   </div>
            //   <div className="col-9">
            //   <p>Verify OTP and Dive In !</p>
            //   </div>
            
            // </div>
            // </div>
        }
        <p style={{color:"#ccc"}}>{props.location.state.data.otp}</p>
        <TextField onChange={(e)=>handleOtpChange(e.target.value)} className="textfield" fullWidth variant="outlined" id="outlined-basic" label="Enter OTP" />
        <div style={{textAlign:"right"}}>
            {timer!==0?<Button disabled>Resend OTP ({timer})</Button>:<Button onClick={()=>setTimer(59)}>Resend OTP</Button>}
        </div>
        {error.length>0&&<Alert className="alert" severity="error">{error}</Alert>}
        <p className="grey subtitle my-3">By continuing, you agree to CleverPe <Link to="/termsandconditions">Terms and Conditions</Link> of Use and <Link to="/privacypolicy">Privacy Policy</Link>.</p>
        <Button onClick={()=>handleSubmit()} className="mt-2" fullWidth variant="contained">Verify OTP</Button>
        <p className='grey subtitle mt-3'>
        ©2022 Cleverpe Technologies Private Limited
    </p>
    </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        setUser:(token)=>dispatch(setUser(token)),
        getUserInfo:(token)=>dispatch(getUserInfo(token))
    }
}

export default connect(null,mapDispatchToProps)(VerifyOtp)