import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DeleteIcon from "@material-ui/icons/Delete";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const DeletePost = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get(`http://localhost:5000/lists/${id}`).then((result) => {
      setProduct(result.data);
    });
  }, [id]);

  const handleRemoveProduct = () => {
    axios.delete(`http://localhost:5000/lists/${id}`).then((result) => {
      props.history.push("/");
    });
  };

  return (
    <div className="card">
      <h3>
        Deseja excluir o produto <strong>{product?.name}</strong>?
      </h3>
      <br />
        <Button
          color="primary"
          variant="contained"
          startIcon={<ArrowBackIcon />}
          disableElevation
        >
          <Link style={{ textDecoration: 'none' }} to="/">Voltar</Link>
        </Button>
        <Button
          color="secondary"
          type="submit"
          onClick={handleRemoveProduct}
          variant="contained"
          startIcon={<DeleteIcon />}
          disableElevation
        >
          Excluir
        </Button>
      </div>
  );
};

export default DeletePost;
