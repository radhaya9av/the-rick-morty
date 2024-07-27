import { useState, useEffect } from 'react'
import Cards from './components/Cards/Cards'
import Filters from './components/Filters/Filter'

function App() {
  let [pageNumber, updatePageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return(
    <div className="App">
      <div className="text-center ubuntu my-4">
        The Rick & Morty
      </div>
      
      <div className="container text-center">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
