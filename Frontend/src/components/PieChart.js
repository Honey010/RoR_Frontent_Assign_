import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { fetchPieChart } from '../api/apiService';

const PieChart = ({ month }) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await fetchPieChart({ month });
            setChartData(data);
        };
        fetchData();
    }, [month]);

    const data = {
        labels: Object.keys(chartData),
        datasets: [
            {
                label: 'Category Distribution',
                data: Object.values(chartData),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return <Pie data={data} />;
};

export default PieChart;

