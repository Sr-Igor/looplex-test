import * as S from './styled';

export interface ISection {
  schema: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

export const Section = ({ schema }: ISection) => {
  return (
    <S.Root>
      {schema.map((item, key) => (
        <S.Section key={`section-${key}`} left={key % 2 === 0}>
          <S.IconArea>{item.icon}</S.IconArea>
          <S.Infos>
            <S.Title>{item.title}</S.Title>
            <S.Description>{item.description}</S.Description>
          </S.Infos>
        </S.Section>
      ))}
    </S.Root>
  );
};
