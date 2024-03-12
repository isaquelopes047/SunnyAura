import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { TbWorldWww } from "react-icons/tb";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const paragrafoModal = {
    width: '300px',
    height: '40px',
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center'
};

const FooterSection: React.FC = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <footer className="section agency-footer pb-5">

                {/* Modal */}
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Atravez de nossos canais a baixo
                            </Typography>
                            <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontSize: '15px',}}>
                                Entre em contato com nos por qualquer dos canais
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <div style={{ ...paragrafoModal }}>
                                    <div style={{ width: '35px', }}>
                                        <FaInstagram size={20} />
                                    </div>
                                    <div>
                                        @SunnyAura_Oficial
                                    </div>
                                </div>
                                <div style={{ ...paragrafoModal }}>
                                    <div style={{ width: '35px', }}>
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        (47) 99205-7952
                                    </div>
                                </div>
                                <div style={{ ...paragrafoModal }}>
                                    <div style={{ width: '35px', }}>
                                        <TbWorldWww size={25} />
                                    </div>
                                    <div>
                                        www.home.sunnyaura.com.br
                                    </div>
                                </div>
                            </Typography>
                        </Box>
                    </Modal>
                </div>

                <Container>
                    <Row>
                        <Col lg={3} md={4}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">PONTOS DE VENDAS</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li>
                                        <Link to="https://www.instagram.com/sunnyaura_oficial?igsh=MTk3YnVtNWh5OHljcw==">Instagram</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Mercado livre</Link>
                                    </li>
                                    <li>
                                        <Link to="https://wa.me/5547992057952">Whatsapp</Link>
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
                                        <Link to="#" onClick={handleOpen}> Como nos encontrar </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} md={4}>
                            <div>
                                <h6 className="footer-heading text-uppercase fw-bold f-13">Redes</h6>
                                <ul className="list-unstyled footer-link mt-3 mb-0">
                                    <li>
                                        <Link to="https://www.instagram.com/sunnyaura_oficial?igsh=MTk3YnVtNWh5OHljcw==">Instagram </Link>
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