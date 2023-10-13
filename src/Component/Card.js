import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import icon from './images/userprofile.jpeg'
import './css/card.css'

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img class="mx-auto d-block" variant="top" src={icon} />
      <Card.Body>
        <Card.Title>Profile</Card.Title>
	{/*should display user inputted data*/}
        <Card.Text>
          Name: Anna Makarewicz
        </Card.Text>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
