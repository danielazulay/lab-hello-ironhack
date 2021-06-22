import logo from './logo.svg';
import './App.css';
import imagemHeader from "./assets/images/react-logo.svg"
import menu from "./assets/images/menu-top.svg"
import iron from "./assets/images/ironhack-logo.svg"
import Block from "./blocks"
import icon1 from "./assets/images/icon1.png"
import icon2 from "./assets/images/icon2.png"
import icon3 from "./assets/images/icon3.png"
import icon4 from "./assets/images/icon4.png"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  let arr = [
    {image: icon1,
  title:"Declarative",text:"React makes it painless to create interactive Uis."},
  {image:icon2,
  title:"Components",
  text:"Build encapsulated components that manage their state."},
  {image: icon3,
  title:"Single -Way",
  text:"A set of immutable values are passed to the components."},
  {image: icon4,
  title:"JSX",
  text:"Statically-typed. designed rua on modern browsers."}
  ]
  
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
<div class="but">
   <button  type="submit">Awesome!</button>
</div>
</div>

<div class="container">
  <div class="row">
{arr.map((obj)=>{
return (
<Block 
image={obj.image}
title={obj.title}
text={obj.text}
/>
);

})}

</div>
</div>
      </div>

  );
}

export default App;
