import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tag from './Tags';

const Tarjeta = ({url,name,description,texto,fondo}) => {
    return(

        <div className='m-2'>
         <Card style={{ width: '20rem' }}>
            <Card.Img variant="top"  height="250px" src={url}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='m-2'>
                        {description}
                     </Card.Text>
                <Tag texto={texto} fondo ={fondo} />
             </Card.Body>
         </Card>

        </div>
    )
};

export default Tarjeta;