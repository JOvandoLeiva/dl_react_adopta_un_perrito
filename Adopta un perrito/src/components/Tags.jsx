import { Badge } from "react-bootstrap";

const Tag = ({ texto, fondo }) => {
    return(
        <div>
            <Badge bg={fondo}>{texto}</Badge>
        </div>
    );
};

export default Tag;