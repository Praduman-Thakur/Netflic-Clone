import React from "react";

const FrequentText = ({ text, setText }) => {
  if (text === true) {
    return (
      <div className="text">
        <span>
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.
          <br />
          <br /> You can watch as much as you want, whenever you want, without a
          single ad – all for one low monthly price. There's always something
          new to discover, and new TV shows and movies are added every week!
        </span>
      </div>
    );
  }
};

export default FrequentText;
