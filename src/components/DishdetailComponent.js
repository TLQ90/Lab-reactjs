import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';



function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
      </Card>
    </div>

  )

}

function RenderComments(comments) {
  return (
   <div className='col-12 col-md-5 m-1' >
     {comments.map(c => (
              <div key={c.id}>
                <p>--{c.author}</p>
                <p>{c.comment}</p>
                <p>{c.date}</p>
              </div>
            ))}
   </div>

  )

}

const DishDetail=(props)=>{
  if (props.dish != null)
  return (
    <div className='row'>
      <RenderDish className="col-12 col-md-5 m-1" dish={props.dish}/>
      <RenderComments className="col-12 cpol-md m-" comments={props.dish.comments}/>
    </div>
  )
  else return <div>
     
  </div>;
};



export default DishDetail;
