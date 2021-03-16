import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-container',
  styleUrl: 'my-container.css',
  shadow: true,
})
export class MyContainer {

  render() {
    return (
      <div class='card-container'>
        <slot/>
      </div>
    );
  }

}
