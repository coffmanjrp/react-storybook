import Badge from '../components/Badge';

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: 'components/Badges',
  component: Badge,
  args: {
    children: 'Badge',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: variants,
      },
    },
    isRounded: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Standard = (args) => <Badge {...args} />;
Standard.args = {
  variant: 'secondary',
};

export const Example = (args) => {
  return (
    <>
      <h1>
        Example heading <Badge {...args} />
      </h1>
      <h2>
        Example heading <Badge {...args} />
      </h2>
      <h3>
        Example heading <Badge {...args} />
      </h3>
      <h4>
        Example heading <Badge {...args} />
      </h4>
      <h5>
        Example heading <Badge {...args} />
      </h5>
      <h6>
        Example heading <Badge {...args} />
      </h6>
    </>
  );
};
Example.args = {
  children: 'New',
  variant: 'secondary',
};

export const withButton = (args) => {
  return (
    <>
      <button type="button" class="btn btn-primary">
        Notifications <Badge {...args} />
      </button>
    </>
  );
};
withButton.args = {
  children: '5',
  variant: 'secondary',
};

export const All = (args) => {
  return variants.map((variant) => (
    <Badge variant={variant} {...args}>
      {variant}
    </Badge>
  ));
};

export const Rounded = (args) => {
  return variants.map((variant) => (
    <Badge variant={variant} {...args}>
      {variant}
    </Badge>
  ));
};
Rounded.args = {
  isRounded: true,
};

Standard.storyName = 'Standard Badge';
Example.storyName = 'Examples';
withButton.storyName = 'Button with Badge';
All.storyName = 'All Colors';
Rounded.storyName = 'Pill Badges';
