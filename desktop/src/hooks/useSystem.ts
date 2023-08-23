import { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

export enum System {
  MACOS = 'Mac OS',
}

const useSystem = () => {
  let [a] = useState({
    isMacos: false,
  });
  const up = new UAParser();

  useEffect(() => {
    return () => {
      a.isMacos = up.getOS().name?.toUpperCase() === System.MACOS.toUpperCase();
    };
  }, [up]);

  return [a];
};

export { useSystem };
