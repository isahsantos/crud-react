import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import RegisterIcon from "../assets/img/register.svg";
import SearchBar from "./Search";
import "../assets/styles/list.css";
//Sessão de estilo material
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const useStylesPaper = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const useStyles = makeStyles({
  root: {
    marginTop: "30px",
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  table: {
    minWidth: 650,
    padding: "10px",
  },
});
//Iniciação do componente
const PostList = () => {
  const [input, setInput] = useState("");
  const [productListDefault, setProductListDefault] = useState();
  const [products, setProduct] = useState([]);
  const classes = useStyles();
  const classesPaper = useStylesPaper();
  useEffect(() => {
    //Conexão com a fake-api
    axios.get("http://localhost:5000/lists").then((result) => {
      setProduct(result.data);
      setProductListDefault(result.data);
    });
  }, []);
  //Update para o campo de busca
  const updateInput = async (input) => {
    const filtered = productListDefault.filter((product) => {
      return product.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setProduct(filtered);
  };

  return (
    <Container maxWidth="xl">
      <div className={classesPaper.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classesPaper.paper}>
              <p>Cadastre um Produto:</p>
              <img
                className="icon"
                src={RegisterIcon}
                width="40px"
                heigth="40px"
              />
              <NavLink to="/create">Ir para o cadastro</NavLink>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classesPaper.paper}>
              <p>Busque por um produto:</p>
              <SearchBar input={input} onChange={updateInput} />
            </Paper>
          </Grid>
        </Grid>
      </div>
      <TableContainer className="container" component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Nome</StyledTableCell>
              <StyledTableCell align="right">Quantidade</StyledTableCell>
              <StyledTableCell align="right">Valor Unitario</StyledTableCell>
              <StyledTableCell align="right">Valor Total</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell align="right" component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="right">{product.name}</TableCell>
                <TableCell align="right">{product.qtde}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">
                  {(product.qtde * product.price).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  <Link className="edit" to={`/edit/${product.id}`}>
                    <EditIcon />
                  </Link>
                  <Link className="danger" to={`/delete/${product.id}`}>
                    <DeleteIcon />
                  </Link>
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
