import PropTypes from 'prop-types'

import './LinkContact.sass'

export default function LinkContact({ href, src, alt }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  )
}

LinkContact.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}
