import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-solid fa-compass"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Tobin Postma</h1>
        <p>A senior-level executive with 15+ years of public policy, sustainability and strategic communications experience in government and the steel and mining industry who is in search of kindred spirits who are working across the world to solve complex problems, who believe in transforming – not just adapting – and who need some extra horse power in their corner to get unstuck and break through whatever obstacles they are facing.</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('education')
            }}
          >
            Education+
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
