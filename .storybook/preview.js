import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';

addDecorator(story => (
  <>
    <GlobalStyle />
    <div style={{padding: '1rem'}}>{story()}</div>
  </>
));