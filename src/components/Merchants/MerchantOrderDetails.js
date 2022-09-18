import React from 'react'
import "./Merchants.scss"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashhead from '../Dashhead';
import {connect} from 'react-redux'
import axios from 'axios'
import { Rectangle } from 'recharts';
import { DataGrid } from '@mui/x-data-grid';
import _ from 'lodash'
import moment from 'moment'

function MerchantOrderDetails(props) {
    console.log("MerchantOrderDetailsprops",props)
    const details = props.location.state;
    const [display,setDisplay]=React.useState(false)
    const [data,setData]=React.useState([])
     const renderName2 = (product,options)=>{
        let name = product.name
        _.map(options,(value,key)=>{
            if(key!=="_id" && key!=="mrp" && key!=="price" && key!=="imgs"){
                name = name + " " + `(${value})`
            }
        })
        return name
    }
    React.useEffect(()=>{

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


            <h1>Items Bought</h1>
            {
                details.items.map((item,index)=><section key={index}>
                    <h2>{renderName2(item.details.product[0],item.details.options)}</h2>
                    <p>IMEI: {item.imeiserial}</p>
                    <p>{item.productPrice} x {item.quantity}</p>
                </section>)
            }
          



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

export default connect(mapStateToProps)(MerchantOrderDetails)
