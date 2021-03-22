import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-card-group',
  styleUrl: 'my-card-group.css',
  shadow: false,
})
export class MyCardGroup {
  render() {
    return (
      <Host>
        <div class="card-group">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
