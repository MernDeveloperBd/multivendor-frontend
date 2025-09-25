import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

import { useState } from 'react';
import { Button } from '@mui/material';


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const orderStatus=[
  {color:'#FFA500', label:'PENDING'},
  {color:'#FFA500', label:'PLACED'},
  {color:'#F5BCBA', label:'CONFIRMED'},
  {color:'#1E90FF', label:'SHIPPED'},
  {color:'#32CD32', label:'DELIVERED'},
  {color:'#FF0000', label:'CANCELLED'},
]

const OrderTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const handleUpdateOrder = (id:any, status:any) =>{
  console.log("update order",id, status);
  handleClose()
}
  return (
    <>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order ID</StyledTableCell>
              <StyledTableCell >Products</StyledTableCell>
              <StyledTableCell align="right">Shipping Address</StyledTableCell>
              <StyledTableCell align="right">Order Status</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div className='flex gap-2 flex-wrap'>
                    {
                      [1, 2].map((item, index) => <div key={index} className='flex gap-2 '>
                        <img className='w-20' src='https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752315532/products/tudrbcxmb0jmf72iasrt.jpg' alt="" />
                        <div className='flex flex-col justify-between py-1 items-start'>
                          <h2 className='font-semibold'>Title: Women dresd</h2>
                          <h2><strong>Price</strong>:TK 1500</h2>
                          <h2><strong>Color</strong>:Blue</h2>
                          <h2><strong>Size</strong>:XXL</h2>
                        </div>
                      </div>)
                    }

                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">
                  <Chip label="Delivered" />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={handleClick} color='primary' size='small'>Status</Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      list: {
                        'aria-labelledby': 'basic-button',
                      },
                    }}
                  >
                    {
                      orderStatus.map((status, index) =><MenuItem  key={index} onClick={()=>handleUpdateOrder(1, status.label)}><span className='text-[13px]'>{status?.label}</span></MenuItem>)
                    }
                    
                  </Menu>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  );
};

export default OrderTable;