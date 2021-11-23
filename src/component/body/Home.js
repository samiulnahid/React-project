import React,{Component} from 'react';
// import {connect} from 'react-redux';
import Loading from './Loading'



// const mapStateToProps = (state) =>{

//     // console.log("mapStateToProps",state);
//     return {

//         dishes : state.dishes,
//         sample : state.sample
//     }

// }

class Home extends Component{

    // // componentDidMount mane amer component ta purapuri load hoise.
    // componentDidMount(){
        
    //     console.log("Home props",this.props);
    //     this.props.dispatch({
    //         type : "TEST",
    //         str  : "bohubrihi"
    //     })
    // }


    // componentDidUpdate(){
    //     console.log("home props update",this.props);
    // }


    render(){

        document.title = "Restaurant-Home";

        return(
            <div>

                <Loading/>

            </div>
        );
    }
}

// export default connect(mapStateToProps)(Home);
export default Home;