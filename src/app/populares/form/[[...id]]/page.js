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

    const tiposDirecao = ["Hidráulica", "Elétrica", "Mecânica", "Direção Assistida"];
    const tiposCambio = ["Automático", "Manual"];
    const anosFabricacao = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

    function salvar(dados) {
        const carros = JSON.parse(localStorage.getItem('carros')) || [];
        carros.push(dados);
        localStorage.setItem('carros', JSON.stringify(carros));
        router.push('/populares');
    }

    return (
        <Pagina titulo="Novo Carro">
            <Formik
                initialValues={{ nome: '', portas: '', assentos: '', direcao: '', cor: '', ano: '', imagemUrl: '', cambio: '' }}
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
                    }

                    if (!values.cambio) {
                        errors.cambio = 'Tipo de câmbio é obrigatório';
                    }
                    if (!values.motor) {
                        errors.motor = 'Tipo de motor é obrigatório';
                    }
                    if (!values.valor) {
                        errors.valor = 'O valor do veículo é obrigatório';
                    }

                    return errors;
                }}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors }) => (

                    <Form>
                        <Form.Group className="mb-4" controlId="nome">
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

                        <Form.Group className="mb-4" controlId="valor">
                            <Form.Label>Valor</Form.Label>
                            <Form.Control
                                type="text"
                                name="valor"
                                value={values.valor}
                                onChange={handleChange('valor')}
                                isInvalid={errors.valor}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.valor}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="imagemUrl">
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

                        <Form.Group className="mb-4" controlId="ano">
                            <Form.Label>Ano de Fabricação</Form.Label>
                            <Form.Control
                                as="select"
                                name="ano"
                                value={values.ano}
                                onChange={handleChange('ano')}
                                isInvalid={errors.ano}
                            >
                                <option value="">Selecione o ano</option>
                                {anosFabricacao.map((ano, index) => (
                                    <option key={index} value={ano}>
                                        {ano}
                                    </option>
                                ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.ano}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="direcao">
                            <Form.Label>Tipo de Direção</Form.Label>
                            <Form.Control
                                as="select"
                                name="direcao"
                                value={values.direcao}
                                onChange={handleChange('direcao')}
                                isInvalid={errors.direcao}
                            >
                                <option value="">Selecione o tipo de direção</option>
                                {tiposDirecao.map((tipo, index) => (
                                    <option key={index} value={tipo}>
                                        {tipo}
                                    </option>
                                ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.direcao}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="cambio">
                            <Form.Label>Câmbio</Form.Label>
                            <Form.Control
                                as="select"
                                name="cambio"
                                value={values.cambio}
                                onChange={handleChange('cambio')}
                                isInvalid={errors.cambio}
                            >
                                <option value="">Selecione o tipo de cambio</option>
                                {tiposCambio.map((tipo, index) => (
                                    <option key={index} value={tipo}>
                                        {tipo}
                                    </option>
                                ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.cambio}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="motor">
                            <Form.Label>Motor</Form.Label>
                            <Form.Control
                                type="text"
                                name="motor"
                                value={values.motor}
                                onChange={handleChange('motor')}
                                isInvalid={errors.motor}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.motor}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="cor">
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

                        <Form.Group className="mb-4" controlId="portas">
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

                        <Form.Group className="mb-4" controlId="assentos">
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

                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link href="/populares" className="btn btn-danger ms-2">
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
