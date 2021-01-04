
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class doctors extends PolymerElement {
  static get template() {
    return html`
    <style include="app-grid-style">

    :host {
      --app-grid-columns: 3;
      --app-grid-item-height: 100px;
      --app-grid-gutter: 10px;
      --app-grid-expandible-item-columns: 2;
          --app-grid-item-height: 20vw;
    }

    .app-grid {
      padding: 0;
      list-style: none;
    }

    .item {
      background-color: white;
      border: 1px solid #000;
    }

    @media (max-width: 640px) {
      :host {
        --app-grid-columns: 1;
      }
    }

  </style>
    <h2>Our Doctors</h2>
    <div class="app-grid">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>    
    `;
  }
}

window.customElements.define('our-doctors', doctors);