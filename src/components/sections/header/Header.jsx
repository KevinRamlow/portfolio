import ScrollButton from '../../ScrollButton'

import './Header.sass'

function Header() {
  return (
    <div className="header">
      <ScrollButton sectionId="homeSection" className="SK_dev">
        SK Dev
      </ScrollButton>

      <div className="header_btns">
        <ScrollButton sectionId="homeSection">Home</ScrollButton>
        <ScrollButton sectionId="aboutSection">Sobre</ScrollButton>
        <ScrollButton sectionId="projectsSection">Projetos</ScrollButton>
        <ScrollButton sectionId="contactsSection">Contatos</ScrollButton>
      </div>
    </div>
  )
}

export default Header
