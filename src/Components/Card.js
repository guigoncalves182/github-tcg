import styles from "./Card.module.scss";
import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

function Card({ github }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${github}`)
      .then((response) => response.json())
      .then((result) => setUser(result))
      .catch((error) => console.log("error", error));
  }, [github]);

  return (
    <a target="blank" href={user.html_url}>
      <Tilt
        className={styles.card}
        glareEnable={true}
        scale={1}
        style={{ backgroundImage: `url("${user.avatar_url}")` }}
      >
        <div className={styles.inner}>
          <h1 className={styles.name}>{user.name}</h1>
          {user.bio && <p className={styles.bio}>{user.bio}</p>}
          {user.location && <p className={styles.location}>📍 {user.location} </p>}
        </div>
      </Tilt>
    </a>
  );
}

export default Card;
