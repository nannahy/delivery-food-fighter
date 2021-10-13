// 데이터 분석 페이지에서 데이터 시각화를 위한 코드 - 한빈

import React from 'react';
import '../../App.css';
import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";  


export const Wrapper = styled.div`
  height: 300px;
  position: relative;
`


const line1Color = "black";


export default function ShowMainData({ coronaData, ordCountData }) {
  
  const objCoronaData = JSON.parse(coronaData)
  const objCountData = JSON.parse(ordCountData)

  const data = [
    {
        "id": "확진자수",
        "color":"hsl(43, 70%, 50%)", // 빨강
        "data": objCoronaData
      },
  ];

  const data2 = [
      {
          "id": "주문건수", 
          "color":"hsl(43, 70%, 50%)", // 파랑
          "data": objCountData 
      },
  ];

  return (
      <div className="ShowTestData">
        <Wrapper>
        <div>
          <div className="graphContainer">
            <ResponsiveLine
                data={data}
                colors={[line1Color]}
                layers={["grid", "axes", "lines", "markers", "legends"]}
                axisLeft={{
                  legend: "",
                  legendPosition: "middle",
                  legendOffset: -40
                }}
                axisBottom={{
                  tickRotation: -40
                }}
                theme={getColoredAxis(line1Color)}
                margin={{ top: 55, right: 55, bottom: 55, left: 55 }}
            />
          </div>
          <div className="secondGraph">
            <SecondGraph data={data} data2={data2}/>
          </div>
        </div>
        </Wrapper>
      </div>
  );
}

// I want this to be on top of the other graph
const SecondGraph = ({data, data2}) => {
  const data1And2 = data.concat(data2);

  return (
      <ResponsiveLine
        data={data1And2}
        colors={["rgba(255, 255, 255, 0)", "orange"]} /* Make the first line transparent with 0 opacity */
        margin={{ top: 55, right: 55, bottom: 55, left: 55 }}
        axisRight={{
          legend: "",
          legendPosition: "middle",
          legendOffset: 40
        }}
        axisLeft={null}
        axisBottom={{
          tickRotation: -40
        }}
        axisTop={null}
        enableGridY={false}
        axisBottom={null}
        theme={getColoredAxis("orange")}

        /* Add this for tooltip */
        useMesh={true}
        enableSlices="x"
        sliceTooltip={({ slice }) => {
          return (
              <div
                  style={{
                    background: 'white',
                    padding: '9px 12px',
                    border: '1px solid #ccc',
                  }}
              >
                <div>x: {slice.points[0].data.x}</div>
                {slice.points.map(point => (
                    <div
                        key={point.id}
                        style={{
                          color: point.serieColor === "rgba(255, 255, 255, 0)" ? line1Color : point.serieColor,
                          padding: '3gx 0',
                        }}
                    >
                      <strong>{point.serieId}</strong> [{point.data.yFormatted}]
                    </div>
                ))}
              </div>
          )
        }}
      />
  );
};

const getColoredAxis = color => {
  return {
    axis: {
      ticks: {
        line: {
          stroke: color
        },
        text: { fill: color }
      },
      legend: {
        text: {
          fill: color
        }
      }
    }
  };
};
