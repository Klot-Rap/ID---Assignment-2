
import './App.css';
import NewsList from './components/NewsList';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="un__response">
        <iframe className="un__vid"
          width="560" height="315" 
          src="https://www.youtube.com/embed/Irxikwio1Mo" title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>

        <p>
          <h1>UN Response to COVID-19</h1>
          The COVID-19 pandemic is more than a health crisis; it is an economic crisis,
          a humanitarian crisis, a security crisis, and a human rights crisis. 
          This crisis has highlighted severe fragilities and inequalities within and among nations. 
          Coming out of this crisis will require a whole-of-society, 
          whole-of-government and whole-of-the-world approach driven by compassion and solidarity.
        </p>
      </div>
      

      <NewsList/>
      {/*Here we call the News List, which pass in the props(parameter) to the NewsItem as data, to be filtered and designed as a newsItem for each article which call the func*/}

      <Footer />
    </div>
  );
}

export default App;
