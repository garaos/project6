import { useNav } from "../hooks/useNav"
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills = () => {
  const skillsRef = useNav("Skills")

  return (
    <section ref={skillsRef} id="skillsSection" className="skills">
      <h2>Skills</h2>
      <div className="container">
        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar now={80} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar now={70} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar now={60} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">React <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar now={60} />
              </div>
            </div>

          </div>


          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="progress">
              <span className="skill">Node <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar now={60} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">express <i className="val">50%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar now={50} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">Mongodb <i className="val">50%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar now={50} />
              </div>
            </div>

            <div className="progress">
              <span className="skill">GIT <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar now={70} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills