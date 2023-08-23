import { Badge } from "react-bootstrap";
import Card from './Card';

const Tag = ({texto,fondo}) => {

    return(

        <div>
            <span className= {"badge badge-pill badge-" +fondo}>{texto}</span>
          
        </div>
    )
};

export default Tag;