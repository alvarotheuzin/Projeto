'use client';

import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaPlusCircle, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagina from "@/app/components/Pagina";

export default function Carros() {
    const carros = JSON.parse(localStorage.getItem('carros')) || [];

    const cardStyle = {
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };

    const imageStyle = {
        height: '150px',
        objectFit: 'cover'
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
                                    <Card.Text>
                                        <strong>Portas:</strong> {carro.portas} <br />
                                        <strong>Assentos:</strong> {carro.assentos} <br />
                                        <strong>Direção:</strong> {carro.direcao}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between">
                                    <Button variant="outline-primary" size="sm">
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
