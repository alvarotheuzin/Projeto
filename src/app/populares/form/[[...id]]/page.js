'use client';

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";

export default function CreateCarro() {
    const router = useRouter();

    function salvar(dados) {
        const carros = JSON.parse(localStorage.getItem('carros')) || [];
        carros.push(dados);
        localStorage.setItem('carros', JSON.stringify(carros));
        router.push('/populares');
    }

    return (
        <Pagina titulo="Novo Carro">
            <Formik
                initialValues={{ nome: '', portas: '', assentos: '', direcao: '', cor: '', ano: '', imagemUrl: '' }}
                validate={values => {
                    const errors = {};

                    if (!values.nome) {
                        errors.nome = 'Nome é obrigatório';
                    }

                    if (!values.portas) {
                        errors.portas = 'Quantidade de portas é obrigatória';
                    }

                    if (!values.assentos) {
                        errors.assentos = 'Quantidade de assentos é obrigatória';
                    }

                    if (!values.direcao) {
                        errors.direcao = 'Tipo de direção é obrigatório';
                    }

                    if (!values.cor) {
                        errors.cor = 'Cor é obrigatória';
                    }

                    if (!values.ano) {
                        errors.ano = 'Ano de fabricação é obrigatório';
                    }

                    if (!values.imagemUrl) {
                        errors.imagemUrl = 'Link da imagem é obrigatório';
                    } else if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(values.imagemUrl)) {
                        errors.imagemUrl = 'Link inválido';
                    }

                    return errors;
                }}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={values.nome}
                                onChange={handleChange('nome')}
                                isInvalid={errors.nome}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.nome}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="portas">
                            <Form.Label>Quantidade de Portas</Form.Label>
                            <Form.Control
                                type="number"
                                name="portas"
                                value={values.portas}
                                onChange={handleChange('portas')}
                                isInvalid={errors.portas}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.portas}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="assentos">
                            <Form.Label>Quantidade de Assentos</Form.Label>
                            <Form.Control
                                type="number"
                                name="assentos"
                                value={values.assentos}
                                onChange={handleChange('assentos')}
                                isInvalid={errors.assentos}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.assentos}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="direcao">
                            <Form.Label>Tipo de Direção</Form.Label>
                            <Form.Control
                                type="text"
                                name="direcao"
                                value={values.direcao}
                                onChange={handleChange('direcao')}
                                isInvalid={errors.direcao}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.direcao}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cor">
                            <Form.Label>Cor</Form.Label>
                            <Form.Control
                                type="text"
                                name="cor"
                                value={values.cor}
                                onChange={handleChange('cor')}
                                isInvalid={errors.cor}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.cor}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ano">
                            <Form.Label>Ano de Fabricação</Form.Label>
                            <Form.Control
                                type="number"
                                name="ano"
                                value={values.ano}
                                onChange={handleChange('ano')}
                                isInvalid={errors.ano}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.ano}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="imagemUrl">
                            <Form.Label>Link da Imagem</Form.Label>
                            <Form.Control
                                type="text"
                                name="imagemUrl"
                                value={values.imagemUrl}
                                onChange={handleChange('imagemUrl')}
                                isInvalid={errors.imagemUrl}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.imagemUrl}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link href="/carros" className="btn btn-danger ms-2">
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
