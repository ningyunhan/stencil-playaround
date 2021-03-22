import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: false,
})
export class MyCard {
  render() {
    return (
      <div>
        <div class="card item-centered">
          <slot/>
        </div>
      </div>
    );
  }

}
