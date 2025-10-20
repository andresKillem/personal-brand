"use client";

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

interface ChartData {
  [key: string]: number | string;
}

interface ClientLineChartProps {
  data: ChartData[];
  dataKey: string;
  stroke: string;
  strokeWidth?: number;
  name?: string;
  domain?: [number, number];
}

export const ClientLineChart = ({ data, dataKey, stroke, strokeWidth = 3, name, domain }: ClientLineChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="month" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" domain={domain} />
        <Tooltip
          contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
          labelStyle={{ color: '#F3F4F6' }}
          cursor={{ stroke: '#06B6D4', strokeWidth: 2 }}
        />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={stroke}
          strokeWidth={strokeWidth}
          name={name}
          dot={{ fill: stroke, r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

interface ClientAreaChartProps {
  data: ChartData[];
  dataKey: string;
  stroke: string;
  fill: string;
  name?: string;
}

export const ClientAreaChart = ({ data, dataKey, stroke, fill, name }: ClientAreaChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="month" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip
          contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
          labelStyle={{ color: '#F3F4F6' }}
          cursor={{ stroke: '#06B6D4', strokeWidth: 2 }}
        />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={stroke}
          fill={fill}
          fillOpacity={0.3}
          strokeWidth={3}
          name={name}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

interface ClientDualAreaChartProps {
  data: ChartData[];
}

export const ClientDualAreaChart = ({ data }: ClientDualAreaChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="month" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip
          contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
          labelStyle={{ color: '#F3F4F6' }}
        />
        <Area type="monotone" dataKey="before" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} name="Before ($)" />
        <Area type="monotone" dataKey="after" stroke="#10B981" fill="#10B981" fillOpacity={0.3} name="After ($)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

interface ClientDualLineChartProps {
  data: ChartData[];
  leftKey: string;
  rightKey: string;
  leftStroke: string;
  rightStroke: string;
  leftName: string;
  rightName: string;
}

export const ClientDualLineChart = ({ data, leftKey, rightKey, leftStroke, rightStroke, leftName, rightName }: ClientDualLineChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="month" stroke="#9CA3AF" />
        <YAxis yAxisId="left" stroke="#9CA3AF" />
        <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
        <Tooltip
          contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
          labelStyle={{ color: '#F3F4F6' }}
        />
        <Line yAxisId="left" type="monotone" dataKey={leftKey} stroke={leftStroke} strokeWidth={3} name={leftName} />
        <Line yAxisId="right" type="monotone" dataKey={rightKey} stroke={rightStroke} strokeWidth={3} name={rightName} />
      </LineChart>
    </ResponsiveContainer>
  );
};

interface ClientBarChartProps {
  data: ChartData[];
}

export const ClientBarChart = ({ data }: ClientBarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="month" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip
          contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
          labelStyle={{ color: '#F3F4F6' }}
        />
        <Bar dataKey="deployments" fill="#10B981" name="Deployments" />
        <Bar dataKey="failures" fill="#EF4444" name="Failures" />
      </BarChart>
    </ResponsiveContainer>
  );
};
