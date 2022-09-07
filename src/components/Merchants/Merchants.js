import React from 'react'
import "./Merchants.scss"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../Dashhead';
import {connect} from 'react-redux'
import axios from 'axios'
import { Rectangle } from 'recharts';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment'

function Merchants(props) {
    const [display,setDisplay]=React.useState(false)
    const [data,setData]=React.useState([])

    React.useEffect(()=>{
        console.log(props.user.userInfo.groupId)
        axios.post(`${process.env.REACT_APP_DEVELOPMENT}/api/org/members`,{groupId:props.user.userInfo.groupId},{headers:{token:props.user.user}})
        .then(res=>{
            console.log(res)
            let arr = res.data.result.map((item,index)=>({...item,id:index+1}))
            setData(arr)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Dashhead id={2} display={display} />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 dashboard-container" onClick={()=>display&&setDisplay(false)}>
            <span className="iconbutton display-mobile">
            <IconButton  size="large" aria-label="Menu" onClick={()=>setDisplay(true)}>
            <MenuIcon fontSize="inherit" />
             </IconButton>
             </span>


            <h1>Merchants Belonging to Your Group</h1>
            <div style={{ height: '80vh', width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns2}
                    autoPageSize
                    checkboxSelection
                    onRowClick={(item,ev)=>props.history.push('/orderdetails',item.row)}
                />
            </div>



             </div>
    </div>
    )
}

const columns2 = [
    { field: 'id', headerName: 'ID',width:20},
    //{ field: 'brand', headerName: 'Brand Name',valueGetter:(param)=>param.value.name,width:150},
    { field: 'name', headerName: 'Name',valueGetter:(param)=>param.row.name,width:150},
    { field: 'email', headerName: 'Email',valueGetter:(param)=>param.row.email,width:200},
    { field: 'groupId', headerName: 'GroupId',valueGetter:(param)=>param.row.groupId,width:150},
    { field: 'mobileNo', headerName: 'Mobile No',valueGetter:(param)=>param.row.mobileNo,width:150},
    { field: 'merchantId', headerName: 'Merchant Id',valueGetter:(param)=>param.row.merchantId,width:150},
    { field: 'verified', headerName: 'Verified',valueGetter:(param)=>param.row.verified.toString(),width:150},
    {field:"createdAt",headerName:"Created At",valueGetter:(param)=>moment.parseZone(param.value).local().format("DD/MM/YY"),width:120}


  ];

const mapStateToProps =({EventUser})=>{
    return {
      user:EventUser
    }
  }

export default connect(mapStateToProps)(Merchants)
