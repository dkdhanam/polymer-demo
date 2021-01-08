/**
 * @license
 * @author Dhanasekaran
 * 
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/iron-image/iron-image.js'
import '@polymer/paper-material/paper-material.js';
class HomePage extends PolymerElement {
  static get template() {
    return html`
    <style include="app-grid-style">

    :host {
      --app-grid-columns: 3;
      --app-grid-item-height: auto;
      --app-grid-gutter: 10px;
      --app-white-color: #ffffff;
      --app-grid-expandible-item-columns: 2;
          --app-grid-item-height: auto;
    }
    iron-image{
      width:100%;
      position: inherit;
    }
    .container{
      max-width:70%;
      margin:0 auto;
    }
    .width-100{
      width:100%;
    }
    .home-content{
      position: absolute;
      top: 13%;
      text-align: center;
      width:100%;
    }
    .section-1{
      color: #000;
      width:100%;
      text-align: center;
    }
    </style>

    <!-- App Location -->
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

    <!-- Home page Top Banner -->
    <paper-material elevation="1">
      <img class="width-100" src="images/slider-bg.png">
      <div class="home-content">
        <img src="images/logo-1.png" width="50px">
        <h2>Welcome To Life Care We Care Your Health</h2>
      </div>
    </paper-material>
    
    <!-- About section -->
    <section class="about-section container">
    <img src="images/logo-1.png" width="50px">
      <h2>The About Clinic</h2>
      
    </section>

    <!-- Our Services section -->
    <section class="services-section container">
      <h2>Our Services</h2>
      <div class="app-grid">
        <dom-repeat items="[[serviceshome]]">
          <template strip-whitespace="">
            
              <div class="item center">
              
                <img width="100px" src="[[item.image]]">
                <h2>[[item.name]]</h2>
                <p>[[item.description]]</p>
              </div>
              
            </template>
          </dom-repeat>
      </div>
    </section>

    <!-- Our Doctors section -->
    <section class="doctors-section container">
      <h2>The Specialist Clinic</h2>
      <div class="app-grid">
        <dom-repeat items="[[doctorshome]]">
          <template strip-whitespace="">
            
              <div class="item center">
              
                <img class="width-100" src="[[item.image]]">
                <h2>[[item.name}}</h2>
                <p>[[item.description]]</p>
              </div>
              
            </template>
          </dom-repeat>
      </div>
    </section>
    `;
  }
  static get properties() {
    return {
      serviceshome: {
        type: Array,
        value: servicesList
      },
      doctorshome:{
        type: Array,
        value: doctorsList
      }
    };
  } 
}

let servicesList = [
  {
    image:'/images/service-icon1.png',
    name: 'PREMIUM FACILITIES',
    description:'Lorem Ipsum is simply dummy text of the printing.'

  },
  {
    image:'images/service-icon2.png',
    name: 'PREMIUM FACILITIES',
    description:'Lorem Ipsum is simply dummy text of the printing.'

  },
  {
    image:'images/service-icon3.png',
    name: 'PREMIUM FACILITIES',
    description:'Lorem Ipsum is simply dummy text of the printing.'

  },
  {
    image:'images/service-icon4.png',
    name: 'PREMIUM FACILITIES',
    description:'Lorem Ipsum is simply dummy text of the printing.'

  },
  {
    image:'images/service-icon5.png',
    name: 'PREMIUM FACILITIES',
    description:'Lorem Ipsum is simply dummy text of the printing.'

  },
  {
    image:'images/service-icon6.png',
    name: 'PREMIUM FACILITIES',
    description:'Lorem Ipsum is simply dummy text of the printing.'

  }
]
let doctorsList = [
  {
    image:'images/doctor_01.jpg',
    name: 'PREMIUM FACILITIES',
    description:'Lorem Ipsum is simply dummy text of the printing.'
  },
  {
    image:'images/doctor_02.jpg',
    name: 'PREMIUM FACILITIES',
    description:'Lorem Ipsum is simply dummy text of the printing.'
  },
  {
    image:'images/doctor_03.jpg',
    name: 'PREMIUM FACILITIES',
    description:'Lorem Ipsum is simply dummy text of the printing.'
  }
]

window.customElements.define('home-page', HomePage);