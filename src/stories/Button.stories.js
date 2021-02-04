import Button from '../components/Button';

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'link',
];

const sizes = ['sm', 'md', 'lg'];

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: 'components/Buttons',
  component: Button,
  args: {
    label: 'Button',
  },
  argTypes: {
    label: {
      table: {
        type: {
          summary: 'node',
        },
      },
      control: {
        type: 'text',
      },
    },
    variant: {
      table: {
        type: {
          summary: [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
            'link',
          ],
        },
      },
      control: {
        type: 'select',
        options: variants,
      },
    },
    size: {
      control: {
        type: 'radio',
        options: sizes,
      },
    },
    isOutlined: {
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  variant: 'primary',
  size: 'md',
};

export const All = (args) => {
  return (
    <>
      {variants.map((variant) => (
        <Button variant={variant} {...args}>
          {variant}
        </Button>
      ))}
    </>
  );
};
All.args = {
  size: 'md',
};

export const Sizes = (args) => {
  return (
    <>
      {sizes.map((size) => (
        <Button size={size} {...args}>
          {size}
        </Button>
      ))}
    </>
  );
};
Sizes.args = {
  variant: 'primary',
};
