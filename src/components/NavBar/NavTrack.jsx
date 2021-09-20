import React from "react";

export const NavTrack = (props) => {
  const { navTrackClass, ida } = props;
  return (
    <div className={navTrackClass}>
      <a id={ida}>help</a>
      <a id={ida}>exchanges & returns</a>
      <a id={ida}>order tracker</a>
      <a id={ida}>gift cards</a>
      <a id={ida}>become a member</a>
      <a id={ida}>creators club</a>
      <a id={ida}>sign in</a>
    </div>
  );
};
