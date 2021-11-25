import React,{Component} from 'react';
import {Button , Form  , Label , Input , Col, FormGroup} from 'reactstrap';
import {} from 'redux-form';
// import axios from 'axios';
// import {baseUrl} from '../../redux/baseURL'
// import {Alert} from 'reactstrap'



class Contact2 extends Component{

    constructor(props){
        super(props);
        this.state ={
            firstname : "",
            lastname : "",
            telnum: "",
            email: "",
            agree: false,
            contactType : "Tel.",
            message: "",
            // alertShow: false,
            // alertText:null,
            // alertType:null

        }
        this.hendleInputchange = this.hendleInputchange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    hendleInputchange = event =>{
        const value = event.target.type ==="checkbox" ? event.target.checked : event.target.value;

        const name = event.target.name;
        this.setState({
            [name] : value
        })

        
    }

    handleSubmit = event =>{
        console.log(this.state);
        event.preventDefault();
        // axios.post(baseUrl +  "feedback", this.state  )
        // .then(response => response.status)
        // .then(status=>{
        //     if(status === 201){
             
        //         this.setState({
        //             alertShow:true,
        //             alertText:"submited successfully",
        //             alertType:"success"
        //         })
        //     }
        // })
    }



    render(){


        document.title = "Restaurant-Contact";

        return(
            <div className="container">

                <div className="row row-content" style={{paddingLeft:"20px" , textAlign:"left "}}>

                    {/* <Alert isOpen={this.state.alertShow} color={this.statealertType}> {this.state.alertText} </Alert> */}

                    <div className="col-12">
                        <h3>send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">

                        <Form onSubmit={ this.handleSubmit}>

                            <FormGroup row>
                                <Label htmlFor="firstname" md={12}>First Name</Label>

                                <Col md={12}>

                                    <Input 
                                        type="text" 
                                        name="firstname" 
                                        placeholder="First Name" 
                                        value={this.state.firstname} 
                                        onChange={this.hendleInputchange}
                                        required

                                    />

                                </Col>
                            </FormGroup>

                             <FormGroup row>
                                <Label htmlFor="lastname" md={12}>Last Name</Label>

                                <Col md={12}>

                                    <Input 
                                        type="text" 
                                        name="lastname" 
                                        placeholder="Last Name" 
                                        value={this.state.lastname}
                                        onChange={this.hendleInputchange}
                                        required
                                        
                                    />

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={12}>Contact tel.</Label>

                                <Col md={12}>

                                    <Input 
                                        type="tel" 
                                        name="telnum" 
                                        placeholder="Tel. Number" 
                                        value={this.state.telnum}
                                        onChange={this.hendleInputchange}
                                        required
                                        
                                    />

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={12}>Email</Label>

                                <Col md={12}>

                                    <Input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        value={this.state.email}
                                        onChange={this.hendleInputchange}
                                        
                                    />

                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                
                                <Col md={{size:12}}>
                                    <FormGroup check>
                                        <Label check>

                                             <Input 
                                                type="checkbox" 
                                                name="agree" 
                                                checked={this.state.agree}
                                                onChange={this.hendleInputchange}
                                            />        

                                             <strong>May we contact you?</strong> 

                                        </Label>
                                    </FormGroup>
                                </Col>

                                <Col >
                                    
                                    <Input 
                                        type="select" 
                                        name="contactType"  
                                        value={this.state.contactType}
                                        onChange={this.hendleInputchange}
                                        style={{display:"block", width:"100%" , background:"white", padding:"6px",border:"1px solid #e6dfdf", borderRadius:"5px"}}
                                        
                                    >

                                        <option>tel.</option>
                                        <option>Email</option>

                                    </Input>
                                </Col>
                            </FormGroup> 


                            <FormGroup row>
                                <Label htmlFor="message" md={12}>Your Feedback</Label>

                                <Col md={12}>

                                    <Input 
                                        type="textarea" 
                                        name="message"  
                                        value={this.state.message} 
                                        rows="12"
                                        onChange={this.hendleInputchange}
                                        
                                    />

                                   
                                </Col>  
                            </FormGroup>

                              <FormGroup >
                                   <Col md={{size:6, offset:2}}>
                                        <Button type="submit" color="primary">

                                                Send feedback
                                        </Button>

                                   </Col>
                               
                            </FormGroup>

                        </Form>
                    </div>

                </div>

            </div>
        );
    }
}

export default Contact2;