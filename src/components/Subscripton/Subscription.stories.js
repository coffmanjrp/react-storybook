import React from 'react';
import { Primary } from '../../stories/Button.stories';
import { Large } from '../../stories/Input.stories';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: 'form/Subscription',
};

export const Subscription = () => {
  return (
    <>
      <Large />
      <Primary />
    </>
  );
};
