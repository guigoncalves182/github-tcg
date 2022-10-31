import regular from "./Regular.module.scss";
import legend from "./Legendary.module.scss";
import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

function Card({ github, legendary = false }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${github}`)
      .then((response) => response.json())
      .then((result) => setUser(result))
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  }, [github]);

  let glareColor;
  legendary ? (glareColor = "#f9d423") : (glareColor = "#ffffff");

  let styles;
  !legendary ? (styles = regular) : (styles = legend);

  if (loading) return "★ Loading your card ★";
  return (
    <a target="blank" href={user.html_url}>
      <Tilt
        className={styles.card}
        glareEnable={true}
        glareColor={glareColor}
        scale={1}
        style={{
          backgroundImage: `url("${
            user.avatar_url ? user.avatar_url : "https://picsum.photos/400/400"
          }")`,
        }}
      >
        <div className={styles.inner}>
          {user.name && (
            <h1 className={styles.title}>
              {legendary && <span className={styles.star}> ★ </span>}
              {user.name}
            </h1>
          )}
          {user.bio && <p className={styles.bio}>{user.bio}</p>}
          {user.location && (
            <p className={styles.location}>📍 {user.location} </p>
          )}
        </div>
      </Tilt>
    </a>
  );
}

export default Card;
