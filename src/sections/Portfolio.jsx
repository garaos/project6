import { useNav } from "../hooks/useNav"
import { Card } from "react-bootstrap"
import Container from 'react-bootstrap/Container';

import Landing from "../img/portfolio/Landing.png"
import CRUD from "../img/portfolio/CRUD.png"
import React_APP from "../img/portfolio/React_APP.png"
import API from "../img/portfolio/API.png"



const Portfolio = () => {
  const portfolioRef = useNav("Portfolio")

  return (
    <section ref={portfolioRef} id="portfolioSection" className="secondary-section pt-5">
      <h2 className="pt-5">Portfolio</h2>
      <div className=" container text-center pt-3">
        <div className="row">

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center pb-1 mb-3">
            <div style={{ width: '18rem' }} className="rounded shadow mb-5">
              <h4 className="pt-2 text-black-50 fw-bolder">Landing</h4>
              <Card.Img variant="top" src={Landing} className="w-100 pb-2" />
              <Card.Body className="row pb-3">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-secondary ms-2">html</span><span className="badge bg-secondary ms-2">css</span><span className="badge bg-secondary ms-2">bootstrap</span></h5>
                </div>
                <Container className="mt-5">
                  <Card.Link href="https://proyect-1-udd-lp.netlify.app" className="text-reset col-8 fs-3 px-2" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-link"></i>
                  </Card.Link>
                  <Card.Link href="https://github.com/garaos/proyecto1" className="text-reset col-2 fs-3 px-2" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </Card.Link>
                </Container>
              </Card.Body>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center pb-1 mb-3">
            <div style={{ width: '18rem' }} className="rounded shadow mb-5">
              <h4 className="pt-2 text-black-50 fw-bolder">CRUD</h4>
              <Card.Img variant="top" src={CRUD} className="w-100 pb-2" />
              <Card.Body className="row pb-3">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-secondary ms-2">html</span><span className="badge bg-secondary ms-2">css</span><span className="badge bg-secondary ms-2">js</span><span className="badge bg-secondary ms-2">bootstrap</span></h5>
                </div>
                <Container className="mt-5">
                  <Card.Link href="https://garaos.github.io/proyecto2/" className="text-reset col-8 fs-3 px-2" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-link"></i>
                  </Card.Link>
                  <Card.Link href="https://github.com/garaos/proyecto2" className="text-reset col-2 fs-3 px-2" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </Card.Link>
                </Container>
              </Card.Body>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center pb-1 mb-3">
            <div style={{ width: '18rem' }} className="rounded shadow mb-5">
              <h4 className="pt-2 text-black-50 fw-bolder">Dashboard</h4>
              <Card.Img variant="top" src={API} className="w-100 pb-2" />
              <Card.Body className="row pb-3">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-secondary ms-2">html</span><span className="badge bg-secondary ms-2">css</span><span className="badge bg-secondary ms-2">js</span><span className="badge bg-secondary ms-2">axios</span><span className="badge bg-secondary ms-2">bootstrap</span></h5>
                </div>
                <Container className="mt-3">
                  <Card.Link href="https://garaos.github.io/proyecto3/" className="text-reset col-8 fs-3 px-2" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-link"></i>
                  </Card.Link>
                  <Card.Link href="https://github.com/garaos/proyecto3" className="text-reset col-2 fs-3 px-2" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </Card.Link>
                </Container>
              </Card.Body>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center pb-1 mb-3">
            <div style={{ width: '18rem' }} className="rounded shadow mb-5">
              <h4 className="pt-2 text-black-50 fw-bolder">React App</h4>
              <Card.Img variant="top" src={React_APP} className="w-100 pb-2" />
              <Card.Body className="row pb-3">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-secondary ms-2">Node</span><span className="badge bg-secondary ms-2">React</span><span className="badge bg-secondary ms-2">Firebase</span><span className="badge bg-secondary ms-2">bootstrap</span></h5>
                </div>
                <Container className="mt-3">
                  <Card.Link href="https://proyecto4-mdb8xoky4-garaos.vercel.app" className="text-reset col-8 fs-3 px-2" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-link"></i>
                  </Card.Link>
                  <Card.Link href="https://github.com/garaos/proyecto4" className="text-reset col-2 fs-3 px-2" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </Card.Link>
                </Container>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Portfolio