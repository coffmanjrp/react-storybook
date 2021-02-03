import Button from '../components/Button';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: 'form/Buttons',
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
export const Warning = () => <Button variant="warning">Warning</Button>;
export const Info = () => <Button variant="info">Info</Button>;
export const Light = () => <Button variant="light">Light</Button>;
export const Dark = () => <Button variant="dark">Dark</Button>;
export const Link = () => <Button variant="link">Link</Button>;
