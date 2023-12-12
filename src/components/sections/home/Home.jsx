import './Home.sass'
import Profile from '../../../styles/img/Profile.png'
import LinkContact from '../../linkContact/LinkContact'
import GitHub from '../../../styles/img/contacts/GitHub.png'
import Whatsapp from '../../../styles/img/contacts/Whatsapp.png'
import Linkedin from '../../../styles/img/contacts/Linkedin.png'

export default function Home() {
  return (
    <div className="home" id="homeSection">
      <div className="contacts_images">
        <LinkContact
          href="https://www.linkedin.com/in/kevin-ramlow-028509281/"
          src={Linkedin}
          alt="Linkedin"
        />
        <LinkContact
          href="https://github.com/KevinRamlow"
          src={GitHub}
          alt="GitHub"
        />
        <LinkContact
          href="https://contate.me/samkevindev"
          src={Whatsapp}
          alt="Whatsapp"
        />
      </div>
      <div className="text">
        <p>Olá, meu nome é</p>
        <div className="profile-section">
          <h1>Sam Kevin</h1>
          <img src={Profile} alt="Meu perfil"></img>
        </div>
        <span>
          <p>
            Sou um desenvolvedor em crescimento, apaixonado por códigos e
            desafios!<br/>  Convido você a explorar meu universo de desenvolvimento no
            meu portfolio.
          </p>
        </span>
      </div>
    </div>
  )
}
