import logo from '../tuzki.png';
import { useState } from 'react';
function Header() {
  const [option, setOptions] = useState(false);
  return (
    <div className="px-4" style={{ height: '15vh' }}>
      <div className="d-flex flex-sm-row flex-column w-100 mr-5">
        <div className="d-flex flex-row mb-4">
          <img
            src={logo}
            className="m-0 p-0 mt-auto mb-auto"
            style={{ width: '16vh', height: '10vh' }}
          />
          <p
            className="apply-font ml-n3 mt-auto mb-auto"
            style={{ fontSize: '3.2rem' }}
          >
            lillify
          </p>
          <div className="d-flex flex-column">
            <div
              className={
                'menu-btn ' +
                (option ? 'open' : ' ') +
                ' dropdown mt-5 mb-5 justify-content-end'
              }
              onClick={() => setOptions(!option)}
            >
              <div className="menu-btn-burger "></div>
            </div>
            <div className="d-flex flex-column ">
              <div
                className="menu rounded-lg position-absolute"
                hidden={!option}
                style={{ background: 'rgba(0,0,0,0.2)' }}
              >
                <a className="dropdown-item links" href="#">
                  URL Shortener
                </a>
                <a className="dropdown-item links" href="#">
                  Available features
                </a>
                <a className="dropdown-item links" href="#">
                  API
                </a>
                <a className="dropdown-item links" href="#">
                  PRO features
                </a>
                <a className="dropdown-item links" href="#">
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-sm-end justify-content-center w-100 ">
          <button
            className="mt-auto mb-auto rounded-lg mr-4 border-0 text-light shadow-lg px-4 py-1 login-button"
            style={{ fontSize: '1.2rem' }}
          >
            Login
          </button>
          <button
            className="mt-auto mb-auto rounded-lg mr-4 border-0 bg-primary text-light shadow-lg px-4 py-1"
            style={{ fontSize: '1.2rem' }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
