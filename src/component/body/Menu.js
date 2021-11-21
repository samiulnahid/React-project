import React, {Component} from 'react';
import DISHES from '../../data/dishes.js';
import MenuItem from './MenuItem';
import  DishDetails from './DishDetails';
import COMMENTS from '../../data/comments'
import {CardColumns, Modal , ModalBody , ModalFooter , Button} from 'reactstrap';



class Menu extends Component{
    state = {
        dishes : DISHES,
        Comments : COMMENTS, 
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



    render(){

        document.title = "Restaurant-Menu";

        const menu = this.state.dishes.map(item =>{
            return(
                <MenuItem
                     dish ={item} 
                     key={item.id}
                     DishSelect = { () => this.onDishSelect(item)} />
            );
        })

        let DishDetail = null;

        if(this.state.selectedDish != null){

            const comments = this.state.Comments.filter(comment =>{
                return comment.dishId === this.state.selectedDish.id;
            })

            DishDetail = <DishDetails dish ={this.state.selectedDish} comments = {comments}/>

           
        }

        return(
            <div className="container">
                <div className="row">
                  <CardColumns>
                      {menu}
                  </CardColumns>
                  <Modal isOpen ={this.state.modalOpen} onClick={this.toggleModal}>
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




export default Menu;