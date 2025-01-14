import React, { useEffect, useRef } from 'react';
import * as AsciinemaPlayerLibrary from 'asciinema-player';
import 'asciinema-player/dist/bundle/asciinema-player.css';

type AsciinemaPlayerProps = {
  src: string;
  cols: string;
  rows: string;
  autoPlay: boolean;
  preload: boolean;
  loop: boolean | number;
  startAt: number | string;
  speed: number;
  idleTimeLimit: number;
  theme: string;
  poster: string;
  fit: string;
  fontSize: string;
};

function AsciinemaPlayer({
  src,
  ...asciinemaOptions
}: React.FC<AsciinemaPlayerProps>): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentRef = ref.current;
    AsciinemaPlayerLibrary.create(src, currentRef, asciinemaOptions);
  }, [src, asciinemaOptions]);

  return <div ref={ref} />;
}

export default AsciinemaPlayer;
