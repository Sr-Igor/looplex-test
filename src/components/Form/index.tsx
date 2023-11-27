import { useState } from 'react';

import { IUser } from 'interfaces/user';

import { RJSFSchema, UiSchema } from '@rjsf/utils';

import { texts } from './constants';

import { widgets, validator } from './schema';
import * as S from './styled';

export interface IFormListProps {
  onCancel: () => void;
  onSubmit: (data: IUser) => void;
  loading?: boolean;
  initialValues?: IUser;
  validationErrors?: string[];
  schema: RJSFSchema;
  uiSchema: UiSchema;
}

export const FormList = ({
  onCancel,
  onSubmit,
  loading,
  initialValues = {},
  validationErrors,
  schema,
  uiSchema
}: IFormListProps) => {
  const [formData, setFormData] = useState<IUser>(initialValues);

  return (
    <>
      <S.Title>{texts.title}</S.Title>
      <S.Errors>
        {validationErrors?.map((error, key) => (
          <S.Error key={`error-${key}`}>{error}</S.Error>
        ))}
      </S.Errors>
      <S.Root
        id="form-list"
        schema={schema}
        validator={validator}
        uiSchema={uiSchema}
        widgets={widgets}
        showErrorList={false}
        formData={formData}
        onChange={(e) => setFormData(e.formData as IUser)}
        onSubmit={(e) => onSubmit(e.formData as IUser)}
      >
        <S.Footer>
          <S.Action
            data-testid="cancel-button"
            danger
            onClick={onCancel}
            disabled={loading}
          >
            {texts.cancel}
          </S.Action>
          <S.Action htmlType="submit" loading={loading}>
            {texts.save}
          </S.Action>
        </S.Footer>
      </S.Root>
    </>
  );
};
