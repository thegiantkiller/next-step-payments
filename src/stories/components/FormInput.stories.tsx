import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormInput } from 'components/UI';

export default {
  title: 'Input',
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />;

export const primary = Template.bind({});

primary.args = {
  theme: 'primary',
  placeholder: 'primary',
  active: true,
};
export const underline = Template.bind({});

underline.args = {
  theme: 'underline',
  placeholder: 'underline',
  active: true,
};