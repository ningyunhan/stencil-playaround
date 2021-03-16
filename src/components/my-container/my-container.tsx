import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-container',
  styleUrl: 'my-container.css',
  shadow: true,
})
export class MyContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
