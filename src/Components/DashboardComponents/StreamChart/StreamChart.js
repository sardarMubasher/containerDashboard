
import { ResponsiveStream } from "@nivo/stream";
import { streamData } from "../../../Data/mockData";

const Stream = () => {
  return (
    <div style={{height:'100%',width:'100%'}}>
   
      <ResponsiveStream
        data={streamData}
        keys={["Ronaldo", "Neymar", "Messi"]}
        margin={{
          top: 50,
          right: 100,
          bottom: 10,
          left: 50,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number of Years Playing",
          legendOffset: 36,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number of Goals",
          legendOffset: -40,
        }}
        offsetType="silhouette"
        colors={{ scheme: "accent" }}
        fillOpacity={0.85}
        borderColor={{ theme: "background" }}
        dotBorderColor={{
          from: "color",
          modifiers: [["darker", 0.7]],
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999999",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Stream;