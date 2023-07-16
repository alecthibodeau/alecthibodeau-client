import { Link } from 'react-router-dom';

/* Config */
import config from '../../config.json';

/* Components */
import MailToLink from '../MailToLink';

/* Images */
import selfPortrait from '../../assets/images/main/alec-thibodeau-self-portrait.jpg';

function AboutScreen() {
  return (
    <div className="max-width-lg-breakpoint">
      <img className="self-portrait" src={selfPortrait} alt="Alec Thibodeau self portrait" />
      <div>
        <p>
          Alec Thibodeau is a visual artist whose work is rooted in drawing and printmaking.
          This site serves as a portfolio for Alec's earlier pieces and projects.
          Visit his <a href="https://huetown.com">Huetown</a> shop to find social media links,
          an email list sign-up, additional contact information and items for sale.
          Alec also <a href="https://alect.me">writes code</a>.
          He's currently exploring ways to combine coding and visual expression.
        </p>
        <p>
          Alec's <Link to={`/${config.epochTravelersRoute}`}><span className="fst-italic">Epoch Travelers</span></Link>
          is a large-scale work in marble permanently installed at an interior site in New York City
          and commissioned by the NYC Department of Education and the NYC School Construction Authority
          Public Art for Public Schools Program in collaboration with the
          <a href="https://www1.nyc.gov/site/dclapercentforart/projects/projects-detail.page?recordID=241">NYC
          Department of Cultural Affairs Percent for Art Program</a>.
          Alec is also the recipient of a project grant from the LEF Foundation to
          print <Link to={`/${config.noneyRoute}`}>Noney</Link>, an experimental currency.
          A <Link to={`/${config.sunshineSunshineRoute}`}>mural</Link> he painted is on an interior wall at a vegan ice cream shop.
        </p>
        <p>
          Galleries that have shown Alec's work include Tomato House (New York City),
          Secret Project Robot (New York City), Spudnik Press Cooperative (Chicago),
          Cade Tompkins Projects (Providence, RI), the University of Tennessee's Ewing Gallery (Knoxville),
          Boston Center for the Arts Mills Gallery and the University of Alabama at Birmingham's Visual Arts Gallery.
        </p>
        <p>
          Contact: <MailToLink label="alec@alecthibodeau.com" mailTo="mailto:alec@alecthibodeau.com" />
        </p>
        <p>
          This site is built with React. <a href="https://github.com/alecthibodeau/art-portfolio">See the code</a>.
        </p>
      </div>
    </div>
  );
}

export default AboutScreen;
