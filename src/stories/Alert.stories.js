import Alert from '../components/Alert';

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
  title: 'components/Alerts',
  component: Alert,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: variants,
      },
    },
    isDismissible: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => <Alert {...args} />;
export const Standard = Template.bind({});
Standard.args = {
  children: 'A simple standard alert—check it out!',
  variant: variants[0],
};

export const All = (args) => {
  return (
    <>
      {variants.map((variant) => (
        <Alert variant={variant} {...args}>
          {`A simple ${variant} alert—check it out!`}
        </Alert>
      ))}
    </>
  );
};

export const Link = (args) => {
  return (
    <>
      <Alert {...args}>
        A simple primary alert with{' '}
        <a href="#!" className="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </Alert>
    </>
  );
};
Link.args = {
  variant: variants[0],
};

export const Additional = (args) => {
  return (
    <>
      <Alert {...args}>
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
    </>
  );
};
Additional.args = {
  variant: variants[2],
};

export const Dismissible = (args) => {
  return (
    <>
      <Alert {...args}>
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
      </Alert>
    </>
  );
};
Dismissible.args = {
  variant: variants[4],
  isDismissible: true,
};

Standard.storyName = 'Standard Alert';
All.storyName = 'All Alert Colors';
Link.storyName = 'With Link';
Additional.storyName = 'Additional Content';
