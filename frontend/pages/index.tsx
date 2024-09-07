import React from 'react';
import { useEffect, useState } from 'react';
import { CandlestickChart, LineChartComponent, BarChartComponent, PieChartComponent } from '../components/Charts';

export default function Dashboard() {
  const [candlestickData, setCandlestickData] = useState(null);
  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [pieData, setPieData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [candlestickRes, lineRes, barRes, pieRes] = await Promise.all([
          fetch('http://localhost:8000/api/candlestick-data/'),
          fetch('http://localhost:8000/api/line-chart-data/'),
          fetch('http://localhost:8000/api/bar-chart-data/'),
          fetch('http://localhost:8000/api/pie-chart-data/')
        ]);

        const candlestickData = await candlestickRes.json();
        const lineData = await lineRes.json();
        const barData = await barRes.json();
        const pieData = await pieRes.json();

        setCandlestickData(candlestickData.data);
        setLineData(lineData);
        setBarData(barData);
        setPieData(pieData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CandlestickChart data={candlestickData} />
        <LineChartComponent data={lineData} />
        <BarChartComponent data={barData} />
        <PieChartComponent data={pieData} />
      </div>
    </div>
  );
}