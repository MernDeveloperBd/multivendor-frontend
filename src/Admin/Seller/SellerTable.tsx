import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

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

const accountStatuses = [
    {status:"PENDING_VERIFICATION", title:"Pending Verification", description:"Account is pending verification"},
    {status:"ACTIVE", title:"Active", description:"Account is Active and is good standing"},
    {status:"SUSPENDED", title:"Suspended", description:"Account is Suspended, possibly due to violations"},
    {status:"DEACTIVATED", title:"Deactivated", description:"Account is Deactivated, User may have chossen to deactivate it"},
    {status:"BANNED", title:"Banned", description:"Account is permanently banned"},
    {status:"CLOSED", title:"Closed", description:"Account is permanently closed"},
]

const SellerTable = () => {
     const [status, setStatus] = useState('ACTIVE');

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
    console.log(event.target.value);
    
  };
    return (
        <>
            <div className='pb-5'>
                <FormControl >
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={handleChange}
                    >
                        {/* <MenuItem value={10}>Ten</MenuItem> */}
                        {
                            accountStatuses.map((status) => <MenuItem value={status.status}>{status.status}</MenuItem>)
                        }
                        {/* <MenuItem value={10}>Ten</MenuItem> */}
                        
                    </Select>
                </FormControl>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Seller name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Mobile</StyledTableCell>
                            <StyledTableCell align="right">GSTIN</StyledTableCell>
                            <StyledTableCell align="right">Business Name</StyledTableCell>
                            <StyledTableCell align="right">Account Status</StyledTableCell>
                            <StyledTableCell align="right">Change Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell >
                                    <div>
                                        <p>Sep 21, 25</p>
                                        <p>12:25 AM</p>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">TK 1520</StyledTableCell>
                                <StyledTableCell align="right">TK 1520</StyledTableCell>
                                <StyledTableCell align="right">TK 1520</StyledTableCell>
                                <StyledTableCell align="right">TK 1520</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    );
};

export default SellerTable;