import React from 'react'
import ReactDOM from 'react-dom'



class App extends React.Component{

    constructor(props){
        super(props);

        // THIS IS ONLY TIME we do direct assignment
        // to this.state
        this.state={lat: 40, errorMessage:''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setState!!!!
                this.setState({lat: position.coords.latitude});

                // we did not!!!
                // this.state.lat = position.coords.latitude;
            },
            err => {
                this.setState({errorMessage: err.message});
            }
        );
    }


    // React says we have to define render!!
    render(){

        if(this.state.errorMessage && !this.setState.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.setState.lat){
            return <div>latti: {this.state.lat}</div>;
        }

        return <div>Lodaing!</div>;
    }
} 

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);