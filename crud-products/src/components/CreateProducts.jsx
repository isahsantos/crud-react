import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/form.css";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor:"#32cb00",
    color:'white'
  },
}));

const CreateProduct = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/lists", data).then((result) => {
      props.history.push("/");
      //envia os dados para a fake api
    });
  };

  return (
    <div className="card">
      <div className="header">
        <Link to="/" className="cancel">
          <CancelIcon></CancelIcon>
        </Link>
        <h5>Novo Produto</h5>
      </div>
      <div className="card-body">
        <div className="card-text">
          <form
            //handlesubmit e onsubmit metodos para o envio do formulário
            className="form-group"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>Nome do Produto</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="name"
              ref={register({ required: true })}
            />
            {/* Mensagem de erro para atender aos requisitos do teste */}
            <small className="form-text text-danger">
              {errors.name && "O Produto precisa ter um nome !"}
            </small>

            <div className="form-group">
              <label>Quantidade em estoque:</label>
              <br></br>
              <input
                type="number"
                className="form-control"
                name="qtde"
                ref={register({
                  required: { value: true, required: true },
                  min: {
                    value: 1,
                    message: "Quantidade precisa ser maior que 0 !",
                  },
                })}
              />
              <small className="form-text text-danger">
                {errors.qtde && "Quantidade precisa ser maior que 0 !"}
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
                  min: { value: 0.1, message: "Valor precisa ser maior que 0" },
                  // Iten que verifica se o valor do produto é mairo que "1 centavo"
                })}
              ></input>
              <small className="form-text text-danger">
                {errors.price && "O produto precisa ter valor maior que 0"}
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

export default CreateProduct;
