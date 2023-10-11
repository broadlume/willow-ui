import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  LineChart,
} from 'recharts';

type Props = {};

const WebsitePerformanceChart = (props: Props) => {
  const [chartData, setChartData] = useState<any>(null);
  const [chartConfig, setChartConfig] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const chartUrl =
    'https://reporting.dev.broadlume.com/reports/ChartReport/WebsitePerformance?UniversalRetailerID=43a2c495-6baf-43c8-8726-7e2dd852ef04&DateRange=last_7_days';

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(chartUrl);
      setLoading(false);
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

    return () => {
      setChartData(null);
      setChartConfig(null);
      setLoading(true);
    };
  }, []);

  const fillerData = [
    {
      web_trend: 'Users',
      current: 395,
      previous: 447,
    },
    {
      web_trend: 'Sessions',
      current: 429,
      previous: 478,
    },
    {
      web_trend: 'Pageviews',
      current: 312,
      previous: 291,
    },
  ];

  const data = fillerData;

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <ResponsiveContainer
      initialDimension={{
        width: 500,
        height: 300,
      }}
    >
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='web_trend' />
        <YAxis />
        <Tooltip isAnimationActive={false} />
        <Legend />
        {data && (
          <>
            <Bar dataKey='current' fill='#8884d8' />
            <Bar dataKey='previous' fill='#82ca9d' />
          </>
        )}
      </BarChart>
    </ResponsiveContainer>
  );
};

export { WebsitePerformanceChart };
