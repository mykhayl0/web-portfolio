//
// MatchMedia.js
// Control which component is rendered depending on a specific media query.
//

import useMatchMedia from "../hooks/useMatchMedia";

export default function MatchMedia({ mediaQuery, children }) {
  const hasMatch = useMatchMedia(mediaQuery);

  if (!hasMatch) {
    return null;
  }

  return <>{children}</>;
}
