import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {

    // const navItems= <>
    //     <li><Link to='/'>Home</Link></li>
    //     <li><Link>Services</Link></li>
    //     <li><Link>Experience</Link></li>
    //     <li><Link>Portfolio</Link></li>
    //     <li><Link>Testimonial</Link></li>
    // </>


    return (
      <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Sharif</div>
      
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
    );
};

export default Navbar;