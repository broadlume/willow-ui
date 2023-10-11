import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type Props = {};

const SessionsPageviewsUsersChart = (props: Props) => {
  const [chartData, setChartData] = useState<any>(null);
  const [chartConfig, setChartConfig] = useState<any>(null);
  const chartUrl =
    'https://reporting.dev.broadlume.com/reports/ChartReport/SessionsPageviewsUsers?UniversalRetailerID=e2d9e3f2-deef-43a1-996e-b068a58c3a56&DateStart=2023-02-01&DateEnd=2023-05-01';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(chartUrl);
      const data = await response.text();
      console.log('data', data);

      const dataRegex = /chartconfig\.dataSource\s*=\s*(\[.*?\])/s;
      const dataMatch = data.match(dataRegex);

      if (dataMatch && dataMatch[1]) {
        const dataSource = JSON.parse(dataMatch[1]);
        // console.log('dataSource', dataSource);
        setChartData(dataSource);
      } else {
        console.log('Unable to extract dataSource');
      }

      const configRegex = /chartconfig\s*=\s*({[\s\S]*?});/;
      const configMatch = data.match(configRegex);

      if (configMatch && configMatch[1]) {
        // use eval to quote property names and remove trailing commas
        const config = eval(`(${configMatch[1]})`);
        console.log('config', config);
        setChartConfig(config);
      } else {
        console.log('Unable to extract chartConfig');
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer
      initialDimension={{
        width: 500,
        height: 300,
      }}
    >
      <LineChart
        data={chartData}
        width={500}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month_day' />
        <YAxis />
        <Tooltip isAnimationActive={false} />
        <Legend />
        {chartData && (
          <>
            <Line
              name='Page Views'
              type='monotone'
              dataKey='pageviews'
              stroke='#f5564a'
            />
            <Line
              name='Sessions'
              type='monotone'
              dataKey='sessions'
              stroke='#1db2f5'
            />
            <Line
              name='Users'
              type='monotone'
              dataKey='users'
              stroke='#97c95c'
            />
          </>
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export { SessionsPageviewsUsersChart };
