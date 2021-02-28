import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div>
      <div
        className="p-4"
        style={{ boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.8)' }}
      >
        <div
          className="d-flex flex-md-row flex-column align-items-stretch w-75 mx-auto"
          style={{
            height: '50%',
            bottom: 0,
          }}
        >
          <div className="col-md-3 p-4 ">
            <p className=" h5 footer-heading text-center mb-3">URL Shortener</p>
            <ul className="list-unstyled text-center text-secondary">
              <li>
                <a href="/" className="text-decoration-none footer-links">
                  URL Shortener
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none footer-links">
                  Available features
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 p-4 ">
            <p className=" h5 footer-heading text-center mb-3">
              Link Management
            </p>
            <ul className="list-unstyled text-center text-secondary">
              <li>
                <a href="/" className="text-decoration-none footer-links">
                  API
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none footer-links">
                  Check url
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none footer-links">
                  Branded URLs
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none footer-links">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 p-4">
            <p className=" h5 footer-heading text-center mb-3">Lillify</p>
            <ul className="list-unstyled text-center text-secondary">
              <li>
                <a href="/" className="text-decoration-none footer-links">
                  About lillify
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none footer-links">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none footer-links">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none footer-links">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none footer-links">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none footer-links">
                  Developers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 p-2">
            <h1 className="apply-font mb-4" style={{ fontSize: '3.2rem' }}>
              lillify
            </h1>
            <p className="text-secondary">
              &#169; Lillify | URL Shortener and Analytics
            </p>
            <div className="d-flex flex-row">
              <a href="/">
                <FontAwesomeIcon
                  className="p-2  display-4"
                  style={{ color: '#4267B2' }}
                  icon={faFacebook}
                />
              </a>
              <a href="/">
                <FontAwesomeIcon
                  className="p-2  display-4"
                  style={{ color: '#1DA1F2' }}
                  icon={faTwitter}
                />
              </a>
              <a href="/">
                <FontAwesomeIcon
                  className="p-2  display-4"
                  style={{ color: '#8a3ab9' }}
                  icon={faInstagram}
                />
              </a>
              <a href="/">
                <FontAwesomeIcon
                  className="p-2  display-4"
                  style={{ color: '#0e76a8' }}
                  icon={faLinkedinIn}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <span
          className="text-secondary font-weight-bold"
          style={{ lineHeight: '50px' }}
        >
          &#169;2021 lil.fy | Made by Niraj Sharma
        </span>
      </div>
    </div>
  );
}
export default Footer;
