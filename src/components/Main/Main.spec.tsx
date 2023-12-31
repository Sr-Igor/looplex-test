import { render, screen } from 'utils/tests-utils';

import { Main } from '.';

describe('<Main />', () => {
  it('should render the component', () => {
    const { container } = render(
      <Main>
        <h1>Next Example</h1>
      </Main>
    );

    expect(
      screen.getByRole('heading', { name: /next example/i })
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
