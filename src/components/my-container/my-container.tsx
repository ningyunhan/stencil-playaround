import { Component, h, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-container',
  styleUrl: 'my-container.css',
  shadow: true,
})
export class MyContainer {
  @Element() el: HTMLElement;
  @Prop() cardsPerPage: number = 3;
  @State() currentPage: number = 1;

  private slidesCount: number = 0;
  private pages: number;
  private shadowRoot;

  connectedCallback() {
    this.slidesCount = this.el.querySelectorAll('my-card').length;
    const cardsNum = this.cardsPerPage || 3;
    this.pages = Math.ceil(this.slidesCount / cardsNum);

    this.shadowRoot = this.el.shadowRoot;
    // this.shadowRoot.querySelector('ul').style.width = `${this.pages > 1 ? 1 : 1}00%`
  };

  private onClickSlider = (page) => {
    this.currentPage = page;
  };

  render() {
    return (
      <div class="container-wrapper">
        <div class="card-container">
          <slot/>
        </div>
        {this.pages > 1 ? (
          <div class="slider-button-container item-centered" style={{"marginTop": "3rem"}}>
            {Array.from(Array(this.pages)).map((item, index) => (
              <input type="radio" key={index} name="test" checked={index + 1 === this.currentPage} onClick={() => {this.onClickSlider(index + 1)}}/>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
