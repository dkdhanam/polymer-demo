/**
 * @license
 * @author Dhanasekaran
 * Import statements in Polymer 3.0 can now use package names.
 * polymer-element.js now exports PolymerElement instead of Element
 * import Polymer app-layout
 * 
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import './shared-styles.js';
import './our-services.js';
import './our-doctors.js';

// Define the new element as a class
class HomePage extends PolymerElement {
  static get template() {
    return html`
    <style include="app-grid-style shared-styles">

      :host {
        --app-grid-columns: 3;
        --app-grid-item-height: auto;
        --app-grid-gutter: 10px;
        --app-white-color: #ffffff;
        --app-grid-expandible-item-columns: 2;
            --app-grid-item-height: auto;
      }
      @media (max-width: 1024px){
        :host {
          --app-grid-columns: 2;
        }
      }
    </style>
   

    <!-- Home page Top Banner -->
    <section style="position:relative;">
      <img class="width-100" src="images/slider-bg.jpg">
      <div class="home-content">
        <img src="images/logo-1.png" width="50px">
        <h2>Welcome To Life Care We Care Your Health</h2>
      </div>
    </section>  

    <!-- Our Services section -->
    <section class="services-section container">
      <h2>Our Services</h2>
      <!-- appending our services component -->
      <our-services name="services"></our-services>
    </section>

    <!-- Our Doctors section -->
    <section class="doctors-section container">
      <h2>The Specialist Clinic</h2>
      <!-- appending our doctors component -->
      <our-doctors name="doctors"></our-doctors>
    </section>
    `;
  }

  // creating properties 

  static get properties() {
    return {
      
    };
  }
}


// Register the element with the browser.
window.customElements.define('home-page', HomePage);
