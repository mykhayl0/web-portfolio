import useMatchMedia from "../hooks/useMatchMedia";

// Control which component is rendered depending on a specific media query.
export default function MatchMedia({ mediaQuery, children }) {
  const hasMatch = useMatchMedia(mediaQuery);

  if (!hasMatch) {
    return null;
  }

  return <>{children}</>;
}
