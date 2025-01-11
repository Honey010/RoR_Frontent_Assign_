import React, { useState, useEffect } from 'react';
import { fetchStatistics } from '../api/apiService';

const Statistics = ({ month }) => {
    const [stats, setStats] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await fetchStatistics({ month });
            setStats(data);
        };
        fetchData();
    }, [month]);

    return (
        <div>
            <h3>Statistics</h3>
            <p>Total Sale Amount: {stats.totalSales}</p>
            <p>Total Sold Items: {stats.totalSold}</p>
            <p>Total Not Sold Items: {stats.totalNotSold}</p>
        </div>
    );
};

export default Statistics;
