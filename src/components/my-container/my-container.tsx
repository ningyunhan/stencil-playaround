import { Component, h, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-container',
  styleUrl: 'my-container.css',
  shadow: true,
})
export class MyContainer {

  @Element() el: HTMLElement;
  @Prop() cardsPerPage: number = 3;
  @State() pages: number;

  private slidesCount: number = 0;

  connectedCallback() {
    this.slidesCount = this.el.querySelectorAll('my-card').length;    
    const cardsNum = this.cardsPerPage || 3;
    this.pages = Math.ceil(this.slidesCount / cardsNum);
    
  }

  render() {
    return (
      <ul class='card-container'>
        <slot/>
      </ul>
    );
  }

}
