
// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class servicesDetail extends PolymerElement {
    static get template() {
      return html`
      <app-location 
        route="{{route}}" 
        url-space-regex="^[[rootPath]]">
    </app-location>
    <!-- App Route -->
    <app-route 
        route="{{route}}" 
        pattern="[[rootPath]]:page" 
        data="{{routeData}}" 
        tail="{{subroute}}">
    </app-route>
        <h4>Service details</h4>
      `;
    }
}
// Register the element with the browser.
window.customElements.define('services-detail', servicesDetail);