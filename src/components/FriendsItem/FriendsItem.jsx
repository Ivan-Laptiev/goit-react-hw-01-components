import {Item, Status, Avatar, Name} from './FriendsItem.styled'

export const FriendsItem = ({ avatar, name, isOnline }) => {
    const status = isOnline ? 'status__online' : 'status__offline';
    return (
      <Item>
        <Status type={status} ></Status>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
      </Item>
    );
  };