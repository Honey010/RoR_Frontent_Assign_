import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { fetchBarChart } from '../api/apiService';

const BarChart = ({ month }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await fetchBarChart({ month });
            setChartData(data);
        };
        fetchData();
    }, [month]);

    const data = {
        labels: ['0-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800', '801-900', '901+'],
        datasets: [
            {
                label: 'Number of Items',
                data: chartData,
                backgroundColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return <Bar data={data} />;
};

export default BarChart;
