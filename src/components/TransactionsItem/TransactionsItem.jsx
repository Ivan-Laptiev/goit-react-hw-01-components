import {Row} from './TransactionsItem.styled';


export const TransactionsItem = ({ type, amount, currency }) => {
  return (
    <Row>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Row>
  );
};