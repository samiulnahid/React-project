import React from 'react';
import {Card,CardImg, CardBody , CardTitle, CardText} from 'reactstrap';
import Comment from './comment';
import CommentForm from './CommentForm'

const DishDetails =(props) =>{
    return(
        <div>

            <Card style={{margin : "10px"}}>
                <CardImg top src ={props.dish.image} alt={props.dish.name} />
                <CardBody style={{textAlign:"left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    
                       <CardText> {props.dish.description}</CardText>
                      <CardText>  {props.dish.price}/- </CardText>
                    
                    <hr/>
                    {/* ager system. jekhane dish ar vitore dish + comment sob asto . setar code */}
                   {/* <Comment comments={props.dish.comments}/> */}

                   {/* dish r comments aladavabe astise. sei jonne props.comments */}
                   <Comment comments={props.comments}>

                   </Comment>

                   <hr/>

                    <CommentForm/>


                </CardBody>
            </Card>


        </div>
    )
}

export default  DishDetails;