import React from 'react';
import { Card,  CardHeader, CardBody, 
    CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from 'styled-components';

// var Card = styled.card`
// cursor: pointer;
// `;


const StarCard = (props) => {
    return   ( <Row >
             <Col xs="12" md="2">
     
     <Card>
    <CardHeader> Name: {props.name}</CardHeader>
    <CardBody>
      <CardTitle> Height:{props.height}</CardTitle>
      <CardText>Will get better at styling!</CardText>
        </CardBody>
  
        </Card>
    </Col> 
  </Row>)
}



export default StarCard;