import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreateProduct = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Novo Produto</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Nome do Produto</label>
                            <input type="text" className="form-control" name="name" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.title && 'Título inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Quantidade em estoque</label>
                            <input type="number" className="form-control" name="qtde" ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label>Valor da Unidade</label>
                            <textarea name="price" cols="10" rows="1" className="form-control" ref={register({ required: true })}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Valor Total</label>
                             
                        </div>
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateProduct;