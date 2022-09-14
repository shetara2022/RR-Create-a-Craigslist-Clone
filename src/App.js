// Import data
import { Search } from './searchbar'
import { Gallery } from './gallery'
import { postings } from './postings'

// Import components
import './App.css';

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Search />
        <Gallery postings={postings} />

      </div>
    </div>
  );
}

export default App;
