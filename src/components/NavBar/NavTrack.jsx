import React from "react";

export const NavTrack = (props) => {
  const { navTrackClass, ida } = props;
  return (
    <div className={navTrackClass}>
      <a href="#" id={ida}>
        help
      </a>
      <a href="#" id={ida}>
        exchanges & returns
      </a>
      <a href="#" id={ida}>
        order tracker
      </a>
      <a href="#" id={ida}>
        gift cards
      </a>
      <a href="#" id={ida}>
        become a member
      </a>
      <a href="#" id={ida}>
        creators club
      </a>
      <a href="#" id={ida}>
        sign in
      </a>
    </div>
  );
};
