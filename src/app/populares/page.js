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
        if (typeof window !== 'undefined') {
            const carrosLocalStorage = JSON.parse(localStorage.getItem('carros')) || [];
            setCarros(carrosLocalStorage);
        }
    }, []);

    const handleEdit = (carro) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('carroEdit', JSON.stringify(carro));
            window.location.href = "/populares/form";
        }
    };

    const cardStyle = {
        height: '380px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };

    const imageStyle = {
        height: '160px',
        objectFit: 'cover'
    };

    const motorStyle = {
        fontSize: '0.75rem',
        color: '#6c757d',
    };

    const valorStyle = {
        fontSize: '1.0rem',
        fontWeight: 'bold',
        marginTop: 'auto'
    };

    const anoStyle = {
        fontSize: '0.75rem',
        color: '#6c757d',
    };

    return (
        <Pagina titulo="Carros">
            <Link href="/populares/form" className="btn btn-primary mb-3">
                <FaPlusCircle /> Novo
            </Link>

            {carros.length > 0 ? (
                <Row>
                    {carros.map((carro, i) => (
                        <Col key={i} sm={12} md={6} lg={4} xl={3} className="mb-4" style={{ flexBasis: '20%' }}>
                            <Card style={cardStyle}>
                                <Card.Img
                                    variant="top"
                                    src={carro.imagemUrl}
                                    alt={`Imagem do carro ${carro.nome}`}
                                    style={imageStyle}
                                />
                                <Card.Body>
                                    <Card.Title>{carro.nome}</Card.Title>
                                    <Card.Text style={motorStyle}>
                                        {carro.motor}
                                    </Card.Text>
                                    <Card.Text style={valorStyle}>
                                        R$ {carro.valor}
                                    </Card.Text>
                                    <Card.Text style={anoStyle}>
                                        Ano: {carro.ano}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between">
                                    <Button variant="outline-primary" size="sm" onClick={() => handleEdit(carro)}>
                                        <FaRegEdit />
                                    </Button>
                                    <Button variant="outline-danger" size="sm">
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

