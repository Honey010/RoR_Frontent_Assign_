import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../api/apiService';

const TransactionTable = ({ month }) => {
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await fetchTransactions({ month, search, page });
            setTransactions(data.transactions);
        };
        fetchData();
    }, [month, search, page]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search transactions"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Date of Sale</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction._id}>
                            <td>{transaction.title}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.price}</td>
                            <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
                            <td>{transaction.sold ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
            <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </div>
    );
};

export default TransactionTable;
