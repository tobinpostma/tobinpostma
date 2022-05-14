import PropTypes from 'prop-types'
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <StaticImage src="../images/tobin-headshot.jpg" alt="Tobin Postma headshot" height={450} imgClassName="image" objectFit="scale-down" layout="constrained" />
          </span>
          <p>After 15+ years working in a variety of senior roles in local government and the steel industry, I took a leap year in 2021 to give myself the freedom to learn how to listen to, and ultimately lead, with my heart.</p>
          <p>I discovered that my heart beats strongest when I am able to help others who want to have a positive impact on this earth and her guests.</p>
          <p>“It’s never been done before,” “We don’t know where to begin,” and “We don’t know what to do now”. These are the problem statements that I love to run towards and whether you need a running partner or a thought partner I will bring my energy and experience to assist you on your journey.</p>
          <p>I am a solutions-oriented, creative problem solver who brings joyful energy into everything I do – like a breath of fresh air, invigorating your organization.</p>
          <p>I thrive in emergent situations – those characterized by unpredictability and a lack of control – providing a calm, steady and pragmatic hands-on approach.</p>
          <p>I can move seamlessly between the shop floor and the top floor and love to roll up my sleeves. I understand how to bridge bottom-up solutions with policy design, relying on my instincts to spot diamonds in the rough.</p>
          <p>I am a locksmith, silobuster and a story teller.</p>
          <p>I am a global explorer with a thick book of maps and tales who knows how to navigate organizations and challenges of all types and sizes.</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>I have an experimental mindset complemented by a Swiss army-like set of tools that I’ve absorbed over my 15+ years as a senior strategic issues, sustainability (environmental and social) and public policy expert in the public and private sectors in developed and developing countries.</p>
          <p>A summary of my recent work can be found below (you can find a full breakdown of my work <a href="https://www.linkedin.com/in/tobin-postma-33018118/" target="_blank" rel="noreferrer">here</a>):</p>
          {close}
        </article>

        <article
          id="education"
          className={`${this.props.article === 'education' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Education+</h2>
          <p>MBA, Corporate Social Responsibility<br /><a href="https://www.nottingham.ac.uk/business/who-we-are/centres-and-institutes/iccsr/index.aspx" target="_blank" rel="noreferrer">International Centre for Corporate Social Responsibility</a>, Nottingham University Business School</p>
          <p>BA, Communication<br /><a href="https://www.sfu.ca/communication.html" target="_blank" rel="noreferrer">School of Communication</a>, Simon Fraser University</p>
          <p>Executive Leadership Program<br /><a href="https://www.thnk.org/" target="_blank" rel="noreferrer">THNK School of Creative Leadership</a></p>
          <p>Specialization in Futures Thinking<br /><a href="https://www.iftf.org/home/" target="_blank" rel="noreferrer">Institute for the Future</a></p>
          <p>Certification in Public Participation<br /><a href="https://www.iap2.org/mpage/Home" target="_blank" rel="noreferrer">International Association for Public Participation</a></p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
          <li>
              <a
                href="mailto:info@tobinpostma.com"
                className="icon fa-solid fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tobinpostma/tobinpostma"
                className="icon fa-brands fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
