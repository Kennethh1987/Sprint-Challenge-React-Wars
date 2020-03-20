import React from 'react';
import { Card,  CardHeader, CardBody, 
    CardTitle, CardText,  } from 'reactstrap';


const StarCard = (props) => {
    return   ( 
   
   
     <Card>
    <CardHeader> Name: {props.name}</CardHeader>
    <CardBody>
      <CardTitle> Height:{props.height}</CardTitle>
      <CardText>Will get better at styling!</CardText>
        </CardBody>
    </Card>

 

    )}



export default StarCard;