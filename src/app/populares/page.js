'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaPlusCircle, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagina from "@/app/components/Pagina";

export default function Carros() {
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        setCarros(JSON.parse(localStorage.getItem('carros')) || []);
    }, []);

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const dados = carros.filter(item => item.id !== id);
            localStorage.setItem('carros', JSON.stringify(dados));
            setCarros(dados);
        }
    }

    const cardStyle = {
        height: '380px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '10px',
        border: 'none',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease',
    };

    const cardHoverStyle = {
        transform: 'scale(1.05)',
    };

    const imageStyle = {
        height: '160px',
        objectFit: 'cover',
    };

    const motorStyle = {
        fontSize: '0.85rem',
        color: '#6c757d',
        textAlign: 'center',
        marginBottom: '0.0rem',
    };

    const anoStyle = {
        fontSize: '0.85rem',
        color: '#6c757d',
        textAlign: 'center',
    };

    const valorStyle = {
        fontSize: '2.0rem',
        fontWeight: 'bold',
        color: '#28a745',
        textAlign: 'center',
    };

    return (
        <Pagina titulo="Carros">
            <Link href="/populares/form" className="btn btn-primary mb-3">
                <FaPlusCircle /> Novo
            </Link>

            {carros.length > 0 ? (
                <Row>
                    {carros.map((carro) => (
                        <Col key={carro.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
                            <Card
                                style={cardStyle}
                                className="card-shadow"
                                onMouseEnter={(e) => e.currentTarget.style.transform = cardHoverStyle.transform}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <Card.Img
                                    variant="top"
                                    src={carro.imagemUrl}
                                    alt={`Imagem do carro ${carro.nome}`}
                                    style={imageStyle}
                                />
                                <Card.Body>
                                    <Card.Title className="text-center">{carro.nome}</Card.Title>
                                    <Card.Text style={motorStyle}>
                                        {carro.motor}
                                    </Card.Text>
                                    <Card.Text style={anoStyle}>
                                        Ano: {carro.ano}
                                    </Card.Text>
                                    <Card.Text style={valorStyle}>
                                        R$ {carro.valor}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between">
                                    <Link href={`/populares/form/${carro.id}`}>
                                        <Button variant="outline-primary" size="sm">
                                            <FaRegEdit title="Editar" className="text-primary" />
                                        </Button>
                                    </Link>
                                    <Button variant="outline-danger" size="sm" onClick={() => excluir(carro.id)}>
                                        <MdDelete />
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <p className="text-center">Nenhum carro cadastrado.</p>
            )}
        </Pagina>
    );
}
