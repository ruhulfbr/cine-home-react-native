import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated,Easing } from 'react-native'
import { Icon } from 'native-base';


class Spinner extends Component {
    constructor(props) {
        super(props)
        this.rotation = new Animated.Value(0)
    }

    componentDidMount() { 
        this.spin();
    }

    spin = () => {

        this.rotation.setValue(0);
        Animated.timing(
            this.rotation,
            {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start(() => this.spin());

    };

    render() {
        const { style, rotation, ...other } = this.props;
        const rotate = this.rotation.interpolate({inputRange: [0, 1], outputRange: ['0deg', '360deg']});
        return (
            // <Animated.Image
            //     {...other}
            //     source={require('../assets/img/loading.gif')}
            //     style={[style, { transform: [{ rotate }] }]}
            // />

            <Animated.View style={{transform: [{rotate}]}}>
                {/* <Icon style={{color:'#d4dbe3', fontSize:35 }} type="Fontisto" name={'spinner'} /> */}
                {/* <Icon style={{color:'#d4dbe3', fontSize:35 }} type="AntDesign" name={'loading1'} /> */}
                <Icon style={{color:'#d4dbe3', fontSize:70 }} type="EvilIcons" name={'spinner-3'} />
                {/* <Icon style={{color:'#d4dbe3', fontSize:40 }} type="FontAwesome" name={'spinner'} /> */}
            </Animated.View>

        )
    }
}

export default Spinner