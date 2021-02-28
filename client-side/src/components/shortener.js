import Background from '../background/7.jpg';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Pricing from './pricing';

function Shortener() {
  const [url, setUrl] = useState('');
  const [errors, setErrors] = useState({ error: false, throw: '' });
  const [info, setInfo] = useState({ hash: '', date: '', status: '' });
  const [counter, setCounter] = useState(0);

  /*const plansRef = useRef(null);
  const executeScroll = () => plansRef.current.scrollIntoView();*/

  var diffInMilliSeconds =
    86400 - Math.abs(new Date() - new Date(info.date)) / 1000;
  //console.log(diffInMilliSeconds);
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;
  //console.log('calculated days', days);

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;
  //console.log('calculated hours', hours);

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;
  //console.log('minutes', minutes);
  diffInMilliSeconds = Math.floor(diffInMilliSeconds);
  //
  const numbersToAddZeroTo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let timer = null;
  useEffect(() => {
    timer = setInterval(() => {
      setCounter(diffInMilliSeconds - 1);
    }, 1000);
    if (hours > 24) {
      clearInterval(timer);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    var valid = pattern.test(url);
    if (valid) {
      //console.log('ok');
      var data = { url: url };
      axios
        .post('http://localhost:5000/api/shorten', data)
        .then((res) => {
          //console.log(res.data);
          setInfo({
            hash: res.data.hash,
            date: res.data.date,
            status: res.data.statusTxt,
          });
          //console.log(info);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setErrors({ error: true, throw: 'Please enter a valid link !' });
    }
  };

  return (
    <div className="shortener-box mx-auto shadow-lg">
      <div
        className=" shortener-background border border-info w-100"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="mt-5 mb-5 mx-auto" style={{ width: '95%' }}>
          <div className="d-inline-block mx-auto" style={{ width: '100%' }}>
            <form>
              <TextField
                name="link"
                error={errors.error}
                helperText={errors.error ? errors.throw : null}
                value={url}
                placeholder="Enter link to shorten!"
                id="filled-basic"
                label="Enter Link"
                variant="outlined"
                className="col-lg-9 ml-lg-5 "
                style={{ width: '100%', background: 'white' }}
                onChange={(event) => {
                  setUrl(event.target.value);
                  setErrors({ error: false, throw: '' });
                }}
              />
              <button
                onClick={handleSubmit}
                className="border-0 text-light col-lg-2 rounded py-3 px-3 ml-lg-3 mt-lg-0 mt-2  text-center"
                style={{ fontSize: '1.2rem', background: '#2acfcf' }}
              >
                Shorten it!
              </button>
            </form>
          </div>

          <div className="mt-5" hidden={info.hash === ''}>
            <div
              className="w-lg-75 mx-auto bg-light p-4 "
              style={{ borderRadius: '30px' }}
              hidden={hours < 24}
            >
              <h2 className="text-danger w-100 text-center font-weight-bold">
                Validity for this link has been expired!
              </h2>
            </div>
            <div
              className="w-lg-75 mx-auto bg-light p-4 "
              style={{ borderRadius: '30px' }}
              hidden={hours > 24}
            >
              <p
                className="text-center w-100 text-danger font-weight-bold"
                hidden={info.status != 'old'}
              >
                Note: The link for this url has already been generated
              </p>
              <div className="d-flex flex-lg-row flex-column">
                <input
                  type="text"
                  className="w-100 ml-lg-4 col-lg-9 shortened-url"
                  defaultValue={info.hash ? 'http://lil.fy/' + info.hash : ''}
                  readOnly={true}
                  style={{ backgroundColor: '#f0fff0', fontSize: '1.5rem' }}
                />
                <CopyToClipboard text={'http://lil.fy/' + info.hash}>
                  <button
                    type="button"
                    className="ml-lg-3 mt-lg-0 mt-2  col-lg-2 copy-button text-center"
                  >
                    Copy
                  </button>
                </CopyToClipboard>
              </div>
              <div className="d-flex flex-lg-row flex-column">
                <div
                  className="d-flex flex-column justify-content-center col-lg-6"
                  style={{ boxShadow: '2px 0px 0px 0px rgba(0,0,0,0.2)' }}
                >
                  <p
                    className="text-dark mb-0 mt-2 px-3 py-1"
                    style={{ backgroundColor: '#E0FFFF', borderRadius: '20px' }}
                  >
                    Note: Sign up to extend the validity
                  </p>
                  <div
                    className="text-light text-light mx-auto px-0 p-md-3 my-4 "
                    style={{
                      borderRadius: '15px',
                      backgroundColor: 'red',
                      fontSize: '4rem',
                    }}
                  >
                    {numbersToAddZeroTo.includes(hours)
                      ? `0${hours}`
                      : `${hours}`}
                    :
                    {numbersToAddZeroTo.includes(minutes)
                      ? `0${minutes}`
                      : `${minutes}`}
                    :
                    {numbersToAddZeroTo.includes(diffInMilliSeconds)
                      ? `0${diffInMilliSeconds}`
                      : `${diffInMilliSeconds}`}
                  </div>
                </div>
                <div className="col-lg-6 m-auto d-flex justify-content-center align-items-center flex-column">
                  <button
                    className="border-0 bg-success text-light text-center "
                    style={{
                      borderRadius: '40px',
                      padding: '1rem 5rem',
                      fontWeight: '500',
                    }}
                  >
                    Go pro
                  </button>
                  <hr className="w-75 bg-dark" />
                  <button
                    className="apply-font border-0"
                    style={{ backgroundColor: 'transparent', fontSize: '2rem' }}
                  >
                    lil.fy Plans
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Shortener;
