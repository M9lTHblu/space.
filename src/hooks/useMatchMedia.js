import {useEffect, useState} from 'react';

const sizes = [
  {width: '(max-width: 767px)', name: 'mobile'},
  {width: '(min-width: 767px) and (max-width: 1439px)', name: 'tablet'},
  {width: '(min-width: 1440px) and (max-width: 2559px)', name: 'laptop'},
  {width: '(min-width: 2560px)', name: 'desktop'},
];


const useMatchMedia = () => {

  const getInitialState = (sizes) => {
    for (const {width, name} of sizes) {
      if (window.matchMedia(width).matches) {
        return name;
      }
    }
  }

  const [width, setWidth] = useState(() => getInitialState(sizes));

  useEffect(() => {
    const handler = (name) => (e) => {
      if (e.matches) {
        setWidth(name);
      }
    };

    return sizes.map(({width, name}) => {
      const mQ = window.matchMedia(width);
      mQ.addEventListener('change', handler(name));

      return {mQ, name};
    }).forEach(({mQ}) => mQ.removeEventListener('change', handler));

  });

  return width;
};

export default useMatchMedia;
