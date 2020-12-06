import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import CancelIcon from "@material-ui/icons/Cancel";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import "../assets/styles/form.css";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#32cb00",
    color: "white",
  },
}));
const EditPost = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const { register, handleSubmit, errors, setValue } = useForm();

  useEffect(() => {
    axios.get(`http://localhost:5000/lists/${id}`).then((result) => {
      setValue("id", result.data.id);
      setValue("name", result.data.name);
      setValue("qtde", result.data.qtde);
      setValue("price", result.data.price);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onSubmit = (data) => {
    axios.put(`http://localhost:5000/lists/${id}`, data).then((result) => {
      props.history.push("/");
    });
  };

  return (
    <div className="card">
      <div className="header">
        <Link to="/" className="cancel">
          <CancelIcon></CancelIcon>
        </Link>
        <h5>Editar Produto</h5>
      </div>
      <div className="card-body">
        <div className="card-text">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>ID</label>
              <input
                type="text"
                readOnly
                className="form-control"
                name="id"
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <label>Nome do Produto:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                ref={register({ required: true })}
              />
              <small className="form-text text-danger">
                {errors.name && "O Produto precisa ter um nome !"}
              </small>
            </div>
            <div className="form-group">
              <label>Quantidade em Estoque:</label>
              <input
                type="number"
                className="form-control"
                name="qtde"
                ref={register({
                  required: { value: true, required: true },
                  min: {
                    value: 1,
                    message: "Quantidade precisa ser maior que 0",
                  },
                })}
              />
              <small className="form-text text-danger">
                {errors.qtde && "Quantidade precisa ser maior que 0"}
              </small>
            </div>
            <div className="form-group">
              <label>Valor da Unidade:</label>
              <br></br>
              <input
                name="price"
                cols="10"
                rows="1"
                step="0.1"
                type="number"
                className="form-control"
                ref={register({
                  required: { value: true, required: true },
                  min: {
                    value: 0.1,
                    message: "Valor precisa ser maior que 0!",
                  },
                })}
              ></input>
              <small className="form-text text-danger">
                {errors.price && "O produto precisa ter valor maior que 0!"}
              </small>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="green"
              size="medium"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Salvar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
