import * as actionTypes from './actionTypes';
// import DISHES from '../data/dishes'
import axios from 'axios'
import {baseUrl} from './baseURL'


export const addComment =(dishId , rating , author, comment) =>dispatch => {

    // return{
        // type: actionTypes.ADD_COMMENT,
        // payload :{
        //     dishId : dishId,
        //     author : author,
        //     rating : rating,
        //     comment :comment
        // } 
    // }


    const newComment = {
        dishId :  dishId,
        author : author,
        rating : rating,
        comment :comment
    }

    newComment.date = new Date().toISOString();

    axios.post(baseUrl +  "comments", newComment )
        .then(response => response.data)
        .then(comment=>dispatch(CommentConcat(comment)))

}

export const CommentConcat = (comment) =>({

        type: actionTypes.ADD_COMMENT,
        payload : comment

})

export const commentLoading = () =>({
    type: actionTypes.COMMENT_LOADING

})

export const loadComments = (comments) =>({
    type: actionTypes.LOAD_COMMENTS,
    payload : comments

})

export const fatchComments = () =>dispatch =>{
    dispatch(commentLoading());
 
    axios.get(baseUrl +  "comments" )
            .then(response => response.data)
            .then(comments=>dispatch(loadComments(comments)))
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

        // setTimeout(()=>{
            
        //     dispatch(loadDishes(DISHES))

        //  },
        //      2000 );


        // axios.get("http://localhost:3001/dishes" )
        axios.get(baseUrl +  "dishes" )
            .then(response => response.data)
            .then(dishes=>dispatch(loadDishes(dishes)))

        
    }

}