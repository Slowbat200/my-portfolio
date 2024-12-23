'use client'

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export const Snowfall = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: {
      enable: true,
    },
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.8,
        random: true,
      },
      size: {
        value: 5,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'bottom',
        random: false,
        straight: false,
        outModes: {
          default: 'out',
        },
      },
    },
    background: {
      color: {
        value: '#000000',
      },
    },
  };

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={particlesOptions} //@ts-ignore
    />
  );
};
