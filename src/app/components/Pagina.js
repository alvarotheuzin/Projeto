import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
export default function Pagina(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Fundamentos</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="mx-auto">
                            <NavDropdown title="Populares" id="nav-dropdown-hatch">
                                <NavDropdown.Item href="/populares">Lista</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/populares/form">Novos Populares</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="SUVs" id="nav-dropdown-suvs">
                                <NavDropdown.Item href="/empresas">Listar</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/empresas/form">Nova Empresa</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Sedan" id="nav-dropdown-sedan">
                                <NavDropdown.Item href="/empresas">Listar</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/empresas/form">Nova Empresa</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav>
                            <NavDropdown title={<FaUser />} id="nav-dropdown-user" align="end">
                                <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                                <NavDropdown.Item href="/configuracoes">Configurações</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout">Sair</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>

            <Container className="my-3">
                {props.children}
            </Container>
        </>
    );
}
