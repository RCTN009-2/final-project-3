import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes dari library prop-types

const Button = (props) => {
  const style = {
    button: {
      backgroundColor: props.buttonLogin ? 'blue' : 'green', // Misalnya, sesuaikan dengan kebutuhan Anda
      padding: 16,
      borderRadius: 8,
      marginBottom: 8,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  };

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={style.button}>
        <Text style={style.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Tentukan prop-types di luar komponen
Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonLogin: PropTypes.bool,
};

export default Button;
