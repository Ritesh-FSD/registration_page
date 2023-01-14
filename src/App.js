import React from 'react';
import './App.css';

function App() {
  return (
        <div className="container">     
          <div className='rect'></div> 
          <div className='rect2'></div> 
          <div className="header">
            <img src='images/logo.png' alt="/" ></img>
          </div>
          <div className="loginbox">
          <div class="rectangle1"></div>
          <div class="rectangle2"></div>
          <div class="rectangle3"></div>
            <p className='heading1'>It's a delight to have you onboard</p>
            <p className='subheading'>Help us Know You Better <br></br>(This is how We optimise Wobot as Per your house building)</p>

            <form className='formcontainer'>
              <label for="cname">Company name</label>      
              <input type="text" className='cname mt-1' name="cname" placeholder= "eg. Example Inc"  required />  
              
              <label for="cname" className='mt-2'>Industry</label>      
              <select name="cars" className="cname mt-2">
              <option value="0">select</option>
              <option value="IT">Volvo</option>
              <option value="Mechnaical">Saab</option>
              <option value="Electrical">Mercedes</option>
            </select>  

            <label for="cname" className='mt-2'>Company size</label> 
            <div class = "btn-group mt-2">   
              <button type = "button" class = "btn btn-secondary ml-2">1-20</button>&nbsp; &nbsp; &nbsp; 
              <button type = "button" class = "btn btn-secondary ml-2">21-50</button>&nbsp; &nbsp; &nbsp;
              <button type = "button" class = "btn btn-secondary ml-2">51-200</button>  &nbsp; &nbsp; &nbsp; 
              <button type = "button" class = "btn btn-secondary ml-2">201-500</button>  &nbsp; &nbsp; &nbsp; 
              <button type = "button" class = "btn btn-secondary ml-2">51-200</button>  &nbsp; &nbsp; &nbsp; 
            </div><br/>

            <button type = "button" class = "btn btn-secondary submit-btn">submit</button>  &nbsp; &nbsp; &nbsp; 
            </form>

          </div>
        </div>
  );
}

export default App;
