import React from 'react';
import {useSelector} from 'react-redux';
import CanvasJSReact from './charts/canvasjs.stock.react';
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

const EodData = () => {

    const eod = useSelector((state) => state.eod.eodList);
    const dataPoints1 = eod.map((data, idx)=>{
        return {
            'dp1' : {
            'x': new Date(data.date),
            'y': [
                Number(data.open),
                Number(data.high),
                Number(data.low),
                Number(data.close)
            ]},
        }
    })
    const dataPoints2 = eod.map((data, idx)=>{
        return {
            x: new Date(data.date),
            y: Number(data.volume)
        }
    })

    const dataPoints3 = eod.map((data, idx)=>{
        return {
            x: new Date(data.date),
            y: Number(data.close)
        }
    })

    const options = {
        theme: "light2",
        title:{
          text:"PT BANK CENTRAL ASIA TBK"
        },
        subtitles: [{
          text: "Stock Shares"
        }],
        charts: [{
          axisX: {
            lineThickness: 5,
            tickLength: 0,
            labelFormatter: function(e) {
              return "";
            },
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
              labelFormatter: function(e) {
                return "";
              }
            }
          },
          axisY: {
            title: "Shares Price",
            prefix: "IDR",
            tickLength: 0
          },
          toolTip: {
            shared: true
          },
          data: [{
            name: "Price (in IDR)",
            yValueFormatString: "$#,###.##",
            type: "candlestick",
            dataPoints : dataPoints1
          }]
        },{
          height: 100,
          axisX: {
            crosshair: {
              enabled: true,
              snapToDataPoint: true
            }
          },
          axisY: {
            title: "Volume",
            prefix: "$",
            tickLength: 0
          },
          toolTip: {
            shared: true
          },
          data: [{
            name: "Volume",
            yValueFormatString: "$#,###.##",
            type: "column",
            dataPoints : dataPoints2
          }]
        }],
        navigator: {
          data: [{
            dataPoints: dataPoints3
          }],
          slider: {
            minimum: new Date("2018-05-01"),
            maximum: new Date("2018-07-01")
          }
        }
      };
    
      const containerProps = {
        width: "100%",
        height: "450px",
        margin: "auto"
      };


    return (
        <div> 
        <div>
          {
            // Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
            dataPoints1 && 
            <CanvasJSStockChart containerProps={containerProps} options = {options}
              /* onRef = {ref => this.chart = ref} */
            />
          }
        </div>
      </div>
    )
}

export default EodData;