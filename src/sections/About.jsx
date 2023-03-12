import { useNav } from "../hooks/useNav"
import gon3 from '../img/gon-03.png'


const About = () => {
  const aboutRef = useNav("About")

  return (
    <section ref={aboutRef} id="aboutSection" className="secondary-section">
      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src={gon3} className="img-fluid gonme pt-5" alt="Gon" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h2 className="abt-me">About Me.</h2>
          <h3 className="pt-3">Full-Stack Web Developer Jr</h3>
          <p className="fst-italic">
            Graduated in Electronic Civil Engineering and graduated from Full Stack Web Developer from the UDD Bootcamp.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="fa-solid fa-circle-chevron-right"></i><strong> Degree:</strong> <span>Bachelor of Science in Electrical Engineering</span></li>
                <li><i className="fa-solid fa-circle-chevron-right"></i><strong> City:</strong> <span>Santiago, Chile</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="fa-solid fa-circle-chevron-right"></i><strong> Email:</strong> <span>gonzalo@araos.org</span></li>
                <li><i className="fa-solid fa-circle-chevron-right"></i><strong> Freelance:</strong> <span>Disponible</span></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About