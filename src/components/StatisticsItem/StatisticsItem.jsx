import {Item} from './StatisticItem.styled';

const randomColor = () =>
Math.floor(Math.random() * 16777215).toString(16);

export const StatisticsItem = ({ label, percentage }) => {
    const color = randomColor();
    return (
      <Item  style={{ backgroundColor: `#${color}` }}>
        <span >{label}</span>
        <span >{percentage}%</span>
      </Item>
    );
  };