import React, { useState } from 'react';
//import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
//import FormTextArea from '../../../components/FormTextArea';
import Button from '../../../components/Button';



function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values, [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
  }

  return (
    
      <PageDefault>
        <h1>
          Cadastro de Categoria:
          {values.nome}
        </h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias, values,
          ]);

          setValues(valoresIniciais);
        }}
        >
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button>
            Cadastrar
          </Button>
        </form>

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.nome}`}>
              {categoria.nome}
            </li>
          ))}
        </ul>

        <Link to="/">
          Ir para a home
        </Link>
      </PageDefault>
    
  );
}

export default CadastroCategoria;
