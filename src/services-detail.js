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
window.customElements.define('services-detail', servicesDetail);