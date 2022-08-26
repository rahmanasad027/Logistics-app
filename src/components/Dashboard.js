import React,{useEffect,useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Dashboard = () => {
    const [rider,setRider] = useState([])
    const [page,setPage] = useState(1)
    let navigate = useNavigate();
// console.log("this is token in dashboard component",rider)
    useEffect(() => {
        const pageNo = page.toString()
      const url = 'https://do-rider.cheetay.pk/alerts_rider?page=' + pageNo
      const result = fetch(url,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            // 'Authorization': `Token ${token}`
            'Authorization': 'token 692afd3e4b33ee5eba6daaab786907798189d7da'
        }
      }).then(res => res.json()).then(data => {
        // console.log(data,'this is data from get api')
    
            setRider(data)
       
        // console.log(rider,'this is rider data')
    })
    }, [page]);

const handlePage = (e) => {
    // console.log('name of button', e.target.value)
    if(e.target.value === 'next'){
        setPage(page + 1)
    }else if(e.target.value === 'prev'){
        if(page === 1){
            return page
        }else {
            setPage(page - 1)
        }
    }
}


const handleclick = (id,phone,name1) => {
    const pageNo = page.toString()
    console.log('this is phone', phone)
    // setName(name1)
    const Id = id
    
   
//     const url = 'https://do-rider.cheetay.pk/rider/rider_alerts?rider='+Id+'&page='+pageNo+'&'
//     const message = fetch(url,{
//         method:'GET',
//         headers:{
//             'Content-Type': 'application/json',
//             'Authorization': 'token 692afd3e4b33ee5eba6daaab786907798189d7da'
//         }
//     }).then(res => res.json()).then(data => {
//         // console.log(data,'this is rider message')
// setMessage(data)
//     })
navigate('/chat',{state:{pageNo,name1,Id,phone}})
}

    return(
        <>
        <h1>dashboard</h1>
        {
rider.results ? (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Mobile number</TableCell>
            <TableCell align="right">Rider number</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
          {rider.results.map((row) => (
             <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{cursor:'pointer'}}
              onClick={()=>handleclick(row.last_alert?.rider,row.mobile_number,row.name)}
            > 
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.mobile_number}</TableCell>
              <TableCell align="right">{row.last_alert?.rider}</TableCell>
            </TableRow>
          ))} 
         </TableBody> 
      </Table>
     <button value={'prev'} onClick={(e) => handlePage(e)} ><ArrowBackIosNewIcon  /></button>
    <button value={'next'} onClick={(e) => handlePage(e)} ><ArrowForwardIosIcon  /></button>
    <h4>{page}</h4>
    </TableContainer>
    
    </>
) : null
        }
        </>
    )
}

export default Dashboard