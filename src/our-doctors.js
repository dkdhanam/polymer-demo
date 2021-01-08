/**
 * @license
 * @author Dhanasekaran
 * 
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import './doctor-details.js';

let doctorList = [
  {
    name: 'Dr. Juan Annato',
    image: 'images/resource/team-1.jpg',
    title: 'Pharmacist'
  },
  {
    name: 'Dr. Jaffrin Skote',
    image: 'images/resource/team-2.jpg',
    title: 'Family Doctor'
  },
  {
    name: 'Dr. Jonathon Deo',
    image: 'images/resource/team-3.jpg',
    title: 'Consulting Doctor'
  },
  {
    name: 'Ira Membrit',
    image: 'images/resource/team-4.jpg',
    title: 'Surgeon'
  },
  {
    name: 'Dr. JMaya Didas',
    image: 'images/resource/team-5.jpg',
    title: 'Nurse'
  },
  {
    name: 'Dr. Buck Kinnear',
    image:'images/resource/team-6.jpg',
    title: 'Psychologist'
  },
  {
    name: 'Dr. Shonda Leer',
    image:'images/resource/team-7.jpg',
    title: 'Cardiologists'
  },
  {
    name: 'Surgical Services',
    image: 'images/resource/team-8.jpg',
    title: 'Dental Specialist'
  }
]
class doctors extends PolymerElement {
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
    .team-block{
      position:relative;
      margin-bottom:30px;
    }

    .team-block .inner-box{
      position:relative;
      overflow:hidden;
      border-radius:10px;
    }

    .team-block .inner-box .image{
      position:relative;
    }

    .team-block .inner-box .image img{
      position:relative;
      width:100%;
      display:block;
    }

    @media (max-width: 767px) {
      :host {
        --app-grid-columns: 1;
      }
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
    <h3>Our Doctores</h3>
    <p>Replenish him third creature and meat most of the blessed best of the void a fruit gathered.</p>
  </div>     
  <div class="app-grid">
    <dom-repeat items="[[doctor]]">
      <template strip-whitespace="">
        
          <div class="item center team-block">
            <a href="/doctordetails">
              <div class="inner-box"> 
                <div class="image"> 
                  <img src="[[item.image]]" alt="[[item.name]]"/>  
                  <div class="overlay"> 
                    <div class="content">     
                    <h2>[[item.name]]</h2>
                    <p>[[item.title]]</p>
                  </div>
                </div>
              </div>
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
      doctor: {
        type: Array,
        value: doctorList,
        notify: true
      },
    };
  } 
}

window.customElements.define('our-doctors', doctors);