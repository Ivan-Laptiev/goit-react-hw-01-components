import {StatisticsItem} from '../StatisticsItem/StatisticsItem';
import { StatisticsList, Title, StatisticsTitle } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
return (
  <StatisticsTitle>
    {title && (<Title>{title}</Title>)}

    <StatisticsList>
    {stats.map(({id, label, percentage}) =>(
      <StatisticsItem key={id} label={label} percentage={percentage}/>
    ))}
    </StatisticsList>
  </StatisticsTitle>
);
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
