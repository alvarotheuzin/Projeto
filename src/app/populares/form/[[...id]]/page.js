'use client';

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {
    const router = useRouter();

    const carros = JSON.parse(localStorage.getItem('carros')) || [];
    const dados = carros.find(item => item.id === String(params.id));
    const carro = dados || { nome: '', portas: '', assentos: '', direcao: '', cor: '', ano: '', imagemUrl: '', cambio: '', motor: '', valor: '' };

    const tiposDirecao = ["Hidráulica", "Elétrica", "Mecânica", "Direção Assistida"];
    const tiposCambio = ["Automático", "Manual"];
    const anosFabricacao = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

    function salvar(dados) {
        if (carro.id) {
            const index = carros.findIndex(item => item.id === carro.id);
            if (index !== -1) {
                carros[index] = { ...carros[index], ...dados };
            }
        } else {
            dados.id = v4();
            carros.push(dados);
        }

        localStorage.setItem('carros', JSON.stringify(carros));
        router.push('/populares');
    }

    return (
        <Pagina titulo="Novo Carro">
            <Formik
                initialValues={carro}
                validate={values => {
                    const errors = {};
                    if (!values.nome) errors.nome = 'Nome é obrigatório';
                    if (!values.portas) errors.portas = 'Quantidade de portas é obrigatória';
                    if (!values.assentos) errors.assentos = 'Quantidade de assentos é obrigatória';
                    if (!values.direcao) errors.direcao = 'Tipo de direção é obrigatório';
                    if (!values.cor) errors.cor = 'Cor é obrigatória';
                    if (!values.ano) errors.ano = 'Ano de fabricação é obrigatório';
                    if (!values.imagemUrl) errors.imagemUrl = 'Link da imagem é obrigatório';
                    if (!values.cambio) errors.cambio = 'Tipo de câmbio é obrigatório';
                    if (!values.motor) errors.motor = 'Tipo de motor é obrigatório';
                    if (!values.valor) errors.valor = 'O valor do veículo é obrigatório';
                    return errors;
                }}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={values.nome}
                                onChange={handleChange}
                                isInvalid={!!errors.nome}
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
                                onChange={handleChange}
                                isInvalid={!!errors.valor}
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
                                onChange={handleChange}
                                isInvalid={!!errors.imagemUrl}
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
                                onChange={handleChange}
                                isInvalid={!!errors.ano}
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
                                onChange={handleChange}
                                isInvalid={!!errors.direcao}
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
                                onChange={handleChange}
                                isInvalid={!!errors.cambio}
                            >
                                <option value="">Selecione o tipo de câmbio</option>
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
                                onChange={handleChange}
                                isInvalid={!!errors.motor}
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
                                onChange={handleChange}
                                isInvalid={!!errors.cor}
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
                                onChange={handleChange}
                                isInvalid={!!errors.portas}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.portas}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="text-center">
                            <Button type="submit" variant="success">
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
