import { Badge } from "react-bootstrap";
const Tag = ({texto,fondo}) => {

    return(

        <div>
            <span className= {"badge badge-pill " + fondo}>{texto}</span>
          
        </div>
    )
};

export default Tag;