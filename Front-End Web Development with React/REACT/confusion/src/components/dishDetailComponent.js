import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle ,BreadcrumbItem,Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentFormComponent';

  const RenderComment=({comments,addComment,dishId})=>{
    if (comments !== null || comments.length === 0){
          const commentList = comments.map((comment, i) => {
            return(
                <li key={i}>
                  {i+1}.
                {comment.comment}
                  <br/><br/>	      
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(comment.date)))}
            <br />
            <br />
          </li>	   
            );
          });

        return(
            <div className="col-12 col-md-5 m-1">
              <ul>{commentList}</ul>
              <CommentForm dishId={dishId} addComment={addComment} />

            </div>
        );

    }

    else{
      return <div></div>
    }

  }

  const RenderDish=({dish})=>{
    return(
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            
            </Card>
          </div>


    );
  }

 

const DishdetailComponent=(props)=>{
  if(props.dish){
    return (
      <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/home">Home</Link>   
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to="/menu">Menu</Link>   
                </BreadcrumbItem>               
                <BreadcrumbItem active>
                    {props.dish.name}
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name} </h3>
                <hr />
            </div>
        </div>
        <div className="row">
          
          <RenderDish dish={props.dish}/>
          <RenderComment comments={props.comments}
          addComment={props.addComment}
          dishId={props.dish.id}/>
        </div>
      </div>

    );
  }
  else{
    return(
    <div></div>

    );
  }

}


export default DishdetailComponent;