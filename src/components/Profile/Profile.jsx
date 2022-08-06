import {ProfileStyle, Description, AvatarProfile, NameProfile, TagProfile, Location, StatsList, LabelProfile, StatsItem, Quantity} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile =  ({username, tag, location, avatar, stats}) => {
return (
<ProfileStyle>
  <Description>
    <AvatarProfile
      src= {avatar}
      alt="User avatar"      
    />
    <NameProfile>{username}</NameProfile>
    <TagProfile> {tag}</TagProfile>
    <Location> {location}</Location>
  </Description>

  <StatsList>
    <StatsItem>
      <LabelProfile>Followers </LabelProfile>
      <Quantity>{stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <LabelProfile>Views </LabelProfile>
      <Quantity>{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <LabelProfile>Likes </LabelProfile>
      <Quantity>{stats.likes}</Quantity>
    </StatsItem>
  </StatsList>
</ProfileStyle>
);
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};