import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogOut, Activity, CreditCard, Wallet, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // We should store the token in Login/Signup
    const userData = localStorage.getItem('user');

    if (!userData) {
      navigate('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);

    // Fetch real profile from the fresh backend
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://backend-five-ruddy-91.vercel.app/api/user/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUser(response.data);
      } catch (err) {
        console.error("Failed to fetch profile");
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    // We would ideally call the backend logout endpoint here
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="nav-brand">
          <Activity size={24} />
          Ledger Dashboard
        </div>
        <button onClick={handleLogout} className="btn-logout">
          <LogOut size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
          Sign Out
        </button>
      </nav>

      <main style={{ marginTop: '2rem' }}>
        <header className="dashboard-header">
          <h1 className="welcome-text">Welcome back, {user.name}!</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Here is your financial overview for today.</p>
        </header>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="stat-title">Total Balance</span>
              <Wallet size={20} color="var(--primary)" />
            </div>
            <span className="stat-value">$12,450.00</span>
          </div>
          
          <div className="stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="stat-title">Monthly Income</span>
              <TrendingUp size={20} color="var(--secondary)" />
            </div>
            <span className="stat-value">$4,200.00</span>
          </div>

          <div className="stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="stat-title">Active Cards</span>
              <CreditCard size={20} color="#F59E0B" />
            </div>
            <span className="stat-value">3</span>
          </div>
        </div>

        <div className="glass-card" style={{ maxWidth: '100%', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: '600' }}>Recent Transactions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { id: 1, name: 'Grocery Store', date: 'Today, 10:24 AM', amount: '-$84.50', type: 'expense' },
              { id: 2, name: 'Salary Deposit', date: 'Yesterday', amount: '+$4,200.00', type: 'income' },
              { id: 3, name: 'Electric Bill', date: 'Oct 24, 2026', amount: '-$120.00', type: 'expense' }
            ].map((tx) => (
              <div key={tx.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: tx.type === 'income' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {tx.type === 'income' ? <TrendingUp size={18} color="var(--secondary)" /> : <Activity size={18} color="#ef4444" />}
                  </div>
                  <div>
                    <div style={{ fontWeight: '500' }}>{tx.name}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{tx.date}</div>
                  </div>
                </div>
                <div style={{ fontWeight: '600', color: tx.type === 'income' ? 'var(--secondary)' : 'white' }}>
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
