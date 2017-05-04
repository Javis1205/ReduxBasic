import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Action from "./reducer/actions.js";

class Them extends Component {
    render(){
        console.log('PROPS', this.props)
        return(
            <View>
                <Text>Day la them :</Text>
                <Text>
                    {this.props.PROPCUACOMPONENT.user}
                </Text>
                <Text>
                    SO CUA BAN LA : {this.props.PROPCUACOMPONENT.so}
                </Text>
                <TouchableOpacity onPress={()=>{this.props.ThayDoi('HELLO anh HUY')}}>
                    <Text>
                        Thaydoi
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        PROPCUACOMPONENT: state.GiaTriCuaRedux
    }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(Action,dispatch);
}

export default connect (mapStateToProps,mapDispatchToProps)(Them);