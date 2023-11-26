'use client';

import { useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { PlusOutlined } from '@ant-design/icons';
import * as services from 'hook/user';
import { useAppSelector } from 'hook/useRedux';
import { useAppDispatch } from 'hook/useRedux';
import { IUser } from 'interfaces/user';
import { schema, uiSchema } from 'schemas/form';
import { schema as texts } from 'schemas/list';
import { useTheme } from 'styled-components';

import { Button } from 'components/Buttons/Default';
import { FormList } from 'components/Form';
import { Modal } from 'components/Modal';
import { Pagination } from 'components/Pagination';
import { Title } from 'components/Title';
import { User } from 'components/User';

import Dashboard from 'templates/Dashboard';

const limit = 2;

export type InfosType = {
  modal: boolean;
  user: IUser;
  method: 'put' | 'post';
};

export default function ListPage() {
  const dispatch = useAppDispatch();

  const [infos, setInfos] = useState<InfosType>({
    modal: false,
    user: {},
    method: 'post'
  });

  const users = useAppSelector((state) => state.users.user);

  const [errors, setErrors] = useState<string[]>([]);

  const theme = useTheme();

  const handleSchema = useMemo(() => {
    if (infos.method === 'put') {
      return {
        ...uiSchema,
        email: {
          ...uiSchema.email,
          'ui:inputProps': {
            ...uiSchema.email['ui:inputProps'],
            disabled: true
          }
        }
      };
    } else {
      return uiSchema;
    }
  }, [infos]);

  //----------------------------- QUERY && MUTATIONS -----------------------------//
  const { mutate: update, isLoading: isLoadingMutate } = useMutation({
    mutationFn: (user: IUser) => services.updateUser(user, dispatch),
    onSuccess: () => {
      //NOTE! In real case we update this with method setData provided by react-query
      setInfos({ modal: false, user: {}, method: 'post' });
    }
  });

  const { mutate: create, isLoading: isLoadingCreate } = useMutation({
    mutationFn: (user: IUser) => services.createUser(user, dispatch, users),
    onSettled: (data) => {
      if (data instanceof Error) {
        //NOTE! In real case we update this with method setData provided by react-query
        setErrors([data.message]);
      } else {
        setErrors([]);
        setInfos({ modal: false, user: {}, method: 'post' });
      }
    }
  });

  const { mutate: destroy, isLoading: isLoadingDestroy } = useMutation({
    mutationFn: (user: IUser) => services.deleteUser(user, dispatch),
    onSuccess: () => {
      //NOTE! In real case we update this with method setData provided by react-query
      setInfos({ modal: false, user: {}, method: 'post' });
    }
  });

  const [page, setPage] = useState(1);
  const { data } = useQuery(['index-users', { users, page }], () =>
    services.listUsers({ limit, offset: page }, users)
  );

  //----------------------------- RENDER -----------------------------//s
  return (
    <Dashboard>
      <Title>{texts.title}</Title>
      <Button
        onClick={() => setInfos({ modal: true, user: {}, method: 'post' })}
        icon={<PlusOutlined />}
        style={{
          margin: `${theme.spacings.small} 0px`
        }}
      >
        {texts.new}
      </Button>

      {data?.map((user) => (
        <User
          key={user.email}
          user={user}
          onClick={(user) => setInfos({ modal: true, user, method: 'put' })}
          onDelete={(user) => destroy(user)}
        />
      ))}

      {data?.length === 0 && (
        <Title
          style={{
            height: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {texts.empty}
        </Title>
      )}

      <Pagination
        current={page}
        total={users.length}
        pageSize={limit}
        onChange={(page) => setPage(page)}
      />

      <Modal
        open={infos.modal}
        setOpen={(modal) => setInfos((prev) => ({ ...prev, modal }))}
      >
        <FormList
          schema={schema}
          uiSchema={handleSchema}
          onCancel={() => {
            setErrors([]);
            setInfos({ modal: false, user: {}, method: 'post' });
          }}
          initialValues={infos.user}
          onSubmit={infos.method === 'put' ? update : create}
          loading={isLoadingMutate || isLoadingCreate || isLoadingDestroy}
          validationErrors={errors}
        />
      </Modal>
    </Dashboard>
  );
}
