import React, {useMemo, useState, useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import './BarReact.css';

interface BarReactProps {
  data: number[];
  xData: string[];
}

export const BarReact = ({data, xData}: BarReactProps) => {
  const [barData, setBarData] = useState<number[]>([]);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBarData(updateBarData);
  }, [data]);

  const updateBarData = useMemo(() => {
    let result: number[] = [];
    data.map((item) => result.push(item));
    return result;
  }, [data]);

 

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      chart.setOption({
        series: [{
          data: barData,
          type: 'bar',
        }],
        xAxis: {
          data: xData,
        },
        yAxis: {},
      });
    }
  }, [barData, xData]);

  return (
    <div className={['storybook-barReact', `storybook-barReact-wrapper`].join(' ')}>
      <div ref={chartRef} id="bar-react"></div>
    </div>
  );
};  
