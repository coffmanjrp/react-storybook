import Input from '../components/Input';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: 'form/Inputs',
  component: Input,
};

export const Small = () => <Input size="small" placeholder="Small size" />;
export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;

Small.storyName = 'Small Input';
Medium.storyName = 'Medium Input';
Large.storyName = 'Large Input';
