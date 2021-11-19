import React, {Component} from 'react';
import DISHES from '../../data/dishes.js';
import MenuItem from './MenuItem';
import  DishDetails from './DishDetails';




class Menu extends Component{
    state = {
        dishes : DISHES,
        selectedDish : null 
    }


    onDishSelect = dish =>{

        console.log(dish);
        // console.log(dish);
        this.setState({selectedDish:dish})
    }



    render(){

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

            DishDetail = <DishDetails dish ={this.state.selectedDish}/>

           
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">

                            {menu}

                    </div>

                    <div className="col-6">
                        {DishDetail}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;