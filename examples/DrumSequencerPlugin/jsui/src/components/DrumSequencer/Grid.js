import React from "react";
import Cell from "./Cell";

import {View, Button, Text} from 'react-juce';

const Grid = (props) => {
      const styles = {
            row: {
                  flex: 1,
                  width: '100%',
                  height: 100,
                  flexShrink: 0,
            },
            text: {
                  'font-size': 18.0,
                  'line-spacing': 1.6,
                  'color': 'ff626262'
            },
            button: {
                  'justify-content': 'center',
                  'align-items': 'center',
                  'width': '100%',
                  'height': '100%',
                  'border-radius': 5.0,
                  'border-width': 2.0,
                  'border-color': 'ff626262'
            }
      }

      const grid = Array.from(new Array(props.rows),(_,x) =>
              <View {...styles.row} key={x}>
                    {Array.from(new Array(props.columns),(_, y) =>
                         <Cell key={x + y}
                              row={x + 1}
                              column={y + 1}
                        />
                    )
                    }
              </View>
      )

      return (
      <React.Fragment>
            {grid}
      </React.Fragment>
      );
};
export default Grid;
