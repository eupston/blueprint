import React from 'react';

import {
  Text,
  View,
} from 'react-juce';

const Cell = (props) => {

  const getBackground = (activated, triggered, hovered) => {
    switch (true) {
      case hovered && !activated && !triggered:
        return 'ff66FDCF'
      case activated && triggered:
        return 'ff87898f';
      case activated && !triggered:
        return 'ff66FDCF'
      case !activated && triggered:
        return 'ff66FDCF'
      default:
        return 'ff66FDCF'
    }
  };

  const getBoxShadow = (activated) => {
    switch (true) {
      case activated:
        return "0 0 10px 0 rgba(0,135,255,0.8)";
      default:
        return "0 1px 3px 0 rgba(0,0,0,0.3)";
    }
  };

  const styles = {
    cell: {
      width: '90%',
      height: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10.0,
      boxShadow: getBoxShadow(props.activated),
      borderWidth: 2.0,
      borderColor: 'ff66FDCF',
      backgroundColor: getBackground(props.activated, props.triggered, props.hovered),
      margin: 5,
      transition:'background .1s ease'
    }
  }
  return (
      <View  {...styles.cell} />
  )
}

export default Cell;
