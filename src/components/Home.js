import React from 'react'
import "./Home.scss"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from './Dashhead';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector   } from 'recharts';
import axios from 'axios'
import _ from 'lodash'
import { CChart } from '@coreui/react-chartjs';
import {connect} from 'react-redux'
import moment from 'moment';
import { DataGrid } from '@mui/x-data-grid';
import {getUserInfo} from './redux/user/userActions'
function Home(props) {
    const [display,setDisplay]=React.useState(false)
    const [dashboardData,setDashboardData]=React.useState({})
    const [allOrderData,setAllOrderData] = React.useState([])

    React.useEffect(()=>{
      props.getUserInfo(props.user.user)

    },[])

    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={1} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>

            <h1>Hi, Group Admin</h1>
            {
              props.user.userInfo&&<section>
                <p>Name: {props.user.userInfo.name}</p>
                <p>Email: {props.user.userInfo.email}</p>
                <p>GroupId: {props.user.userInfo.groupId}</p>
                <p>Mobile No: {props.user.userInfo.mobileNo}</p>
                <p>Role: {props.user.userInfo.role}</p>
              </section>
            }





             </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getUserInfo:(token)=>dispatch(getUserInfo(token))
  }
}

const mapStateToProps =({EventUser})=>{
  return {
    user:EventUser
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)



const columns = [
  { field: 'id', headerName: 'ID',width:20},
  //{ field: 'brand', headerName: 'Brand Name',valueGetter:(param)=>param.value.name,width:150},
  { field: 'name', headerName: 'Customer Name',valueGetter:(param)=>param.row.userDetails.name,width:150},
  { field: 'total', headerName: 'Total',valueGetter:(param)=>param.row.total,width:150},
  { field: 'status', headerName: 'Status',valueGetter:(param)=>param.row.status,width:150},
  { field: 'type', headerName: 'Type',valueGetter:(param)=>param.row.type,width:150},
  { field: 'totalitems', headerName: 'Total Items',valueGetter:(param)=>param.row.items.length,width:150},
  { field: 'mobileNo', headerName: 'Mobile Number',valueGetter:(param)=>param.row.userDetails.mobileNo,width:150},
  { field: 'address_1', headerName: 'Address 1',valueGetter:(param)=>param.row.type==="Onsite"?"":param.row.shipping.address_1,width:150},
  { field: 'address_2', headerName: 'Address 2',valueGetter:(param)=>param.row.type==="Onsite"?"":param.row.shipping.address_2,width:150},
  {field:"createdAt",headerName:"Created At",valueGetter:(param)=>moment.parseZone(param.value).local().format("DD/MM/YY"),width:120}


];