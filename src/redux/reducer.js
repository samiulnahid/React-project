// import DISHES from '../data/dishes';
// import COMMENTS from '../data/comments';
import {combineReducers, combinReducers} from 'redux';
import * as actionTypes from './actionTypes'
import actions from 'redux-form/lib/actions';

// const initialState ={
//     dishes :DISHES,
//     comments : COMMENTS, 
//     // sample : "hello wrold"
// }


// actionCreators.js thake loadDishes function thake DISHES astise dishState ar modhe
// tai akhane notun kore DISHES call korar dorker nai. tai dishState = DISHES kete deoya hoise

// const dishReducer = (dishState = DISHES , action)=>{

// dishState ar modhe DISHES pass na kore akta object pass korbo. 
//ate full array sorasori pass na hoi a .akta object ar vitor duke pass hobe
const dishReducer = (dishState ={isLoading : false , dishes : [] } , action)=>{

     switch(action.type){

        case actionTypes.DISHES_LOADING:
            return{
                ...dishState,
                isLoading : true,
                dishes :[]
            }
        case actionTypes.LOAD_DIEHES:
            return{
                ...dishState,
                isLoading: false,
                dishes : action.payload
            }  

         default: 
            return dishState;
            }

    // return dishState;

}

// const commentReducer = (commentState = COMMENTS , action)=>{
    const commentReducer = (commentState = {isLoading:true , comments : []} , action)=>{

            switch(action.type){
                case actionTypes.LOAD_COMMENTS:
                    return{
                        ...commentState,
                        isLoading : false,
                        comments : action.payload
                    };


                case actionTypes.COMMENT_LOADING:
                    return{
                        ...commentState,
                        isLoading:true,
                        comments: []
                    };




                case actionTypes.ADD_COMMENT:
                    let comment = action.payload;
                    // comment.id = commentState.length;
                    // comment.date = new Date().toDateString();
                    // console.log(comment);
                    // return commentState.concat(comment)

                    return {
                        ...commentState,
                        comments : commentState.comments.concat(comment)
 
                    };

                default:
                    return commentState;
            }
    //        if(action.type === 'ADD_COMMENT'){    
        
    //         let comment = action.payload;
    //         comment.id = commentState.length;
    //         comment.date = new Date().toDateString();
    //         console.log(comment);
    //         return commentState.concat(comment)           
    //         }
    // return commentState;

}


// const Reducer = (state = initialState , action) =>{

 
//     // if(action.type === 'TEST'){    
//     //     return{
//     //         ...state,
//     //         sample:action.str     
//     //     }  
//     // }

//     //    if(action.type === 'ADD_COMMENT'){    
        
//     //         let comment = action.payload;
//     //         comment.id = state.comments.length;
//     //         comment.date = new Date().toDateString();
//     //         console.log(comment);
//     //         return{
//     //          ...state,
//     //          comments: state.comments.concat(comment)
//     //         }

//     //         }

//     return  state;

// }

 const Reducer = combineReducers({
    dishes : dishReducer,
    comments : commentReducer
})

 


export default Reducer;