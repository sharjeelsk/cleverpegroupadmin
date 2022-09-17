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

function MerchantInfo(props) {
    console.log("merchantinfoprops",props)
    const [display,setDisplay]=React.useState(false)
    const [data,setData]=React.useState([])

    React.useEffect(()=>{
        axios.get(`${process.env.REACT_APP_DEVELOPMENT}/api/order/merchantAll/${props.location.state._id}`,{headers:{token:props.user.user}})
        .then(res=>{
            console.log(res)
            if(res.data.result[0].orders.length>0){
                let arr = res.data.result[0].orders.map((item,index)=>({...item,id:index+1}))
                setData(arr)
            }
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


            <h1>Merchant Orders</h1>
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
    { field: 'customerMobile', headerName: 'Customer Mobile No',valueGetter:(param)=>param.row.customer.mobileNo,width:150},
    { field: 'reciept', headerName: 'Reciept',valueGetter:(param)=>param.row.reciept?param.row.reciept:"Not Uploaded",width:200},
    { field: 'status', headerName: 'Order Status',valueGetter:(param)=>param.row.status,width:150},
    { field: 'total', headerName: 'Total',valueGetter:(param)=>param.row.total,width:150},
    { field: 'items', headerName: 'Total Items',valueGetter:(param)=>param.row.items.length,width:150},
    {field:"createdAt",headerName:"Created At",valueGetter:(param)=>moment.parseZone(param.value).local().format("DD/MM/YY"),width:120}


  ];

const mapStateToProps =({EventUser})=>{
    return {
      user:EventUser
    }
  }

export default connect(mapStateToProps)(MerchantInfo)
