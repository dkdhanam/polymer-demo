/**
 * @license
 * @author Dhanasekaran
 * import Polymer app-layout
 * import Polymer iron-ajax
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-styles.js';

// Define the new element as a class
class services extends PolymerElement {
  static get template() {
    return html`
    <style include="app-grid-style shared-styles">
      :host {
        --app-grid-columns: 4;
        --app-grid-item-height: auto;
        --app-grid-gutter: 10px;
        --app-white-color: #ffffff;
        --app-grid-expandible-item-columns: 2;
            --app-grid-item-height: auto;
      }
      .item {
        background: var(--app-white-color);
        border: 1px solid;
        border-radius: 10px;
        padding: 15px;
      }
      @media (max-width: 767px) {
        :host {
          --app-grid-columns: 1;
        }
      }
      @media screen (min-width:767px) and (max-width: 1024px){
        :host {
          --app-grid-columns: 2;
        }
      }

    </style>
  
    <div class="card">
      <div class="page-title center">
        <h3>Service We Provide</h3>
        <p>Replenish him third creature and meat most of the blessed best of the void a fruit gathered.</p>
      </div>
      
      <!-- app grid starts here -->
      <div class="app-grid">
      <!-- Iron ajax for fetching data from json file -->
      <iron-ajax 
                auto 
                url="./src/doctors.json" 
                handle-as="json"
               last-response="{{users}}">
        </iron-ajax>

        <!-- dom repeat starts here -->
        <dom-repeat items="[[users.serviceList]]">
          <template strip-whitespace="">            
              <div class="item center">
              <div class="number-box">
                  <div class="number"><span>{{item.id}}</span></div>
              </div>
                <h2>{{item.name}}</h2>
                <p>{{item.title}}</p>
              </div>             
            </template>
          </dom-repeat>
          <!-- dom repeat ends here -->
      </div>
    </div>
    `;
  }

  // creating properties
  static get properties() {
    return {
      
    };
  } 
}
// Register the element with the browser.
window.customElements.define('our-services', services);
