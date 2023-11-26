import { Story, Meta } from '@storybook/react/types-6-0';
import { schema } from 'schemas/header';

import { Header } from '.';

export default {
  title: 'Header',
  component: Header
} as Meta;

export const Basic: Story = (args) => (
  <Header onPressLogin={() => console.log('teste')} schema={schema} {...args} />
);
