// 
// useMatchMedia.js
// Hook to switch between components when a specific media query is reached by the users display.
// 

import { useEffect, useMemo, useState } from 'react';

export default function useMatchMedia ( mediaQueryString ) {

  // Determine the size of the user display.
  const mediaQueryList = useMemo( () => window.matchMedia( mediaQueryString ), [mediaQueryString] );
  // When the user reaches a specific display size, setHasMatch with the specific media query.
  const [hasMatch, setHasMatch] = useState( mediaQueryList.matches );

  // Run the mediaQueryChangeHandler() anytime the media query list changes.
  useEffect( () => {
    const mediaQueryChangeHandler = ( event ) => {
      setHasMatch( event.matches );
    };

    // Listen for media query changes.
    mediaQueryList.addEventListener( 'change', mediaQueryChangeHandler );

    // Stop listening for media query changes.
    return () => {
      mediaQueryList.removeEventListener( 'change', mediaQueryChangeHandler );
    };
  }, [mediaQueryList] );

  // Return boolean true/false if the user display matches the set media query.
  return hasMatch; 
}