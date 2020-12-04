import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import axios from "axios";
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
      padding:"10px",
      
    },
  }); 
const PostList = () => {
  const [products, setProduct] = useState([]);
  
  const classes = useStyles(); 
  useEffect(() => {
    axios.get("http://localhost:5000/lists").then((result) => {
      setProduct(result.data);
    });
  }, []);

  return (
    <Container maxWidth="xl">
   
  
    <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Valor Unitario</TableCell>
            <TableCell align="right">Valor Total</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
        {products.map((product) => (
           <TableRow key={product.name}>
           <TableCell component="th" scope="row">
             {product.name}
           </TableCell>
           <TableCell align="right">{product.price}</TableCell>
           <TableCell align="right">{product.qtde}</TableCell>
        <TableCell align="right">{(product.qtde*product.price).toFixed(2)}</TableCell>
         </TableRow>
        ))}
      </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
};

export default PostList;
