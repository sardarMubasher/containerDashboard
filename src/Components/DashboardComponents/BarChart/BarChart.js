import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { BarChartData } from '../../../Data/mockData'

const BarChart = () => {
 
  return (
    
        <ResponsiveBar
    data={BarChartData}
    keys={["degress"]}
    indexBy="day"
    margin={{ top: 50, right: 10, bottom: 50, left: 10 }}
    padding={0.4}
    valueScale={{ type: "linear" }}
    colors="#3182CE"
    animate={true}
    enableLabel={false}
    axisTop={null}
    axisRight={null}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "degrees",
      legendPosition: "middle",
      legendOffset: -40
    }}
  />
  )
}

export default BarChart