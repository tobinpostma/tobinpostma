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
          <span className="image main center">
            <StaticImage src="../images/tobin-headshot.jpg" alt="Tobin Postma headshot" height={450} imgClassName="image" objectFit="scale-down" layout="constrained" />
          </span>
          <p>After 15+ years working in senior roles in local government with the City of Vancouver and at ArcelorMittal, a multinational steel and mining organization, I took a leap year in 2021 to give myself the freedom to learn how to listen to, and ultimately lead, with my heart.</p>
          <p>I discovered that my heart beats strongest when I am able to help others who want to have a positive impact on this earth and her guests.</p>
          <p>“It’s never been done before”</p>
          <p>“We don’t know where to begin”</p>
          <p>“We don’t know what to do now”</p>
          <p>These are the kind of problem statements that I am compelled to run towards. Whether you need a running partner or a thought partner I will bring my energy and experience to assist you on your journey as you tackle our biggest intractable problems.</p>
          <p>I am a solutions-driven, creative problem solver who brings joyful energy into everything I do – like a breath of fresh air, invigorating your organization. Just as a change of scenery can provide greatly-needed perspective, I help identify leverage points and new ways to approach points of friction.</p>
          <p>I thrive in emergent situations especially those characterized by unpredictability and ambiguity – providing a calm, steady and pragmatic hands-on approach.</p>
          <p>I understand how to bridge bottom-up solutions with policy design, moving seamlessly between the shop floor and the top floor.</p>
          <p>I am a locksmith, silobuster and a story teller.</p>
          <p>I am a global explorer, adept at navigating organizations, personalities, and challenges of all types and sizes and I am eager to join you on your journey towards impactful change.</p>
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
          <h3><a href="https://vancouver.ca/" target="_blank" rel="noreferrer">City of Vancouver</a> 2014-2021</h3>
          <h4>Director of Intergovernmental Relations and Strategic Partnerships:</h4>
          <ul>
            <li>Championed the City’s overall approach to intergovernmental relations, managing a team of four staff and representing the City’s position and interests by communicating, building relationships and negotiating with senior levels of government, such as regional, provincial, federal and First Nations on key City and Council priorities including affordable housing, transportation, the overdose crisis, climate resilience and Reconciliation</li>
            <li>Led advocacy work for the City’s ongoing COVID-19 response and recovery efforts, engaging all levels of government for direct financial support resulting in $82 million for the acquisition of affordable housing, more than $39 million in operating funding support, $20 million for natural infrastructure development and over $8 million to provide services to vulnerable populations</li>
          </ul>
          <h4>Director of Strategic Initiatives:</h4>
          <ul>
            <li>Provided cross-organizational leadership for the City’s efforts to manage street-level impacts of systemic social challenges, including poverty and the opioid crisis, as well as forming strategic partnerships tasked with implementing policies, pilots and strategies that addressed the root causes of these challenges</li>
            <li>Coordinated an interdepartmental operations group that worked to mitigate the downstream impacts of homelessness amongst Canada’s most marginalized and vulnerable population, including safely managing four illegal tent cities and numerous encampments across the city</li>
            <li>Ran a multi-million dollar community impact fund created through a partnership between three levels of government that supported solutions to economic, social and health and safety issues in Vancouver’s Downtown Eastside (DTES)</li>
          </ul>
          <h4>Strategic Issues Manager:</h4>
          <ul>
            <li>Led the growth of a safe, legal, low-barrier and peer-run vending economy in Vancouver’s DTES from one day per week to seven days per week, as well as managing a Street Vending Project Team which included Police, Fire, Engineering, Social Policy and Housing Outreach staff</li>
            <li>Primary contact for all strategic communications with responsibility for anticipatory issues management, media training and crisis communications as well as managing a team of three staff who responded to 10-15 media requests per day and were responsible for media monitoring, video production and organizing media events</li>
            <li>Strategic communications advisor to members of the City’s Corporate Leadership Team, supporting an integrated approach to all communications within the City on topics such as real estate, human resources, sport hosting, emergency management, procurement and financial planning</li>
          </ul>
          <h3><a href="https://corporate.arcelormittal.com/" target="_blank" rel="noreferrer">ArcelorMittal</a> 2008-2013</h3>
          <h4>Head of Media Relations:</h4>
          <ul>
            <li>Acted as an official spokesperson for ArcelorMittal; responsible for leading media communications, including press releases, press trips and press conferences while managing a network of over 40 communicators tasked with protecting and promoting ArcelorMittal’s global brand</li>
            <li>Managed financial calendar disclosures, including quarterly earnings and AGMs, with the Investor Relations team</li>
            <li>Oversaw external and internal communications for ArcelorMittal Mining, as well as coordinating local communications with mine sites in Bosnia, Brazil, Canada, Kazakhstan, Liberia, Mexico and Russia to ensure corporate messages were aligned and best practices adhered to</li>
            <li>Led social media engagement across the company creating and implementing its first Social Media Policy and guidebook for the unified development and management of local social media channels</li>
            <li>Managed ArcelorMittal’s media engagement strategy for the London 2012 Olympic Games – an initiative which was honoured on multiple shortlists, including the CIPR Excellence Awards and SABRE Awards</li>
          </ul>
          <h4>Corporate Responsibility (CR) Specialist:</h4>
          <ul>
            <li>Developed and implemented a company-wide community engagement strategy, benchmarked against international best practice standards (IFC, EBRD, ICMM) as well as created manuals and guidance documents and facilitated workshops held at sites for senior managers across Europe, and in Kazakhstan, Liberia, Russia and Ukraine</li>
            <li>Project manager for the global CR report that required liaising with key stakeholders and developing a reporting network that also fed into index questionnaires such as Global Reporting Index and Dow Jones Sustainability Index – where ArcelorMittal was a sector leader</li>
            <li>Created a CR Reporting template and guidance document for local CR reports that resulted in 14 country reports within two years, each with their own key performance indicators</li>
            <li>Led the implementation of the group CR strategy and KPIs through the creation of a company-wide employee engagement campaign that was available in 11 languages</li>
            <li>Supervised a network of more than 30 local CR coordinators to manage risk, build capacity and strengthen knowledge of CR issues through the development of webinars and collaboration with ArcelorMittal’s Corporate University</li>
          </ul>
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
