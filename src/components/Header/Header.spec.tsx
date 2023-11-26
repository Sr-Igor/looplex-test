import { schema } from 'schemas/header';

import { render, screen } from 'utils/tests-utils';

import { Header } from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() }))
}));

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => ({})),
  signOut: jest.fn()
}));

describe('<Main />', () => {
  it('should render the component', () => {
    const { container } = render(
      <Header onPressLogin={() => console.log('teste')} schema={schema} />
    );

    expect(screen.getByText(schema.do_login)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
