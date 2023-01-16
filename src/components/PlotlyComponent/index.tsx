import React, { useRef } from 'react';
import Plotly from 'plotly.js-basic-dist';

function MyPlot() {
  const plotRef = useRef(null);

  function gaussianRand() {
    var rand = 0;
    for (var i = 0; i < 6; i += 1) {
      rand += Math.random();
    }
    return (rand / 6)-0.5;
  }

  let X: any[] = [];
  let Y: any[] = [];
  let n = 10000;
  let i;

for (i = 0; i < n; i += 1) {
X.push(gaussianRand());
Y.push(gaussianRand());
}



  React.useEffect(() => {
    // const data = [{
    //   x: [1, 2, 3, 4],
    //   y: [10, 15, 13, 17],
    //   type: 'scatter'
    // }];
    var data = [{
        type: "scattergl",
        mode: "markers",
        marker: {
            color : 'rgb(152, 0, 0)',
            line: {
                width: 1,
                color: 'rgb(0,0,0)'}
        },
        x: X,
        y: Y
    }]
    //@ts-ignore
    Plotly.newPlot(plotRef.current, data);
  }, []);

  return <div ref={plotRef} />;
}

export default MyPlot;



  

  

  
//   Plotly.newPlot('myDiv', data)
  