import logo from './logo.svg';
import './App.css';
import imagemHeader from "./assets/images/react-logo.svg"
import menu from "./assets/images/menu-top.svg"
import iron from "./assets/images/ironhack-logo.svg"
import icon1 from "./assets/images/icon1.png"
import icon2 from "./assets/images/icon2.png"
import icon3 from "./assets/images/icon3.png"
import icon4 from "./assets/images/icon4.png"

function App() {
  return (



    <div class="app">

   <div className="back"> 
   <nav>
   <img className="menu1" src={menu}/>
   <img className="logo" src={iron}/>
  
 
   </nav>
      <img className="imagemfundo1" src={imagemHeader}/>
      <img className="imagemfundo2" src={imagemHeader}/>
      <img className="imagemfundo3" src={imagemHeader}/>
      <img className="imagemfundo4" src={imagemHeader}/>
      <img className="imagemfundo5" src={imagemHeader}/>
      <img className="imagemfundo6" src={imagemHeader}/>
      <img className="imagemfundo7" src={imagemHeader}/>
      
    
   <h1 className="titleh1">SAY hello to ReactJS</h1>
   
   <h3 className="titleh3">You Will lear how to use the most popular frontend library,
     and become a super Ninja developer.
   </h3>
   <button type="submit">Awesome!</button>

</div>


<div className="container">

    <div className="col"> <img className="icon1" src={icon1}/><h3 className="title2">Declarative</h3><p>React makes it painless to create interactive Uis.</p></div>
    <div className="col"><img className="icon2" src={icon2}/><h3 className="title2">Components</h3><p>Build encapsulated components that manage their state.</p></div>
    <div className="col"><img className="icon3" src={icon3}/><h3 className="title2"> Single -Way</h3><p>A set of immutable values are passed to the components</p></div>
    <div className="col"><img className="icon4" src={icon4}/><h3 className="title2">JSX</h3><p>Statically-typed. designed rua on modern browsers.</p></div>

  </div>




      </div>



 

  );
}

export default App;
