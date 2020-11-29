import PropTypes from 'prop-types';
import s from './FriendList.module.css'
import FriendListItem from './FriendListItem/FriendListItem';

function FriendList({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  items: PropTypes.array.isRequired,
};