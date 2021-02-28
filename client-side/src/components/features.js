import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
function Features(props) {
  return (
    <div>
      <div>
        <span className="text-secondary">Branded domains</span>
        <span className="float-right">
          {props.scheme === 'free'
            ? 'up to 3'
            : props.scheme === 'premium'
            ? 'up to 10'
            : 'up to 99'}
        </span>
      </div>
      <div>
        <span className="text-secondary">Links/redirects</span>
        <span className="float-right">
          {props.scheme === 'free' ? (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          ) : props.scheme === 'premium' ? (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          ) : (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          )}
        </span>
      </div>
      <div>
        <span className="text-secondary">Analytics of redirects</span>
        <span className="float-right">
          {props.scheme === 'free' ? (
            <FontAwesomeIcon icon={faTimes} className="text-danger" />
          ) : props.scheme === 'premium' ? (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          ) : (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          )}
        </span>
      </div>
      <div>
        <span className="text-secondary">Link analytics</span>
        <span className="float-right">
          {props.scheme === 'free' ? (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          ) : props.scheme === 'premium' ? (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          ) : (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          )}
        </span>
      </div>
      <div>
        <span className="text-secondary">Changing redirect URL</span>
        <span className="float-right">
          {props.scheme === 'free' ? (
            <FontAwesomeIcon icon={faTimes} className="text-danger" />
          ) : props.scheme === 'premium' ? (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          ) : (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          )}
        </span>
      </div>
      <div>
        <span className="text-secondary">Customised URL</span>
        <span className="float-right">
          {props.scheme === 'free' ? (
            <FontAwesomeIcon icon={faTimes} className="text-danger" />
          ) : props.scheme === 'premium' ? (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          ) : (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          )}
        </span>
      </div>
      <div>
        <span className="text-secondary">API access</span>
        <span className="float-right">
          {props.scheme === 'free' ? (
            <FontAwesomeIcon icon={faTimes} className="text-danger" />
          ) : props.scheme === 'premium' ? (
            <span>Unlimited</span>
          ) : (
            <span>Unlimited</span>
          )}
        </span>
      </div>
      <div>
        <span className="text-secondary">Link history</span>
        <span className="float-right">
          {props.scheme === 'free' ? (
            <FontAwesomeIcon icon={faTimes} className="text-danger" />
          ) : props.scheme === 'premium' ? (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          ) : (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          )}
        </span>
      </div>
      <div>
        <span className="text-secondary">Expert's support</span>
        <span className="float-right">
          {props.scheme === 'free' ? (
            <FontAwesomeIcon icon={faTimes} className="text-danger" />
          ) : props.scheme === 'premium' ? (
            <FontAwesomeIcon icon={faTimes} className="text-danger" />
          ) : (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          )}
        </span>
      </div>
      <div>
        <span className="text-secondary">Bulk link import</span>
        <span className="float-right">
          {props.scheme === 'free' ? (
            <FontAwesomeIcon icon={faTimes} className="text-danger" />
          ) : props.scheme === 'premium' ? (
            <FontAwesomeIcon icon={faTimes} className="text-danger" />
          ) : (
            <FontAwesomeIcon icon={faCheck} className="text-success" />
          )}
        </span>
      </div>
      <div className="text-center">
        {props.scheme === 'free' ? (
          <button className="border-0 bg-info text-light price-button">
            Get Started
          </button>
        ) : props.scheme === 'premium' ? (
          <button className="border-0 bg-warning text-light price-button">
            Get Started
          </button>
        ) : (
          <button className="border-0 bg-dark text-light price-button">
            Get Started
          </button>
        )}
      </div>
    </div>
  );
}
export default Features;
