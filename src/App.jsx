import Cards from './components/Cards/Cards'
import Filters from './components/Filters/Filters'

function App() {
  return(
    <div className="App">
      <div className="text-center ubuntu my-4">
        The Rick & Morty
      </div>
      
      <div class="container text-center">
        <div class="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
