import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import "../assets/list.css";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "./Search"
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    padding: "10px",
  },
});
const PostList = () => {
  const [input, setInput] = useState('');
  const [productListDefault, setProductListDefault] = useState();
  const [products, setProduct] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    //Conexão com a fake-api
    axios.get("http://localhost:5000/lists").then((result) => {
      setProduct(result.data);
      setProductListDefault(result.data)
    });
  }, []);
  const updateInput = async (input) => {
    const filtered = productListDefault.filter(product => {
     return product.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setProduct(filtered);
 }

  return (
    <Container maxWidth="xl">
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
          searching={true}

        >
          <TableHead>
            <TableRow>
              <TableCell>Actions</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              <TableCell align="right">Valor Unitario</TableCell>
              <TableCell align="right">Valor Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Link className="edit" to={`/edit/${product.id}`}>
                    <EditIcon />
                  </Link>

                  <Link className="danger" to={`/delete/${product.id}`}>
                    <DeleteIcon />
                  </Link>
                </TableCell>

                <TableCell align="right" component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="right">{product.name}</TableCell>
                <TableCell align="right">{product.qtde}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">
                  {(product.qtde * product.price).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PostList;
