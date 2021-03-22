import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'my-container',
  styleUrl: 'my-container.css',
  shadow: false,
})
export class MyContainer {
  @Element() el: HTMLElement;

  private pages: number;
  private currentPage: number = 1;
  private cardContainer: HTMLElement;

  connectedCallback() {
    this.pages = this.el.querySelectorAll('my-card-group').length;
  }

  private onClickSlider = page => {
    if (this.currentPage === page) return;
    this.cardContainer = this.el.shadowRoot.querySelector('.card-container');
    this.cardContainer.style.transform = `translateX(${-100 * (page - 1)}%)`;
    this.currentPage = page;
  };

  render() {
    return (
      <div class="card-wrapper p-0.5">
        <div class="card-container">
          <slot />
        </div>
        {this.pages > 1 ? (
          <div class="slider-button-container item-centered" style={{ marginTop: '3rem' }}>
            {Array.from(Array(this.pages)).map((item, index) => (
              <input
                type="radio"
                key={index}
                name="test"
                checked={index + 1 === this.currentPage}
                onClick={() => {
                  this.onClickSlider(index + 1);
                }}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
