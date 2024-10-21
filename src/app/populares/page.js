'use client';

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagina from "../components/Pagina";

export default function Carros() {
    const carros = JSON.parse(localStorage.getItem('carros')) || [];

    return (
        <Pagina titulo="Carros">
            <Link href="/carros/form" className="btn btn-primary mb-3">
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Modelo</th>
                        <th>Quantidade de Portas</th>
                        <th>Assentos</th>
                        <th>Tipo de Direção</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {carros.map((carro, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{carro.modelo}</td>
                            <td>{carro.portas}</td>
                            <td>{carro.assentos}</td>
                            <td>{carro.direcao}</td>
                            <td>
                                <FaRegEdit className="text-primary me-2" />
                                <MdDelete className="text-danger" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}
