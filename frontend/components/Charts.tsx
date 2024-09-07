import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  LineChart,
  BarChart,
  PieChart,
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ReferenceLine
} from 'recharts';

// Candlestick Chart
interface CandlestickData {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickChartProps {
  data: CandlestickData[] | null;  // Allow null for the initial state
}

export const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  if (!data || data.length === 0) return <div>Loading...</div>;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <XAxis dataKey="x" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip
          content={({ payload, label }) => {
            if (payload && payload.length) {
              const { open, high, low, close } = payload[0].payload;
              return (
                <div className="custom-tooltip">
                  <p>{`Date: ${label}`}</p>
                  <p>{`Open: ${open}`}</p>
                  <p>{`High: ${high}`}</p>
                  <p>{`Low: ${low}`}</p>
                  <p>{`Close: ${close}`}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Legend />
        <Bar dataKey="high" fill="none" stroke="#8884d8" />
        <Bar dataKey="low" fill="none" stroke="#82ca9d" />
        <ReferenceLine y={0} stroke="#000" />
        {data.map((entry, index) => (
          <rect
            key={`candle-${index}`}
            x={index * 40 + 15}
            y={Math.min(entry.open, entry.close)}
            width={10}
            height={Math.abs(entry.open - entry.close)}
            fill={entry.open > entry.close ? "#ff0000" : "#00ff00"}
          />
        ))}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

// Line Chart
interface LineChartData {
  labels: string[];
  data: number[];
}

interface LineChartProps {
  data: LineChartData | null;  // Allow null for the initial state
}

export const LineChartComponent: React.FC<LineChartProps> = ({ data }) => {
  if (!data || data.labels.length === 0) return <div>Loading...</div>;

  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index]
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Bar Chart
interface BarChartData {
  labels: string[];
  data: number[];
}

interface BarChartProps {
  data: BarChartData | null;  // Allow null for the initial state
}

export const BarChartComponent: React.FC<BarChartProps> = ({ data }) => {
  if (!data || data.labels.length === 0) return <div>Loading...</div>;

  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index]
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

// Pie Chart
interface PieChartData {
  labels: string[];
  data: number[];
}

interface PieChartProps {
  data: PieChartData | null;  // Allow null for the initial state
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export const PieChartComponent: React.FC<PieChartProps> = ({ data }) => {
  if (!data || data.labels.length === 0) return <div>Loading...</div>;

  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index]
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
