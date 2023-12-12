import PropTypes from 'prop-types'

export default function ScrollButton({ sectionId, className, children }) {
  const scrollToSection = () => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button className={className} onClick={scrollToSection}>
      {children}
    </button>
  )
}

ScrollButton.propTypes = {
  sectionId: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
