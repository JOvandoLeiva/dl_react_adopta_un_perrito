import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tag from './Tags';

var tag = function(textito, fondo){
    this.textito = textito; 
    this.fondo = fondo
  }

const Tarjeta = ({url,name,description,tag}) => {
    return(

        <div className='m-2'>
         <Card style={{ width: '20rem' }}>
            <Card.Img variant="top"  height="250px" src={url}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='m-2'>
                        {description}
                     </Card.Text>
                <Button variant="primary"><Tag /></Button>
             </Card.Body>
         </Card>

        </div>
    )
};

export default Tarjeta;