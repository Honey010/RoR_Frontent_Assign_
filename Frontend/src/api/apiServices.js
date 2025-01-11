import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchTransactions = (params) => API.get('/transactions/list', { params });
export const fetchStatistics = (params) => API.get('/transactions/statistics', { params });
export const fetchBarChart = (params) => API.get('/transactions/barchart', { params });
export const fetchPieChart = (params) => API.get('/transactions/piechart', { params });
export const fetchCombinedData = (params) => API.get('/transactions/combined', { params });
