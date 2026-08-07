import './Account.css';
import { useState } from 'react';


function Account({ title, amount, description, transactions = [] }) {
    const [open, setOpen] = useState(false);
    const [openTransactionIndex, setOpenTransactionIndex] = useState(null);

    const formatMoney = (value) => {
        const numericValue = typeof value === 'number' ? value : Number(value);

        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(numericValue);
    };

    const handleToggleTransaction = (index) => {
        setOpenTransactionIndex((currentIndex) => (currentIndex === index ? null : index));
    };

    return (
        <div className="account">
            <div className="account__content">
                <h3 className="account__title">{title}</h3>
                <p className="account__amount">{amount}</p>
                <p className="account__description">{description}</p>
            </div>
            <div className="account__content__cta">
                <button className="transaction-button" onClick={() => setOpen(!open)}>
                    {open ? 'Hide Transactions' : 'View Transactions'}
                </button>
                {open ? (
                    <div className="transaction-history">
                        <div className="transaction-history__header" aria-hidden="true">
                            <span>Date</span>
                            <span>Description</span>
                            <span>Amount</span>
                            <span>Balance</span>
                            <span />
                        </div>

                        <div className="transaction-history__list">
                            {transactions.map((transaction, index) => (
                                <div className="transaction-item" key={`${transaction.date}-${index}`}>
                                    <button
                                        type="button"
                                        className="transaction-item__summary"
                                        onClick={() => handleToggleTransaction(index)}
                                        aria-expanded={openTransactionIndex === index}
                                    >
                                        <span>{transaction.date}</span>
                                        <span>{transaction.description}</span>
                                        <span>{formatMoney(transaction.amount)}</span>
                                        <span>{formatMoney(transaction.balance)}</span>
                                        <span className="transaction-item__toggle" aria-hidden="true">
                                            {openTransactionIndex === index ? '▴' : '▾'}
                                        </span>
                                    </button>

                                    {openTransactionIndex === index ? (
                                        <div className="transaction-item__details">
                                            <p>
                                                <span>Transaction type</span>
                                                <span>{transaction.type || 'Electronic'}</span>
                                            </p>
                                            <p>
                                                <span>Category</span>
                                                <span className="transaction-item__value">
                                                    {transaction.category || 'Food'}
                                                </span>
                                            </p>
                                            <p>
                                                <span>Note</span>
                                                <span className="transaction-item__value">
                                                    {transaction.note || 'Add a note'}
                                                </span>
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
            
        </div>
    );
}

export default Account;