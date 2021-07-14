import { useLayoutEffect, useState } from 'react';

export default function useWindowPositions(id) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatedPosition() {
      const offetSetHeight = window.document.getElementById(id).offsetHeight;
      if (window.pageYOffset > offetSetHeight * 0.7) {
        setAnimation(true);
      }
    }
    window.addEventListener('scroll', updatedPosition);
    updatedPosition();
    return () => window.removeEventListener('scroll', updatedPosition);
  }, [id]);
  return animation;
}
