import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import eodActions from "../../redux/actions/eodActions";
import CanvasJSReact from '../charts/canvasjs.stock.react';
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

const EodData = () => {
  const dispatch = useDispatch();
  const { mic,symbol } = useParams();
  const eod = useSelector((state) => state.eod.eodList);
  

  useEffect(()=>{
    dispatch(eodActions.getEodByEmitenSymbolsAndExchange(symbol,mic))
  },[])
    
    const dataPoints1 = eod.map((data, idx)=>{
        return {
            'x': new Date(data.date),
            'y': [
                Number(data.open),
                Number(data.high),
                Number(data.low),
                Number(data.close)
            ],
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
          text:`${symbol}`
        },
        subtitles: [{
          text: "Stock Shares and Volume"
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
            prefix: "$",
            tickLength: 0
          },
          toolTip: {
            shared: true
          },
          data: [{
            name: "Price (in USD)",
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
        height: "500px",
        margin: "auto"
      };


    return (
        <div className="mt-3"> 
        <div>
          {console.log(dataPoints1)}
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