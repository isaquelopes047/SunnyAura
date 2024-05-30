import React, { useState } from 'react'

import user1 from "../../assets/images/users/user-1.png"
import user2 from "../../assets/images/users/user-2.png"

import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import FooterSection from '../../layout/Footer'

const teamData = [
    { name: "Bianca M. Trapp Blaska", role: "COSTUREIRA", image: user1, resume: 'Desempenha um papel fundamental, e é uma das fundadoras da marca Sunny Aura. destacando seu papel crucial no desenvolvimento da marca desde o início.'},
    { name: "Eliane Trapp", role: "COSTUREIRA", image: user2, resume: 'Costureira com mais de 20 anos de experiência, destaca-se por sua habilidade em criar peças intricadas. Sua expertise é vital para a Sunny Aura, sendo uma inspiração central na concepção de designs elaborados.'},
]    

const Section1 = () => {

    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (event: any) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        // Access form field values
        const name = formData.get('name');
        const email = formData.get('email');
        const number = formData.get('number');
        const address = formData.get('address');
        const comments = formData.get('comments');

        const validationError = validateForm(name, email, number, address, comments);
        if (validationError) {
            setErrorMsg(validationError);
            return;
        }
        form.reset();
        setErrorMsg('');
    };

    const validateForm = (name: any, email: any, number: any, address: any, comments: any) => {
        if (!name || name.trim() === '') {
            return 'Por favor coloque seu nome.';
        }
        if (!email || email.trim() === '') {
            return 'Por favor coloque seu email.';
        }
        if (!number || number.trim() === '') {
            return 'Por favor coloque seu numero de celular.';
        }
        if (!address || address.trim() === '') {
            return 'Por favor coloque seu Endereço.';
        }
        if (!comments || comments.trim() === '') {
            return 'Por favor coloque seu comentario.';
        }
        return '';
    };

    return (
        <React.Fragment>
            {/* team */}
            <section className="section" id="CEO" style={{ backgroundColor: '#292929',}}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="home-title text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase" style={{color: '#fff'}}>FUNDADORAS</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <div className="row mt-5 pt-3" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {teamData.map((teamMember, index) => (
                            <Col lg={4} key={index}>
                                <div className="team p-4 text-center mt-4">
                                    <div className="agency-team-img">
                                        <img src={teamMember.image} className="img-fluid rounded-circle" alt={teamMember.name} />
                                    </div>
                                    <h5 className="mt-4 text-uppercase letter-spacing_2 f-15" style={{ color: '#fff'}}>{teamMember.name}</h5>
                                    <p className="text-muted mb-0" style={{ color: '#fff'}}>{teamMember.resume}</p>
                                </div>
                            </Col>
                        ))}
                    </div>
                </Container>
            </section>
            <hr />

            {/* Contact */}

            <section className="section" id="CONTATO">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="home-title text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">NOS ENVIE UMA MENSAGEM</h2>
                                <p className="heading-title-desc text-muted mt-4">
                                    Fique à vontade para nos enviar uma mensagem, seja para compartilhar seu feedback ou para esclarecer dúvidas. Estamos aqui para atendê-lo e valorizamos sua participação em nossa comunidade Sunny Aura. 
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 pt-3">
                        <Col lg={8}>
                            <div className="custom-form mt-4">
                                <Form onSubmit={handleInputChange} name="myForm" id="myForm">
                                    {errorMsg && <Alert variant="danger" className="error_message">{errorMsg}*</Alert>}
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="name" id="name" type="text" placeholder="Seu nome" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="email" id="email" type="email" placeholder="Seu Email" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="number" id="number" type="number" placeholder="Seu numero de celular" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="address" id="address" type="address" placeholder="Seu endereço" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="my-3">
                                                <Form.Control name="comments" id="comments" as="textarea" rows={5} placeholder="Sua mesangem " />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="mt-3">
                                                <Button type="submit" id="submit" name="send" className="submitBnt btn btn-md btn-dark-custom w-100">Enviar mensagem</Button>
                                                <div id="simple-msg"></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                        <Col lg={4} style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ order: -1, marginTop: '20px' }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28532.933376171597!2d-48.714894962798134!3d-26.628731152635854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d92b137cb564f9%3A0x1d8e6085c66acdcf!2sBarra%20Velha%2C%20SC%2C%2088390-000!5e0!3m2!1spt-BR!2sbr!4v1704897246076!5m2!1spt-BR!2sbr" width="100%" height="450" title="Localização no Mapa"></iframe>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>

            {/* Footer */}
            <FooterSection />

        </React.Fragment>
    )
}

export default Section1