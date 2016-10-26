import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MyComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text style={styles.header}>{this.props.headerText ? this.props.headerText : 'Lorem Ipsum Dolor'}</Text>
                <Text style={styles.content}>{this.props.contentText ? this.props.contentText : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula, purus vitae facilisis dignissim, magna enim rutrum libero, non venenatis lectus ipsum ut ex. Maecenas tempus ipsum sapien, id rutrum justo ornare et. Nunc non libero sed sapien lacinia tempor. Nullam et ultricies est. Integer malesuada sollicitudin hendrerit. Vestibulum eget tellus eu nisi aliquam eleifend at tempor odio. Vivamus ac ligula sollicitudin, malesuada elit non, pellentesque est. Cras mauris libero, lacinia ut nisl sed, pulvinar vestibulum lectus. Sed hendrerit nulla ut vestibulum lobortis. Nullam placerat dolor a elementum rutrum.' }</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
    },
    content: {
        textAlign: 'left',
    }
});

AppRegistry.registerComponent('MyComponent', () => MyComponent);
