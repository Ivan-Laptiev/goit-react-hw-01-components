import { FriendsItem } from '../FriendsItem/FriendsItem';
import PropTypes from 'prop-types';
import {Container} from './Friends.styled';

export const FriendList = ({ friendsList }) => {
  return (
    <Container>
      {friendsList.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Container>
  );
};

FriendList.propTypes = {
  friendsList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};