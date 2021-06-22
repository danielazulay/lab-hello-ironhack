
import "bootstrap/dist/css/bootstrap.min.css"

function blocks(props){
return <div class="col"><img src={props.image}/><h3>{props.title}</h3><p>{props.text}</p></div>




}

export default blocks;