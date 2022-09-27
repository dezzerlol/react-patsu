import React from 'react';
import * as ReactDOM from 'react-dom';
import { Avatar } from './Avatar';


describe('Avatar', () => {
  it('passes src and alt to image', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar src="foo" alt="bar" />, div);
    const img = div.querySelector('img');
    expect(img!.src).toBe('foo');
    expect(img!.alt).toBe('bar');
  });
});
