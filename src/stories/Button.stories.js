import Button from '../components/Button';
// import Center from '../components/Center/Center';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: 'form/Buttons',
  component: Button,
  args: {
    children: 'Button',
  },
  // argTypes: {
  //   onClick: { action: 'clicked!' },
  // },
  // decorators: [(story) => <Center>{story()}</Center>],
};

const Template = (args) => (
  <Button {...args} onClick={() => console.log('Button clicked')} />
);
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
  size: 'md',
};

export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
export const Warning = () => <Button variant="warning">Warning</Button>;
export const Info = () => <Button variant="info">Info</Button>;
export const Light = () => <Button variant="light">Light</Button>;
export const Dark = () => <Button variant="dark">Dark</Button>;
export const Link = () => <Button variant="link">Link</Button>;
