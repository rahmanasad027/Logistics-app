import React,{useState,useEffect} from "react";
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


const Input = ({phone1}) => {
const [rider,setRider] = useState({
    title:'',
    description: '',
    riders:[],
    is_active: true
})
const [phone,setPhone] = useState('')
useEffect(() => {
 setPhone(phone1)
 if(phone){
    setRider({
        title: '',
        description:'',
        riders: [phone],
        is_active: true
    })
 }
}, [phone]);


const handleClick = () => {
   const url = 'https://do-rider.cheetay.pk/rider_alerts/'
   const result = fetch(url,{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': 'token 692afd3e4b33ee5eba6daaab786907798189d7da'
    },
    body: JSON.stringify(rider)
   }).then(
    data =>{ 
        if(data.ok){
          console.log('success')
        }else{
          console.log('failure')
        }
        console.log('the data' , data)
      }
   ).catch(e => console.log('error occurs',e))
//    setRider({
//     title: '',
//     description:'',
//     riders: [],
//     is_active: true
//    })
}
// console.log('this is phone no:',phone)

const handleChange = (e) => {
    if(e.target.name === 'title'){
        setRider({title: e.target.value, description: '' , riders:[...rider.riders] , is_active: rider.is_active})
    }else if(e.target.name === 'description'){
        setRider({title: rider.title , description: e.target.value , riders:[...rider.riders] , is_active: rider.is_active})
    }
}
console.log('rider data is', rider)

    return (
        <Grid container style={{ padding: '20px' }}>
        <Grid item xs={11}>
            <TextField name={'title'} id="outlined-basic-email" label="title..." fullWidth onChange={(e) => handleChange(e)} />
        </Grid>
        <Grid item xs={11}>
            <TextField name={'description'} id="outlined-basic-email" label="description..." fullWidth onChange={(e)=>handleChange(e)} />
        </Grid>
        <Grid xs={1} align="right">
            <Fab color="primary" aria-label="add"><SendIcon onClick={handleClick} /></Fab>
        </Grid>
    </Grid>
    )
}

export default Input;