import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ dataValues }) {
  const data = {
    labels: ['Cuisine', 'Douche', 'Lavabo', 'Jardin'],
    datasets: [
      {
        label: 'Consommation d\'eau (en litres)',
        data: dataValues, // Les données passées en props
        backgroundColor: [
          'royalblue',
          'red',
          'yellow',
          'green'
        ],
       
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ width: '25%', height: '25%' }}> 
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default PieChart;
