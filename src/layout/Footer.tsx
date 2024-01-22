import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FooterSection: React.FC = () => {
    return (
        <React.Fragment>
            <footer className="section agency-footer pb-5">
                <Container>
                    <Row>
                        <Col lg={3} md={4}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Information</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li>
                                        <Link to="#">Apresentação</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Ecommerce</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} md={4}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Ajuda</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li>
                                        <Link to="#">Atendimento</Link>
                                    </li>
                                    <li>
                                        <Link to="#">SAC</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Como nos encontrar?</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Termos</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} md={4}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Redes</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li>
                                        <Link to="#">Instagram </Link>
                                    </li>
                                    <li>
                                        <Link to="https://wa.me/5547992057952">Whatsapp</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Contato rapido</h6>
                                <p className="subscribe-desc mt-4 mb-0">
                                    Informe seu numero de telefone
                                </p>

                                <div className="mt-4 text-center mx-auto">
                                    <div className="agency-footer-subcribe">
                                        <form action="https://wa.me/5547992057952">
                                            <input placeholder="Numero" type="text" />
                                            <button className="btn btn-custom">
                                                <i className="mdi mdi-phone"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col lg={12}>
                            <div className="agency-footer-alt-content p-4">
                                <p className="copy-right text-center mb-0">
                                    © {new Date().getFullYear()} Design por Sunny Aura All rights reserved.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default FooterSection;