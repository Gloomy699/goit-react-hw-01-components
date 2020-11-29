import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile(props) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={props.avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{props.name}</p>
        <p className={s.tag}>{props.name}</p>
        <p className={s.location}>{props.location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers </span>
          <span className={s.quantity}>{props.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views </span>
          <span className={s.quantity}>{props.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes </span>
          <span className={s.quantity}>{props.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default Profile;