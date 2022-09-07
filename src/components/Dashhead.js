import React from 'react'
import "./Dashhead.scss"
import {withRouter} from 'react-router'
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {connect} from 'react-redux'
const Dashhead = (props) => {
    console.log(props);
    let {id,display} = props
    return (
        
            
        <div className={display?"shadow-lg dashhead":'dashhead displayhidden'}>
            <h1>GP Admin</h1>
            {id===1?<div onClick={()=>props.history.push('dashboard')} className="menu-container-active">
                <p><HomeIcon /> <span className="pl-1">Home</span></p>
            </div>:
            <div className="menu-container" onClick={()=>props.history.push('dashboard')} >
            <p><HomeOutlinedIcon /> <span className="pl-2">Home</span></p>
            </div>
            }

            {id===2?<div className="menu-container-active" onClick={()=>props.history.push('merchants')}>
                <p><NoteAddIcon /> <span className="pl-1">Merchants</span></p>
            </div>:
            <div className="menu-container" onClick={()=>props.history.push('merchants')}>
            <p><NoteAddOutlinedIcon /> <span className="pl-2">Merchants</span></p>
            </div>
            }

            {id===3?<div className="menu-container-active" onClick={()=>props.history.push('organization')} >
                <p><EventAvailableIcon /> <span className="pl-1">Organization</span></p>
            </div>:
            <div className="menu-container" onClick={()=>props.history.push('organization')} >
            <p><EventAvailableOutlinedIcon /> <span className="pl-2">Organization</span></p>
            </div>
            }



            
        </div>
    );
}

const mapStateToProps = ({EventUser})=>{
    return {
        user:EventUser
    }
}

export default connect(mapStateToProps)(withRouter(Dashhead));