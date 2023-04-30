import React from 'react';
import Svg, { Path } from 'react-native-svg';

function ShowMeHowIcon(props) {
  return (
    <Svg viewBox="0 0 24 24" width={props.size} height={props.size} {...props}>
      <Path fill={props.color} d="M7.5 10.5l4.5-4.5 4.5 4.5m-4.5-4.5v9" stroke={props.color} strokeLinecap="round" strokeLinejoin="round" />
      <Path fill="none" d="M0 0h24v24H0z" />
    </Svg>
  );
}

export default ShowMeHowIcon;