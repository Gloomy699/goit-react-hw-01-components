import user from "..user.json"

const user = {
    <div className="profile">
  <div className="description">
    <img
      src={data.avatar}
      alt="Аватар пользователя"
      class="avatar"
    />
    <p className="name">{data.name}</p>
    <p className="tag">{data.tag}</p>
    <p className="location">{data.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{data.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{data.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{data.stats.likes</span>
    </li>
  </ul>
</div>
}
}