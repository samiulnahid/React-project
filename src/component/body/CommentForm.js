
import React , { Component } from 'react';
import {Form ,Button, Input , FormGroup , Label} from 'reactstrap';
// import {connect} from 'react-redux';

// const mapDispatchToProps = dispatch =>{
//     return {
//         addComment : (dishId , rating ,author , comment) =>{ 

//             dispatch({
//                  type: 'ADD_COMMENT',
//                 payload :{
//                     dishId : dishId,
//                     author : author,
//                     rating : rating,
//                     comment :comment
//                 }

//             })
//             // deleteComment : 
//         }
//     }
// }
class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state ={
            author : '', 
            rating : '',
            comment : ''
        }
         this.hendleInputchange = this.hendleInputchange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

     hendleInputchange = event =>{
        const value = event.target.value;

        const name = event.target.name;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = event =>{
        console.log(this.state);

        this.props.addComment(this.props.dishId,this.state.rating , this.state.author , this.state.comment)
         
        this.setState ({
            author : '',
            rating : '',
            comment : ''
        })
        event.preventDefault();
    }



    render(){

        console.log(this.props);
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input 

                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder = "Your Name"
                        onChange={this.hendleInputchange}
                        required                   
                    />

                    <br/>

                    <Input
                        type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.hendleInputchange}
                        style={{display:"block", width:"100%" , background:"white", padding:"6px",border:"1px solid gray", borderRadius:"5px"}}
                    >

                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>

                    </Input>
                    <br />

                    <Input
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        onChange={this.hendleInputchange}
                        required

                    >
                    
                    </Input>
                    <br/>
                    <Button type="submit">Submit Comment</Button>
                </Form>
            </div>
        )
    }
}

// export default connect(null , mapDispatchToProps)(CommentForm);
export default CommentForm;