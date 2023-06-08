import logo from '../logo.png';
import { Link } from 'react-router-dom';

export function TopBar () {
    
    return( 
               
        <header className="App-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          <h1>PHOTO DASH</h1>
          <ul>
            <li><Link to="/liked">LIKED</Link></li>
            <li><Link to="/search">SEARCH</Link></li>
          </ul>
        </header>
        
        
        
    )
}