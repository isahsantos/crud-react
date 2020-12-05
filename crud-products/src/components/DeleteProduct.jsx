import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../assets/styles/form.css";

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
      <div className="header">
        <Link to="/" className="cancel">
          <CancelIcon></CancelIcon>
        </Link>
        <h5>Excluir Produto</h5>
      </div>
      <div className="card-body">
        <div className="card-text">
          <h6>Deseja excluir o produto descrito abaixo?</h6>
        </div>
        <h6>
          ID:<strong>{product?.id}</strong>
        </h6>
        <h6>
          Nome:<strong>{product?.name}</strong>
        </h6>
        <br />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="medium"
          onClick={handleRemoveProduct}
          variant="contained"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Excluir
        </Button>
      </div>
    </div>
  );
};

export default DeletePost;
