import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {

  render() {
    return (
      <div class="card item-centered">
        <slot/>
      </div>
    );
  }

}
