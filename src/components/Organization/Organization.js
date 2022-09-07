import React from 'react'
import "./Organization.scss"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../Dashhead';
import {connect} from 'react-redux'
import axios from 'axios'
import { Rectangle } from 'recharts';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment'

function Organization(props) {
    const [display,setDisplay]=React.useState(false)
    const [data,setData]=React.useState(null)

    React.useEffect(()=>{
        console.log(props.user.userInfo.groupId)
        axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/org/single`,{organisationId:props.user.userInfo.organisation},{headers:{token:props.user.user}})
        .then(res=>{
            console.log(res)
            setData(res.data.result)
        })
    },[])


    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={3} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>


            <h1>Organization</h1>
            {
                data&&<section>
                    <p>Name: {data.name}</p>
                    <p>Group ID: {data.groupId}</p>
                    <p>Admin: {data.admin}</p>
                    <p>Contact Email: {data.contactEmail}</p>
                    <p>Contact No: {data.contactNo}</p>
                </section>
            }


             </div>
    </div>
    )
}


const mapStateToProps =({EventUser})=>{
    return {
      user:EventUser
    }
  }

export default connect(mapStateToProps)(Organization)
