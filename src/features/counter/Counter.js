import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addProd1,
  addProduct1,
  addProd2,
  addProduct2,
} from './counterSlice';
import styles from './Counter.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

function createData(name, quantity, price, pTotal, totalAmt) {
  return { name, quantity, price, pTotal, totalAmt };
}


export function Counter() {
  const dispatch = useDispatch();
  const [prod1N, setProd1N] = useState('Intel')
  const [prod1, setProd1] = useState('0');
  const [prod1Amt, setProd1Amt] = useState('1000');
  const [prod2N, setProd2N] = useState('Dell')
  const [prod2, setProd2] = useState('0');
  const [prod2Amt, setProd2Amt] = useState('1500');
  const product1 = useSelector(addProduct1);
  const product2 = useSelector(addProduct2);
  const addP1 = Number(prod1) || 0;
  const addPr1 = Number(prod1Amt) || 0;
  const addP2 = Number(prod2) || 0;
  const addPr2 = Number(prod2Amt) || 0;

  const rows = [
    createData(
      product1 > 1 ? prod1N : '',
      product1 > 1 ? product1 : '',
      product1 > 1 ? prod1Amt : '',
      product1 > 1 ? product1 * prod1Amt : '',
      
    ),
    createData(
      product2 > 1 ? prod2N : '',
      product2 > 1 ? product2 : '',
      product2 > 1 ? prod2Amt : '',
      product2 > 1 ? product2 * prod2Amt : '',
      
    ),
  ];

  const subtotal = product1 * prod1Amt + product2 * prod2Amt;

  return (
    <>
    <h2>Build shopping cart using Redux toolkit</h2>
      <div className={styles.row}>
        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/id/1/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {prod1N}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${prod1Amt}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <input
              className={styles.textbox}
              aria-label="Set increment amount"
              value={prod1}
              onChange={(e) => setProd1(e.target.value)}
              style={{ width: '100%' }}
            />

          </CardActions>
          <CardActions>
            <Button size="small" color="primary" style={{ backgroundColor: '#EFAD4D', color: '#FFF', width: '100%' }} onClick={() => dispatch(addProd1([addP1, addPr1]))}>
              Add to cart
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 250 }} style={{ margin: 50 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/id/2/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {prod2N}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${prod2Amt}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <input
              className={styles.textbox}
              aria-label="Set increment amount"
              value={prod2}
              onChange={(e) => setProd2(e.target.value)}
              style={{ width: '100%' }}
            />
          </CardActions>
          <CardActions>
            <Button size="small" color="primary" style={{ backgroundColor: '#EFAD4D', color: '#FFF', width: '100%' }} onClick={() => dispatch(addProd2([addP2, addPr2]))}>
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className='shoppingCart'>
        {/* <Typography variant="h4" style={{ padding: 20, margin: 20 }}>
          Shopping cart
        </Typography> */}
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell align="center">Product Quantity</StyledTableCell>
                <StyledTableCell align="center">Product Price</StyledTableCell>
                <StyledTableCell align="center">Product Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                  <StyledTableCell align="center">{row.price}</StyledTableCell>
                  <StyledTableCell align="center">{row.pTotal}</StyledTableCell>
                </StyledTableRow>
              ))}
              <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Total Amount</TableCell>
            <TableCell align="center">{subtotal}</TableCell>
          </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
