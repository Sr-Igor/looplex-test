'use client';

import { StaticImageData } from 'next/image';
import { useEffect } from 'react';

import MediaMatch from 'components/MediaMatch';

import * as S from './styled';

export interface DropProps {
  onClick: () => void;
  loggedIn: boolean;
  schema: {
    logo: StaticImageData;
    do_login: string;
    panel: string;
    subtitle: string;
    title: string;
    drops: {
      title: string;
      timer: number;
      drop: number;
    }[];
  };
}

export const Scale = ({ loggedIn, onClick, schema }: DropProps) => {
  useEffect(() => {
    schema.drops.forEach((item, key) => {
      const rectangle = document.getElementById(`rectangle-${key}`);

      if (rectangle) {
        setTimeout(() => {
          rectangle.classList.add('slide');
        }, item.timer);

        setTimeout(() => {
          rectangle.classList.add('drop');
        }, item.drop);
      }
    });
  }, [schema.drops]);

  return (
    <S.Container>
      <S.Information>
        <S.Logo src={schema.logo} alt={'logo'} />
        <S.Subtitle>{schema.subtitle}</S.Subtitle>
      </S.Information>

      <MediaMatch greaterThan="large">
        {schema.drops.reverse().map((item, key) => (
          <S.Rectangle
            className="slide"
            id={`rectangle-${key}`}
            key={`rectangle-${key}`}
            left={schema.drops.length - key}
          >
            <S.Text>{item?.title}</S.Text>
          </S.Rectangle>
        ))}
      </MediaMatch>

      <S.Wrapper>
        <S.Title>{schema.title}</S.Title>
        <S.Button onClick={onClick}>
          {loggedIn ? schema.panel : schema.do_login}
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
};
