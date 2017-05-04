import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Action from "./reducer/actions.js";
import Them from './Them';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tuoi : 0
        }
    }
    congthem(){
        this.setState({
                        tuoi : this.state.tuoi + 1
                    });
        this.props.CongThem(this.state.tuoi);
    }
    render(){
        return(
            <View style={{flex:1,marginTop:40}}>
                <Text>
                    {this.state.tuoi}
                </Text>
                <TouchableOpacity onPress={()=>{this.congthem()}}>
                    <Text>
                        Bam vao day
                    </Text>
                </TouchableOpacity>
                <Them />
            </View>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log('state',state)
    return{
        test: state.test
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Action,dispatch);
}
export default connect (mapStateToProps,mapDispatchToProps)(App)