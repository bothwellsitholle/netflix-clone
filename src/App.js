import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Nav />
      {/* Navbar */}
      <Banner />
      <Row
        title="NEFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row
        title="Action Movies"
        fetchUrl={request.fetchActionMovies}
        isLargeRow
      />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row
        title="Romance Movies"
        fetchUrl={request.fetchRomanceMovies}
        isLargeRow
      />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
