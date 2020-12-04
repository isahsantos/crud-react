import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../assets/form.css"
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          width: theme.spacing(50),
          height: theme.spacing(40),
        },
      },
  button: {
    margin: theme.spacing(2),
    float:"center"
  },
}));

const CreateProduct = (props) => {
  const classes = useStyles();
  const { register, handleSubmit,errors } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/lists", data).then((result) => {
      props.history.push("/");
    });
  };
  return (
    <div className="card">
    <div className="card-body">
        <h5 className="card-title">Novo Produto</h5>
        <div className="card-text">
        <form  className="form-group" noValidate autoComplete="off"onSubmit={handleSubmit(onSubmit)}>
        <label>Nome do Produto</label>
        <br></br>
            <input
              type="text"
              className="form-control"
              name="name"
              ref={register({ required: true })}
            />
        <span className="error">{errors.name && "O produto deve conter um nome! "}</span>

          <div className="form-group">
            <label>Quantidade em estoque:</label>
            <br></br>
            <input
              i
              type="number"
              className="form-control"
              name="qtde"
              ref={register({ required: true ,})}
              
            />
             <span className="error">{errors.qtde === 0 && "Não é possivel adicionar quantidade 0 "}</span>
          </div>
          <div className="form-group">
            <label>Valor da Unidade:</label>
            <br></br>
            <input
              name="price"
              cols="10"
              rows="1"
              type="number"
              className="form-control"
              ref={register({ required: true })}
            ></input>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        
        </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
