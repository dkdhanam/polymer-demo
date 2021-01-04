import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class HomePage extends PolymerElement {
  static get template() {
    return html`
    <h2>Home Page</h2>
    `;
  }
}

window.customElements.define('home-page', HomePage);