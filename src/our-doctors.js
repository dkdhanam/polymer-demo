/**
 * @license
 * @author Dhanasekaran
 * import Polymer app-layout
 * import Polymer iron-image
 * import Polymer iron-ajax
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-styles.js';

// Define the new element as a class
class doctors extends PolymerElement {
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
    iron-image {
        width: 300px;
        height: 300px;
      }
    @media (max-width: 767px) {
      :host {
        --app-grid-columns: 1;
      }
    }
    @media screen and (min-width:767px) and (max-width: 1024px){
      :host {
        --app-grid-columns: 2;
      }
    }

  </style>

  <!-- card starts here -->
  <div class="card">
    <div class="page-title center">
      <h3>Our Doctores</h3>
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
      <dom-repeat items="[[users.doctorList]]">
        <template strip-whitespace="">
            <div class="item center team-block">
                <div class="inner-box"> 
                  <div class="image"> 

                    <!-- using iron-image to show image-->
                    <iron-image class="image" sizing = "contain" preload src="[[item.image]]"></iron-image>
                    
                    <div class="content">     
                      <h2>[[item.name]]</h2>
                      <p>[[item.title]]</p>
                    </div>
                </div>
            </div>
          </template>
        </dom-repeat>
        <!-- dom repeat ends here -->
    </div>
  </div>  
  <!-- card ends here -->
    `;
  }
  static get properties() {
    return {
     
    };
  } 
}
// Register the element with the browser.
window.customElements.define('our-doctors', doctors);
