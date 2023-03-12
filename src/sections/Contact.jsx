import { useNav } from "../hooks/useNav"
import gon3 from '../img/gon-03.png'

const Contact = () => {
  const contactRef = useNav("Contact")

  return (
    <section ref={contactRef} id="contactSection">
      <h2>Contact</h2>

      <div className="row pt-3">
        <div className="col-lg-4 px-5" data-aos="fade-right">
          <a href="https://github.com/garaos" className="text-reset" target="_blank" rel="noopener noreferrer">  <img src={gon3} className="img-fluid goncont" alt="Gon" /></a>
        </div>
        <div className="col-lg-8 pt-lg-0 content" data-aos="fade-left">
          <div className="row pt-5">
            <div className="col-lg-6 px-5">
              <ul>
                <li><a href="mailto:gonzalo@araos.org" className="text-reset"><i className="fa-solid fa-envelope mailcont"></i></a></li>
              </ul>
            </div>
            <div className="col-lg-6 px-5">
              <ul>
                <li><a href="https://github.com/garaos" className="text-reset" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github gitcont"></i></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact