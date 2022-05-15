import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';


function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([])
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    const { handleChange, values } = useForm({
        titulo: '',
        url: '',
        categoria: '',
    });

    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            })
    }, [])

    console.log(categoryTitles);

    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit={(event) => {
                event.preventDefault();

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                });

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                    .then(() => {
                        console.log('Cadastrou com sucesso!')
                        history.push('/');
                    });
            }}>
                <FormField
                    label="Título do Vídeo"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />

                <FormField
                    label="URL do vídeo"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                />

                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;