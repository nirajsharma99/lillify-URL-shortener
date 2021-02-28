import './App.css';
import Animation from './components/particles';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Shortener from './components/shortener';
import SiteInfo from './components/siteinfo';
import Footer from './components/footer';
import Pricing from './components/pricing';
import Analytics from './components/analytics';
function App() {
  return (
    <div className="">
      <Animation />
      <header className="App-header">
        <Header />
      </header>
      <Shortener />
      <SiteInfo />
      <Analytics />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
