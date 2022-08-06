import { TransactionsItem } from '../TransactionsItem/TransactionsItem';
import {TransactionsTable, HeadTable} from './Transactions.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  
  return (
    <TransactionsTable>
      <HeadTable >
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </HeadTable>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionsItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};