import React, {Component} from 'react';
// import DISHES from '../../data/dishes.js';
// import COMMENTS from '../../data/comments';
import MenuItem from './MenuItem';
import  DishDetails from './DishDetails';
import {CardColumns, Modal , ModalBody , ModalFooter , Button} from 'reactstrap';
import {connect} from 'react-redux';
// import * as actionTypes from '../../redux/actionTypes'
import { addComment , fatchDishes,fatchComments  } from '../../redux/actionCreators';
import Loading from './Loading';


 
const mapStateToProps = (state) =>{

    // console.log("mapStateToProps",state);
    return {

        dishes : state.dishes,
        comments : state.comments
    }

}

const mapDispatchToProps = dispatch =>{
    return {
        addComment : (dishId , rating ,author , comment) => dispatch(addComment(dishId , rating ,author , comment)),

        fatchDishes : () => dispatch(fatchDishes()),
        fatchComments : () => dispatch(fatchComments())

        // {
            // dispatch({
            //     type: actionTypes.ADD_COMMENT,
            //     payload :{
            //         dishId : dishId,
            //         author : author,
            //         rating : rating,
            //         comment :comment
            //     }

            // }),
            // // deleteComment : 
        // }
    }
}



class Menu extends Component{
    state = {
        // dishes : DISHES,
        // comments : COMMENTS, 
        selectedDish : null ,
        modalOpen : false
    }


    onDishSelect = dish =>{

        console.log(dish);
        // console.log(dish);
        this.setState({selectedDish:dish})
        this.toggleModal();
    }

    toggleModal=()=>{
        this.setState({
            modalOpen : !this.state.modalOpen
        })
    }

    componentDidMount(){
        this.props.fatchDishes();
        this.props.fatchComments();
    }


    render(){

      

        document.title = "Restaurant-Menu";

        // actionCreators.js file thake dishesLoading function call hobe tarpor porer function (loadDishes) a aste 2 second time lagbe.. ai 2 second a loading.js file open hobe..jeta if condition a ase. tokhon isLoading : true hobe. if condition call hobe.. 
        // 2 second pore actionCreators.js file ar loadDishes function call hobe..tokhon isLoading : false hoi a jabe. tokhon else condition a jabe & menu show hobe. 
        
        

          if(this.props.dishes.isLoading){
              return (

                <Loading/>

              );
          }

          else{

                    // menu item state hisebe call hoise
                // const menu = this.state.dishes.map(item =>{  
                //redux thake dishes & comment asse..tai props hisebe call hoise
                // const menu = this.props.dishes.map(item =>{

                // jehetu akn dishes array noi akta object.. dishes ar modhe dishes + isLoading dui tai ase..tai akhne( dishes.dishes) korte hobe.age sudu array jassilo akn object jasse dishes ar vitore.
                //reducer.js file a dishReducer function a dishes k object hisebe dore sekhane dishes + isLoading pass kora hoise
                const menu = this.props.dishes.dishes.map(item =>{
                    return(
                        <MenuItem
                            dish ={item} 
                            key={item.id}
                            DishSelect = { () => this.onDishSelect(item)} />
                    );
                })

                let DishDetail = null;

                if(this.state.selectedDish != null){

                    // const comments = this.state.Comments.filter(comment =>{
                    const comments = this.props.comments.comments.filter(comment =>{
                        return comment.dishId === this.state.selectedDish.id;
                    })

                    DishDetail = <DishDetails 
                                        dish ={this.state.selectedDish} 
                                        comments = {comments}
                                        addComment = {this.props.addComment}
                                        CommentsIsLoading = {this.props.comments.isLoading}
                                        
                                    />

                
                }

                return(
                    <div className="container">
                        <div className="row">
                        <CardColumns>
                            {menu}
                        </CardColumns>

                        {/* comment add kora r redux use korar ager code */}
                        {/* <Modal isOpen ={this.state.modalOpen} onClick={this.toggleModal}> */}
                            <Modal isOpen ={this.state.modalOpen} >
                            <ModalBody>
                                {DishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleModal}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>
                        </div>
                    </div>
                )
              
          }

     
    }
}




export default connect(mapStateToProps , mapDispatchToProps)(Menu);