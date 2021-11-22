import React, {Component} from 'react';
// import DISHES from '../../data/dishes.js';
// import COMMENTS from '../../data/comments';
import MenuItem from './MenuItem';
import  DishDetails from './DishDetails';
import {CardColumns, Modal , ModalBody , ModalFooter , Button} from 'reactstrap';
import {connect} from 'react-redux';



const mapStateToProps = (state) =>{

    // console.log("mapStateToProps",state);
    return {

        dishes : state.dishes,
        comments : state.comments
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



    render(){

        document.title = "Restaurant-Menu";

        // menu item state hisebe call hoise
        // const menu = this.state.dishes.map(item =>{  
        //redux thake dishes & comment asse..tai props hisebe call hoise
        const menu = this.props.dishes.map(item =>{
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
            const comments = this.props.comments.filter(comment =>{
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




export default connect(mapStateToProps)(Menu);