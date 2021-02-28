import Tab from './Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
function TabNav(props) {
  return (
    <div className="d-flex flex-lg-row flex-column w-75 mx-auto position-relative setbackground">
      <div className="d-flex flex-column w-100 pt-4 pl-4 pr-0 col-lg-3">
        {props.tabs.map((tab) => {
          const active = tab === props.selected ? ' active' : ' ';
          return (
            <li
              className={
                'li-options w-100' + (active === ' ' ? ' ' : ' tile-active')
              }
              key={tab}
            >
              <a
                className={
                  active + ' text-decoration-none w-100 apply-font-2' + ' pl-2'
                }
                role="button"
                onClick={() => props.setSelected(tab)}
              >
                {tab}
              </a>
            </li>
          );
        })}
      </div>
      <div className="d-flex flex-column w-100 py-3 px-5 col-lg-9 info-box">
        <Tab isSelected={props.selected === 'What is lillify?'}>
          <h1 className="font-weight-bold apply-font-2">
            Lillify - the new standard for link analytics
          </h1>
          <p className="apply-font-3">
            Don't let the links limit you. Make your links support your brand.
            The new standard of shortening and managing links in an intuitive
            and simple way. The most advanced and useful options in one place.
            Why use several applications when you can have everything in one
            place.
          </p>
        </Tab>
        <Tab isSelected={props.selected === 'Why lillify?'}>
          <h1 className="font-weight-bold apply-font-2">
            World-class link management
          </h1>
          <p className="apply-font-3">
            Lillify helps businesses shine by transforming their links into
            powerful tools for marketers and customer support teams.
          </p>
        </Tab>
        <Tab isSelected={props.selected === 'Lil.fy URL-Shortener'}>
          <h1 className="font-weight-bold apply-font-2">
            Lil.fy - URL Shortener
          </h1>
          <p className="apply-font-3">
            User friendly URL Shortener & Link Management Platform with Branded
            URLs and many features and detailed real-time analytics. Our short
            links know how, when and where someone clicked or touched your
            shortened links and even more.
          </p>
          <p className="apply-font-3">
            Long URL
            https://www.google.com/search?rlz=1C1CHBF_enIN923IN923&ei=vZcwYKo2yYD1A_jvnrAE&q=url+shortener&oq=url+shh&gs_lcp=Cgdnd
            <br />
            Short/tiny URL <span className="text-info">lil.fy/hosting</span>
          </p>
        </Tab>
        <Tab isSelected={props.selected === 'Branded URLs'}>
          <h1 className="font-weight-bold apply-font-2">
            Custom domains - Branded URLs
          </h1>
          <p className="apply-font-3">
            Set up your own domain and create branded short links to increase
            the conversion and trust of your users and clients. How it's work?
            Branded custom domain replace the domain "cutt.ly" in your short
            links with your own branded domain.
          </p>
          <p className="apply-font-3">
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon className="text-info" icon={faCheck} />
                &nbsp;Branded URLs
              </li>
              <li>
                <FontAwesomeIcon className="text-info" icon={faCheck} />
                &nbsp;Custom domains
              </li>
              <li>
                <FontAwesomeIcon className="text-info" icon={faCheck} />
                &nbsp;More conversion with branded links
              </li>
              <li>
                <FontAwesomeIcon className="text-info" icon={faCheck} />
                &nbsp;Analytics for branded links
              </li>
              <li>
                <FontAwesomeIcon className="text-info" icon={faCheck} />
                &nbsp;Setup your domain, wait for approval and use it
              </li>
            </ul>
          </p>
        </Tab>
      </div>
    </div>
  );
}
export default TabNav;
