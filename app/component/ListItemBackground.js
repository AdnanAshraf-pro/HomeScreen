import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
import { WINDOW_WIDTH } from "../utils/AppStyles";

const ListItemBackgoundView = (props) => (
  <Svg
    width={WINDOW_WIDTH * 0.95}
    height={'100%'}
    viewBox="0 0 389 428"
    {...props}
    style={{position:'absolute'}}
  >
    <Defs></Defs>
    <G transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Subtraction_20)">
      <Path
        id="Subtraction_20-2"
        data-name="Subtraction 20"
        d="M321,379.5H22A20.483,20.483,0,0,1,1.5,359V96.714A92.1,92.1,0,0,0,16.854,98a89.86,89.86,0,0,0,32.364-5.936A86.1,86.1,0,0,0,63.342,85.1a82.563,82.563,0,0,0,12.305-9.224A78.2,78.2,0,0,0,85.8,64.694a73.669,73.669,0,0,0,7.666-12.832,70.233,70.233,0,0,0,4.845-14.18A69.4,69.4,0,0,0,96.433.5H321A20.483,20.483,0,0,1,341.5,21V359A20.483,20.483,0,0,1,321,379.5Z"
        transform="translate(23 24)"
        fill="#fff"
        stroke="#c6cfd9"
        strokeWidth={1}
      />
    </G>
  </Svg>
);
export default ListItemBackgoundView;
