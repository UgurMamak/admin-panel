import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#7F56D9',
        '#9E77ED',
        '#B692F6',
        '#D6BBFB',
        '#E9D7FE',
        '#EAECF0',
      ],
      borderColor: [
        '#7F56D9',
        '#9E77ED',
        '#B692F6',
        '#D6BBFB',
        '#E9D7FE',
        '#EAECF0',
      ],
      borderWidth: 1,
    },
  ],
};

export const DoughnutChart = () => {
  return <Doughnut data={DoughnutChartData} />;
}


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const lineChartData = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: '#7F56D9',
      backgroundColor: '#7F56D9',
    },
  ],
};

export const LineChart = () => {
  return <Line options={options} data={lineChartData} />;
}


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const stackedOptions = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const stackedLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const stackedData = {
  labels: stackedLabels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100, 200, 300, 400, 500, 600, 700],
      backgroundColor: '#EAECF0',
    },
    {
      label: 'Dataset 2',
      data: [150, 250, 350, 450, 550, 650, 750],
      backgroundColor: '#9E77ED',
    },
    {
      label: 'Dataset 3',
      data: [115, 215, 315, 415, 515, 615, 715],
      backgroundColor: '#6941C6',
    },
  ],
};


export const StackedChart = () => {
  return <Bar options={stackedOptions} data={stackedData} />;
}
