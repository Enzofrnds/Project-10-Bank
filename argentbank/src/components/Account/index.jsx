import './Account.css';

function Account({ title, amount, description }) {
    return (
        <div className="account">
            <div className="account__content">
                <h3 className="account__title">{title}</h3>
                <p className="account__amount">{amount}</p>
                <p className="account__description">{description}</p>
            </div>
            <div className="account__content__cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </div>
    );
}