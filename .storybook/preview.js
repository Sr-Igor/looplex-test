import { Provider as Antd } from 'providers/antd';
import { Provider as Query } from 'providers/query-client';
import { Provider as Redux } from 'providers/redux';
import { Provider as Session } from 'providers/session';
import { Provider as Styled } from 'providers/styled';

export const decorators = [
  (Story) => (
    <Styled>
      <Query>
        <Redux>
          <Session>
            <Antd><Story /></Antd>
          </Session>
        </Redux>
      </Query>
    </Styled>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout:'fullscreen',
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#343a40',
      },
    ],
  },
}

