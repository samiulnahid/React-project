import * as actionTypes from './actionTypes';
import DISHES from '../data/dishes'


export const addComment =(dishId , rating , author, comment) =>{
    return{
    
        type: actionTypes.ADD_COMMENT,
        payload :{
            dishId : dishId,
            author : author,
            rating : rating,
            comment :comment
        }        
    }
}

// nise arrow pore first bracket diye oitar modhe second bracket disi karon akhane amra sora sori return korsi. return call korini..
// sorasori return korar jonne first bracket deoya hoise

export const loadDishes = (dishes) => ({

    type: actionTypes.LOAD_DIEHES,
    payload: dishes

})


export const dishesLoading = () => ({

    type: actionTypes.DISHES_LOADING,
   

})


export const fatchDishes = () => {

    return dispatch =>{
        dispatch(dishesLoading());

        setTimeout(()=>{
            
            dispatch(loadDishes(DISHES))

         },
             2000 );

        
    }

}