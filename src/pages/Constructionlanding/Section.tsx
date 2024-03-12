import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import InteriorConstructionWork from '../../components/InteriorConstructionWork';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Icons
import { TbWorldWww } from "react-icons/tb";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// Image
import mercadolivre from '../../assets/images/ecommers/mercadolivre.png';
import instagram from '../../assets/images/ecommers/instagram.png';
import whatsapp from '../../assets/images/ecommers/whatsapp.png';
import about from "../../assets/images/NewCollecti.png";
import FundoModal from '../../assets/images/ecommers/fundoModal.png';

const dataContato = [
    { icon: <FaInstagram size={20} />, text: '@SunnyAura_Oficial' },
    { icon: <FaPhone size={20} />, text: '(47) 99205-7952' },
    { icon: <TbWorldWww size={25} />, text: 'www.home.sunnyaura.com.br' }
]

const cardsVenda = [
    { link: '#', icon: mercadolivre, cor: '#ffe600' },
    { link: 'https://www.instagram.com/sunnyaura_oficial?igsh=MTk3YnVtNWh5OHljcw==', icon: instagram, cor: '#8134af'},
    { link: 'https://wa.me/5547992057952', icon: whatsapp, cor: '#49c858' }
]

const SubContainer = styled.div`
    width: 600px;
    height: 600px;

    @media (max-width: 600px) {
        display: none;
    }

    background-image: url(${FundoModal});
    background-size: cover; /* Para fazer a imagem ocupar todo o espaço do container */
    background-position: center;
`;

const ContainerModalInfos = styled.div`
    width: 600px;
    height: 600px;
    padding-left: 10px;

    @media (max-width: 600px) {
        width: 100%;
        height: 100%;
        padding: 10px;
    }

        & > div:nth-child(1) > p:nth-child(1) {font-size: 30px; margin-top: 15px}
        & > div:nth-child(1) > p:nth-child(2) {font-size: 18px;}
        & > div:nth-child(2) > p:nth-child(2) {font-size: 15px; margin-top: 15px}
`;

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: 'flex',
    borderRadius: '5px',

    cardRede: {
        width: '100px',
        height: '100px',
        borderRadius: '15px',
        marginRight: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

const Section = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styleModal}>
                        <SubContainer />
                        <ContainerModalInfos>
                            <div>
                                <p>Pontos de venda Oficial</p>
                                <p>Clique no icone que você será redirecionado automaticamente.</p>
                            </div>
                            <div>
                                <section style={{ display: 'flex', marginTop: '30px', }}>
                                    {cardsVenda.map(item => (
                                        <Link to={item.link}>
                                            <div style={{ ...styleModal.cardRede, backgroundColor: item.cor, }}>
                                                <img
                                                    src={item.icon}
                                                    style={{
                                                        width: '50px'
                                                    }}
                                                />
                                            </div>
                                        </Link>
                                    ))}
                                </section>
                                <p>
                                    Se sinta seguro para clicar e realizar as compras <br/> em nossos links. Duvidas ou segestoes, abaixo <br/> tem nossos canais de atendimento.
                                </p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', height: '240px', paddingBottom: '15px', }}>
                                <Typography 
                                    id="modal-modal-description" sx={{ mt: 2 }} 
                                    style={{ 
                                        flex: 1, display: 'flex', 
                                        flexDirection: 'column', 
                                        justifyContent: 'flex-end', 
                                        alignItems: 'flex-start', 
                                    }}>
                                    {dataContato.map(item => (
                                        <div key={item.text} style={{ display: 'flex', marginTop: '20px' }}>
                                            <div style={{ width: '35px' }}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                {item.text}
                                            </div>
                                        </div>
                                    ))}
                                </Typography>
                            </div>
                        </ContainerModalInfos>
                    </Box>
                </Modal>
            </div>

            {/* Home */}
            <section className="section construction-home" id="home">
                <div className="bg-overlay"></div>
                <div className="home-center">
                    <div className="home-desc-center">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="construction-home-content text-center text-white">
                                        <h4 className="construction-home-title line-height_1_6 text-uppercase letter-spacing_4">
                                            Moda que ilumina<br />Sunny Aura
                                        </h4>
                                        <div className="construction-home-border mt-4"></div>
                                        <p className="construction-home-desc f-16 mt-4 mx-auto line-height_1_8">
                                            Iluminando seu dia com o estilo ensolarado da Sunny Aura.
                                        </p>
                                        <div className="mt-4 pt-3">
                                            <Button href="#" variant="md" className="btn-custom" onClick={handleOpen}>PONTOS DE COMPRA</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            {/* About */}

            <section className="section construction-about" id="about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={4}>
                            <div className="construction-about-image" style={{ marginRight: '50px', }}>
                                <img src={about} className="img-fluid" alt="" />
                            </div>
                        </Col>

                        <Col lg={7} className="offset-1" style={{ marginLeft: 0, }}>
                            <div className="mt-5 mt-lg-0">
                                <h4 className="f-16 text-muted text-uppercase letter-spacing_2">Bem vindo a Sunny Aura</h4>
                                <h3 className="mt-4">Renove com a Sunny Aura</h3>
                                <p className="text-muted mt-4">
                                    Um sonho que foi pensado e concretizado por mãe e filha, a Sunny Aura é mais do que uma marca de roupas; é a manifestação de uma visão compartilhada de elegância e conforto. Com um compromisso dedicado à excelência, cada peça é um reflexo da paixão que ambas investem na criação de um guarda-roupa que não apenas reflete estilo, mas também celebra a singularidade de quem a veste.
                                </p>
                                <div className="row mt-5">
                                    <div className="col-lg-6">
                                        <div>
                                            <div className="construction-about-icon">
                                                <i className="pe-7s-config"></i>
                                            </div>
                                            <h4 className="f-15 letter-spacing_2 text-uppercase mt-3">Criação</h4>
                                            <p className="text-muted mt-3 mb-0">
                                                Cada peça da Sunny Aura é uma obra-prima de artesanato, cuidadosamente criada com o intuito de transcender a moda convencional. Em cada ponto, tecemos histórias de elegância e inovação, proporcionando uma experiência única para quem busca a perfeição em cada detalhe.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div>
                                            <div className="construction-about-icon">
                                                <i className="pe-7s-display1"></i>
                                            </div>

                                            <h4 className="f-15 letter-spacing_2 text-uppercase mt-3">Renovação</h4>
                                            <p className="text-muted mt-3 mb-0">
                                                Renove seu estilo pessoal com a Sunny Aura, onde cada peça é uma expressão única de elegância e autenticidade. Deixe-nos ser a inspiração que eleva sua autoestima, redefinindo sua presença com moda que reflete sua verdadeira essência. Descubra o poder transformador da Sunny Aura e renove-se com confiança a cada nova coleção.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr />

            {/* Work */}
            <InteriorConstructionWork />

        </React.Fragment>
    )
}

export default Section