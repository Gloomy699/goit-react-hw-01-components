import './App.css';
import Profile from './components/Profile/Profile';
import StatisticList from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory/TransactionHistory';

import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticList title="My Uploads" stats={statisticalData} />
      <FriendList items={friends} />
      <TransactionHistory props={transactions} />
    </div>
  );
}

export default App;
