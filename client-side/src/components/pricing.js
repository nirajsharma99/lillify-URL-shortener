import Features from './features';
import { Switch } from 'antd';
import { useState } from 'react';
import '../../node_modules/antd/dist/antd.css';

function Pricing(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      ref={props.refProp}
      className=" mx-auto w-75"
      style={{ marginBottom: '3rem' }}
    >
      <div className="text-center text-dark mb-5">
        <p className="apply-font mb-3" style={{ fontSize: '3rem' }}>
          lil.fy Plans
        </p>
        <span
          className={
            'font-weight-bold ' + (toggle ? 'text-secondary ' : ' text-primary')
          }
        >
          Pay monthly{'  '}
        </span>
        <Switch
          size="large"
          onClick={() => setToggle(!toggle)}
          checked={toggle}
          style={{ backgroundColor: '#15F4EE' }}
        />
        <span
          className={
            'font-weight-bold ' +
            (!toggle ? 'text-secondary ' : ' text-primary')
          }
        >
          {'  '}
          Pay yearly(Save upto 33%)
        </span>
      </div>
      <div className="d-flex flex-lg-row flex-column w-100">
        <div className="col-lg-4 price-effects mr-2 p-3 mb-3">
          <h3>Free</h3>
          <p className="text-secondary">
            Good for the beginning <br />
            And temporary use.
          </p>
          <div className="text-center mb-3">
            <span className="text-center font-weight-bold text-info h2">
              ₹ 0.00
            </span>
          </div>
          <Features scheme="free" />
        </div>
        <div className="col-lg-4 price-effects mr-2 p-3 mb-3">
          <h3>Premium</h3>
          <p className="text-secondary">
            Recommended for
            <br />
            freelancers, bloggers, marketers..
          </p>
          <div className="text-center mb-3">
            <span className="text-center text-warning font-weight-bold h2">
              {!toggle ? '₹ 2999.00' : '₹ 24000.00'}
            </span>
            <span>{!toggle ? '/month ' : '/year'}</span>
          </div>
          <Features scheme="premium" />
        </div>
        <div className="col-lg-4 price-effects p-3 mb-3">
          <h3>Enterprise</h3>
          <p className="text-secondary">
            Recommended for
            <br />
            large agencies, teams, companies...
          </p>
          <div className="text-center mb-3">
            <span
              className="text-center font-weight-bold h2"
              style={{ color: '#000133' }}
            >
              {!toggle ? '₹ 7999.00' : '₹ 63999.00'}
            </span>
            <span>{!toggle ? '/month ' : '/year'}</span>
          </div>
          <Features scheme="enterprise" />
        </div>
      </div>
    </div>
  );
}
export default Pricing;
