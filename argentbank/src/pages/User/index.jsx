import './User.css';
import Account from '../../components/Account';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserProfile } from '../../features/userSlice';

const accountsData = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
    transactionHistory: [
      {
        date: '2020-27-02',
        description: 'Golden Sun Bakery',
        amount: 8.00,
        balance: 298.00,
      },
      {
        date: '2020-27-02',
        description: 'Golden Sun Bakery',
        amount: 8.00,
        balance: 298.00,
      },
      {
        date: '2020-27-02',
        description: 'Golden Sun Bakery',
        amount: 8.00,
        balance: 298.00,
      },
    ],
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
    transactionHistory: [
      {
        date: '2020-27-02',
        description: 'Golden Sun Bakery',
        amount: 8.00,
        balance: 298.00,
      },
      {
        date: '2020-27-02',
        description: 'Golden Sun Bakery',
        amount: 8.00,
        balance: 298.00,
      },
      {
        date: '2020-27-02',
        description: 'Golden Sun Bakery',
        amount: 8.00,
        balance: 298.00,
      },
    ],
  },
  {
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
    transactionHistory: [
      {
        date: '2020-27-02',
        description: 'Golden Sun Bakery',
        amount: 8.00,
        balance: 298.00,
      },
      {
        date: '2020-27-02',
        description: 'Golden Sun Bakery',
        amount: 8.00,
        balance: 298.00,
      },
      {
        date: '2020-27-02',
        description: 'Golden Sun Bakery',
        amount: 8.00,
        balance: 298.00,
      },
    ],
  },
];



function User() {
  const user = useSelector((state) => state.user.user) || {};
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState(user.username || '');

  const handleEditClick = () => {
    dispatch(setUserProfile({ ...user, username }));
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(setUserProfile({ ...user, username: formData.get('username') }));
    setEditing(false);
  }
  
  return (
    <main className="main main bg-dark">
      <div className="header-user">
        {!editing && (
          <>
            <h1>Welcome back<br />{user.firstName} {user.lastName}</h1>
            <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
          </>
        )}

        {editing && (
          <form className="edit-name-form" onSubmit={handleSave}>
            <div className="input-row">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-row">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" value={user.firstName || ''} readOnly />
            </div>

            <div className="input-row">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" value={user.lastName || ''} readOnly />
            </div>

            <div className="edit-actions">
              <button type="submit" className="save-button">Save</button>
              <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>
      {accountsData.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
          transactions={account.transactionHistory}
        />
      ))}
    </main>
  );
}

export default User;