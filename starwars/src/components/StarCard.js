import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

const StarCard = ({people}) => {
    return       <Card>
    <CardHeader>Name {people.name}</CardHeader>
    <CardBody>
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Go somewhere</Button>
    </CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
}



export default StarCard;