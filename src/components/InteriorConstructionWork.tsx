import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Image
import work1 from "../assets/images/works/work-1.png"
import vestidolongo2 from "../assets/images/works/vestidolongo2.png"
import cropped1 from '../assets/images/works/cropped1.png'
import cropped2 from '../assets/images/works/cropped2.png'
import social1 from '../assets/images/works/social1.png'

interface PortfolioData {
    image: string; groups: string[]; title: string; category: string;
}

const portfolioData: PortfolioData[] = [
    { image: work1, groups: ['VestidoLongo'], title: 'Vestido Longo', category: 'VestidoLongo', },
    { image: vestidolongo2, groups: ['VestidoLongo'], title: 'Vestido Longo', category: 'VestidoLongo', },
    { image: cropped1, groups: ['Crooped'], title: 'Crooped', category: 'Crooped', },
    { image: cropped2, groups: ['Crooped'], title: 'Crooped', category: 'Crooped', },
    { image: social1, groups: ['Social'], title: 'Social', category: 'Social', },
];


const InteriorConstructionWork: React.FC = () => {

    const [filter, setFilter] = React.useState('All');

    const handleFilter = (group: any) => {
        setFilter(group);
    };

    const filteredData = filter === 'All' ? portfolioData : portfolioData.filter(item => item.groups.includes(filter));

    return (
        <React.Fragment>
            <section className="section portfolio business-portfolio" id="serviços">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center">
                                <h2 className="heading-title-title letter-spacing_4 text-uppercase">NOSSOS ESTILOS</h2>
                                <p className="heading-title-desc text-muted mt-4 mb-0">
                                    Um de nossos modelos mais trabalhados
                                </p>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="filters-group-wrap mt-5 pt-3">
                                <div className="filters-group">
                                    <Nav className="filter-options justify-content-center">
                                        <li onClick={() => handleFilter('All')} className={` nav-link list-inline-item mt-2  ${filter === 'All' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                            TODOS
                                        </li>
                                        <li onClick={() => handleFilter('VestidoLongo')} className={`nav-link list-inline-item mt-2 ${filter === 'VestidoLongo' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                            VERTIDOS LONGOS
                                        </li>
                                        <li onClick={() => handleFilter('Crooped')} className={`nav-link list-inline-item mt-2 ${filter === 'Crooped' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                            CROPPEDS
                                        </li>
                                        <li onClick={() => handleFilter('Social')} className={`nav-link list-inline-item mt-2 ${filter === 'Social' ? 'active' : ''}`} style={{ cursor: 'pointer' }}>
                                            SOCIAL
                                        </li>
                                    </Nav>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-5">
                    <Row id="grid">
                        {(filteredData || [])?.map((item: PortfolioData, key: number) => (
                            <Col lg={4} key={key} className="picture-item" data-groups={JSON.stringify(item.groups)}>
                                <div className="gallary-box m-3 portfolio">
                                    <Link className="lightbox port" to="#" title="">
                                        <img className="gallary-container" src={item.image} alt={item.title} />
                                        <div className="item-effect">
                                            <div className="item-caption text-center bg-primary text-white p-3">
                                                <h5 className="f-14 letter-spacing_2 text-uppercase mb-0">{item.title}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default InteriorConstructionWork