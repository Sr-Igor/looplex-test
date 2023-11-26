import Image, { StaticImageData } from 'next/image';

import * as S from './styled';

export interface IFooterProps {
  schema: {
    text: string;
    url?: string;
    image?: StaticImageData;
  }[];
}

export const Footer = ({ schema }: IFooterProps) => {
  return (
    <S.Footer>
      {schema.map((item, key) => (
        <S.Content key={`footer-info-${key}`}>
          {item.image && (
            <Image src={item.image} alt={item.text} width={30} height={30} />
          )}
          {item.url && (
            <S.Anchor href={item.url} target="_blank" rel="noopener noreferrer">
              {item.text}
            </S.Anchor>
          )}
          {!item.url && <S.Text>{item.text}</S.Text>}
        </S.Content>
      ))}
    </S.Footer>
  );
};
