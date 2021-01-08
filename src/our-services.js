/**
 * @license
 * @author Dhanasekaran
 * 
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import './services-detail.js';

let serviceList = [
  {
    id  : '01',
    name: 'Physical therapy',
    title: 'Replenish him third creature and meat blessed void a fruit gathered you’re behold had seed.'
  },
  {
    id  : '02',
    name: 'Pediatric Services',
    title: 'Replenish him third creature and meat blessed void a fruit gathered you’re behold had seed.'
  },
  {
    id  : '03',
    name: 'Diagnostic Center',
    title: 'Replenish him third creature and meat blessed void a fruit gathered you’re behold had seed.'
  },
  {
    id  : '04',
    name: 'Healthcare Center',
    title: 'Replenish him third creature and meat blessed void a fruit gathered you’re behold had seed.'
  },
  {
    id  : '05',
    name: 'Neurology',
    title: 'Replenish him third creature and meat blessed void a fruit gathered you’re behold had seed.'
  },
  {
    id  : '06',
    name: 'Neurosurgery',
    title: 'Replenish him third creature and meat blessed void a fruit gathered you’re behold had seed.'
  },
  {
    id  : '07',
    name: 'Orthopaedics',
    title: 'Replenish him third creature and meat blessed void a fruit gathered you’re behold had seed.'
  },
  {
    id  : '08',
    name: 'Surgical Services',
    title: 'Replenish him third creature and meat blessed void a fruit gathered you’re behold had seed.'
  }
]
class services extends PolymerElement {
  static get template() {
    return html`
    <style include="app-grid-style">

    :host {
      --app-grid-columns: 4;
      --app-grid-item-height: auto;
      --app-grid-gutter: 10px;
      --app-white-color: #ffffff;
      --app-grid-expandible-item-columns: 2;
          --app-grid-item-height: auto;
    }
    a{
      text-decoration: none;
      color: #000;
    }
    .app-grid {
      padding: 0;
      list-style: none;
    }
    .card{
      padding: 10px;
    }
    .item {
      background: var(--app-white-color);
      box-shadow: 0 0 10px;
    }
    .center{
      text-align: center;
    }
    .number-box {
      margin: 0 auto;
      width: 65px;
    }
    .number-box .number{
      position: relative;
      width: 52px;
      height: 52px;
      padding: 3px;
      color: #ffffff;
      font-size: 14px;
      line-height: 26px;
      border-radius: 50px;
      margin: 4px 3px 3px 4px;
      border: 11px solid #cfd2fc;
      background-color: #5153ff;
      text-align: center;
    }
    .number-box .number span{
      position: relative;
      top: 12px;
    }
    @media (max-width: 767px) {
      :host {
        --app-grid-columns: 1;
      }
    }

  </style>
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
  <div class="card">
      <div class="page-title center">
        <h3>Service We Provide</h3>
        <p>Replenish him third creature and meat most of the blessed best of the void a fruit gathered.</p>
      </div>     
      <div class="app-grid">
        <dom-repeat items="[[services]]">
          <template strip-whitespace="">
            
              <div class="item center">
              <a href="/servicesdetail">
              <div class="number-box">
                  <div class="number"><span>{{item.id}}</span></div>
              </div>
                <h2>{{item.name}}</h2>
                <p>{{item.title}}</p>
                </a>
              </div>
              
            </template>
          </dom-repeat>
      </div>
    </div>
    `;
  }
  static get properties() {
    return {
      services: {
        type: Array,
        value: serviceList,
        notify: true
      },
    };
  } 
}

window.customElements.define('our-services', services);