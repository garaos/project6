import { useNav } from "../hooks/useNav"
import gon from '../img/gon-01.png'

const Home = () => {
  const homeRef = useNav("Home")

  return (
    <section ref={homeRef} id="homeSection">
      <img src={gon} alt="gon" className="pt-5 gon" />
      <h2>Gonzalo Araos</h2>
      <p>Hi,I’m Electronic Civil Engineer And Full Stack Web Developer Jr.</p>
    </section>
  )
}

export default Home