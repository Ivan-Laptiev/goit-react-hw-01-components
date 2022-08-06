import user from 'data/user.json';
import { Profile } from 'components/Profile/Profile.jsx';
import data from 'data/data.json';
import {Statistics} from '../Statistics/Statistics.jsx';
import friends from 'data/friends.json';
import {FriendList} from '../Friends/Friends.jsx';
import transactions from 'data/transactions.json';
import {TransactionHistory} from '../Transactions/Transactions.jsx'


export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        padding: '50px 0',
      }}
    >
      < Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendsList={friends} />  
      <TransactionHistory items={transactions} />
    </div>
  );
};
