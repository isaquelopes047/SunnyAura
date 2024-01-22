import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import InteriorConstructionWork from '../../components/InteriorConstructionWork'

// Image
import about from "../../assets/images/NewCollecti.png"
import ruler from "../../assets/images/icons/rulers.png"
import tool from "../../assets/images/icons/tools.png"
import desktop from "../../assets/images/icons/desktop.png"
import briefcase from "../../assets/images/icons/briefcase.png"
import drawing from "../../assets/images/icons/drawing-tablet.png"
import presentation from "../../assets/images/icons/presentation.png"

interface ServicesData {
    icon: string; title: string;
}

const servicesData: ServicesData[] = [
    { icon: ruler, title: 'Fast Operations', },
    { icon: tool, title: 'Renovation', },
    { icon: desktop, title: 'Consultation', },
    { icon: briefcase, title: 'Architecture', },
    { icon: drawing, title: 'Planning', },
    { icon: presentation, title: 'Constructor', },
];

const Section = () => {
    return (
        <React.Fragment>
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
                                            Sunny Aura<br />Ilumine Seu Estilo, Vista Sunny Aura.
                                        </h4>
                                        <div className="construction-home-border mt-4"></div>
                                        <p className="construction-home-desc f-16 mt-4 mx-auto line-height_1_8">
                                            Cada costura é meticulosamente planejada para envolver você em satisfação absoluta, iluminando seu dia com o estilo ensolarado da Sunny Aura.
                                        </p>
                                        <div className="mt-4 pt-3">
                                            <Button href="#" variant="md" className="btn-custom">ACESSE O ECOMMERCE</Button>
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
                            <div className="construction-about-image" style={{marginRight: '50px',}}>
                                <img src={about} className="img-fluid" alt="" />
                            </div>
                        </Col>

                        <Col lg={7} className="offset-1" style={{marginLeft: 0,}}>
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
                                                Renove seu estilo pessoal com a Sunny Aura, onde cada peça é uma expressão única de elegância e autenticidade. Deixe-nos ser a inspiração que eleva seu guarda-roupa, redefinindo sua presença com moda que reflete sua verdadeira essência. Descubra o poder transformador da Sunny Aura e renove-se com confiança a cada nova coleção.
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