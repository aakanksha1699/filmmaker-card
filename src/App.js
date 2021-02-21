import './App.css';
import React,{Component} from 'react';
import Info from './Info';

class App extends Component{
  render(){
    return(
            <div className="Main">
              <div className="picture"></div>
      
              <div className="title">
                <div className="logo">movies</div>
                <div className="portal">Filmmaker Portal</div>
              </div>
              <div className="set">Set up your payment.</div>
              <div className="st"> Your Filmmaker membership starts as soon as you set up payment.</div>

              <button type="submit" id="card">Credit or Debit Card</button>
              <svg id="arr" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.99997 0L0.589966 1.41L5.16997 6L0.589966 10.59L1.99997 12L7.99997 6L1.99997 0Z" fill="#BDBDBD"/>
              </svg>

              <div className="terms"><Info></Info></div>
               <div className="lic">© 2020 films. All Rights Reserved.</div>

            </div>     
    );
  }
}

export default App;
          