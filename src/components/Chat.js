
import React,{useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import Input from './Input';
// import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { FixedSizeList } from 'react-window';
// import Fab from '@mui/material/Fab';
// import SendIcon from '@mui/icons-material/Send';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   chatSection: {
//     width: '100%',
//     height: '80vh'
//   },
//   headBG: {
//       backgroundColor: '#e0e0e0'
//   },
//   borderRight500: {
//       borderRight: '1px solid #e0e0e0'
//   },
//   messageArea: {
//     height: '70vh',
//     overflowY: 'auto'
//   }
// });

const Chat = () => {
    // console.log('this is my message aerts:', message.data.alerts.description)
    // console.log('this is my name:', name)
    //   const classes = useStyles();
    const [name,setName] = useState('')
    const [page,setPage] = useState('')
    const [id,setId] = useState('')
    const [message,setMessage] = useState({})
    const [phone1,setPhone] = useState('')
let location = useLocation();
useEffect(() => {
    setName(location.state.name1)
    setPage(location.state.pageNo.toString())
    setId(location.state.Id)
    setPhone(location.state.phone)
    const url = 'https://do-rider.cheetay.pk/rider/rider_alerts?rider='+id+'&page='+page+'&'
    const message = fetch(url,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'token 692afd3e4b33ee5eba6daaab786907798189d7da'
        }
    }).then(res => res.json()).then(data => {
        // console.log(data,'this is rider message')
setMessage(data)
    })
}, [id,message]);
    return (
        <>
            {message && name ? (
                <div>
                    <Grid container>
                        <Grid item xs={12} >
                            <Typography variant="h5" className="header-message">Chat</Typography>
                        </Grid>
                    </Grid>
                    <Grid container component={Paper} >
                        <Grid item xs={3} >
                            <List>
                                <ListItem button key="RemySharp">
                                    <ListItemIcon>
                                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                    </ListItemIcon>
                                    <ListItemText primary={name}></ListItemText>
                                </ListItem>
                            </List>
                            <Divider />
                        </Grid>
                        <Grid  item xs={9}>
                            <div style={{ height:'450px',overflowY:'scroll'}}>
                                {
                                    message.data?.alerts?.map((message) => {
                                        return (
                                            <div >
                                         <List  key={message.id} >
                                                <ListItem > 
                                                     <Grid container>
                                                        <Grid item xs={12}>
                                                            <ListItemText align="right" primary={message.description}></ListItemText>
                                                        </Grid>
                                                       <Grid item xs={12}>
                                                            <ListItemText align="right" secondary="09:30"></ListItemText>
                                                        </Grid>
                                                    </Grid> 
                                                  </ListItem>
                                             </List>   
                                            </div>        
                                        )
                                    })
                                }
                            </div> 
                            <Divider />
                            {phone1 ? <Input phone1={phone1} />: null }
                        </Grid>
                    </Grid>
                </div>
             ) : null} 
        </>
    );
}
export default Chat;