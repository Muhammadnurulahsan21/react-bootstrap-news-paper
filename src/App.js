import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, FormControl, InputGroup, Row, Spinner } from "react-bootstrap";
import "./App.css";
import News from "./Components/News/News";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-09-02&sortBy=publishedAt&apiKey=18230367b0544f7aa49da4e4f12b162f"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App">
      <InputGroup className="mb-3 searchbar">
        <FormControl
          placeholder="Search Your News"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-info" id="button-addon2">
          Search
        </Button>
      </InputGroup>
      {news.length === 0 ? (
        <Spinner animation="border" variant="info" />
      ) : (
        <Row xs={1} md={2} className="g-4">
          {news.map((nw) => (
            <News news={nw}></News>
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;
