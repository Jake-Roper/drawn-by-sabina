import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
        <br></br>
        <ul className="icons">
        <li><a href="https://twitter.com/drawnbysabina" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="https://www.facebook.com/drawnbysabina/" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="https://www.instagram.com/drawnbysabina/" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
