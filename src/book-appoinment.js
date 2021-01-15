/**
 * @license
 * @author Dhanasekaran
 * import Polymer app-layout
 * import Polymer paper-input
 * import Polymer paper-button
 * import Polymer paper-card
 * import Polymer paper-datepicker
 * import Polymer paper-dropdown-menu
 * import Polymer paper-listbox
 * import Polymer paper-icon-button
 * import Polymer iron-form
 * import Polymer paper-toast
 * import vaadin vaadin-time-picker
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import "@elifent/paper-datepicker/paper-datepicker.js";
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-toast/paper-toast.js';
import '@vaadin/vaadin-time-picker/vaadin-time-picker.js';
import './shared-styles.js';

// Define the new element as a class
class Appoinment extends PolymerElement {
  
  static get template() {
    return html`
      <style include="shared-styles app-grid-style"> 
          :host {
            --app-grid-columns: 2;
          }
        .card-content{
          border-radius: 4px;
          box-shadow: 0 0 10px #000;
          text-align: left;
        }
        .service-time{
            margin:20px;
            color: #fff;
            padding: 20px;
        }
        .service-time ul li{
            list-style: none;
        }
        @media (max-width: 1024px){
          :host {
            --app-grid-columns: 1;
          }
        }
      </style>
    
      <!-- app-location binds to the app's URL -->
      <!-- app-location is an element that provides synchronization between th browser location and the state of  an app-->
      <app-location 
          route="{{route}}" 
          url-space-regex="^[[rootPath]]">
      </app-location>

      <!-- this app-route manages the top-level routes -->
      <!-- app-route implementation of routing-->
      <app-route 
          route="{{route}}" 
          pattern="[[rootPath]]:page" 
          data="{{routeData}}" 
          tail="{{subroute}}">
      </app-route>
      <!-- Main Content -->
      <div class="container">  
        <div class="app-grid">
        <div class="timings">
            <div class="service-time" style="background:#0071d1;">
              <span class="info-icon"><i class="fa fa-clock-o" aria-hidden="true"></i></span> 
              <h3>Working Hours</h3>
              <div class="time-table-section">
                <ul>
                    <li><span class="left">Monday - Friday : </span><span class="right">8.00AM – 6.00PM</span></li>
                    <li><span class="left">Saturday : </span><span class="right">8.00AM – 4.00PM</span></li>
                    <li><span class="left">Sunday : </span><span class="right">8.00AM – 1.00PM</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="appoinment-form">
            <!-- Paper card start here -->
            <paper-card class="rate">
              <div class="card-content">
                <h2 class="content-title">+ Book Appoinment</h2>
                <!-- Iron form start here -->
                <iron-form id="formOne" on-iron-form-response="onResponse">
                  <form is="iron-form"> 

                    <!-- Your name paper input -->
                    <paper-input 
                      label="Patient Name" 
                      name="patientName" 
                      auto-validate 
                      pattern="[a-zA-Z]*" 
                      error-message="Enter Patient Name" 
                      required 
                      value="{{patientName}}">              
                    </paper-input>

                    <!-- Email paper input -->
                    <paper-input 
                      type="email" 
                      name="email"  
                      auto-validate 
                      pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                      label="Email" 
                      error-message="Enter Email address"
                      required
                      value="{{email}}">
                    </paper-input>

                    <!-- Phone Number -->
                    <paper-input 
                      label="Phone Number" 
                      name="phone" 
                      auto-validate 
                      pattern="[0-9]*"
                      maxlength="10" 
                      minlength="10" 
                      error-message="Enter Phone Number & should be 10 digits" 
                      required 
                      value="{{phonenumber}}">
                    </paper-input>

                    <!-- category services Dropdown -->
                    <div>
                    <paper-dropdown-menu label="Select Service" class="custom" auto-validate required error-message="Please Select Service ">
                      <paper-listbox slot="dropdown-content" name="Service" id="service" attr-for-selected="value"   class="dropdown-content  custom" horizontalAlign='left'>
                        <paper-item value="Physical therapy">Physical therapy</paper-item>
                        <paper-item value="Pediatric Services">Pediatric Services</paper-item>
                        <paper-item value="Diagnostic Center">Diagnostic Center</paper-item>
                        <paper-item value="Cardiology">Cardiology</paper-item>
                        <paper-item value="Neurology">Neurology</paper-item>
                        <paper-item value="Orthopaedics">Orthopaedics</paper-item>
                      </paper-listbox>
                      </paper-dropdown-menu>                
                    </div>

                    <!-- category Doctors Dropdown -->
                    <div>
                      <paper-dropdown-menu label="Select Doctors" class="custom" auto-validate required error-message="Please Select Service ">
                        <paper-listbox slot="dropdown-content" name="Service" id="doctor" attr-for-selected="value"   class="dropdown-content  custom" horizontalAlign='left'>
                          <paper-item value="Dr. Juan Annato">Dr. Juan Annato</paper-item>
                          <paper-item value="Dr. Jaffrin Skote">Dr. Jaffrin Skote</paper-item>
                          <paper-item value="Dr. Jonathon Deo">Dr. Jonathon Deo</paper-item>
                          <paper-item value="Ira Membrit">Ira Membrit</paper-item>
                          <paper-item value="Dr. Buck Kinnear">Dr. Buck Kinnear</paper-item>
                          <paper-item value="Dr. Shonda Leer">Dr. Shonda Leer</paper-item>
                        </paper-listbox>
                      </paper-dropdown-menu>
                    </div>

                    <!-- Dater Picker paper input -->
                    <paper-input label="Select Date" value="{{demoDate}}" auto-validate error-message="Select Date">
                      <paper-icon-button
                        slot="suffix"
                        icon="date-range"
                        on-click="openDateBox">
                      </paper-icon-button>
                    </paper-input>
                    <paper-datepicker opened="{{opened}}" date="{{demoDate}}" auto-validate error-message="Select Date"></paper-datepicker>
                   
                    <!-- Time Picker -->
                    <vaadin-time-picker label="Select Time" auto-validate value={{time}} required error-message="Select time"></vaadin-time-picker>
                    <div class="card-actions">
                      <paper-button raised class="custom indigo"  on-tap="submitHandler" style="background:green;color:#fff;width:100%">Submit</paper-button>
                    </div>
                  </form>
                </iron-form>
                <-- Iron form end here -->
              </div>
            </paper-card>
            <!-- paper card ends here -->

            <!-- paper toast message -->
            <paper-toast id="toast"></paper-toast>
          </div>
          
        </div>
      </div>    
    `;
  }

   // creating properties 
  static get properties () {
    return {
      // sourceData object is get form data from the iron-form
      patientData: {
        type:Object
      }
    }
  }

  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    // If you override ready, always call super.ready() first.
    super.ready();
  }
  // use to open the datepicker popup
  openDateBox() {
    this.opened = true;
  }
  // submitting the form
  submitHandler() {
    this.$.formOne.submit();
  }
  // get data from iron form
  onResponse() {
    this.patientData = {
      username : this.patientName,
      email: this.email,
      date : this.demoDate,
      phone : this.phonenumber,
      service : this.$.service.selected,
      doctor : this.$.doctor.selected,
      time : this.time
    }
    //patientData values to store the localstorage
    localStorage.setItem('bookingData',JSON.stringify(this.patientData));

    // when the form is submitted then route is redirect appoinmentview page
    this.set('route.path', '/appoinmentview');

    // after submit the form then reset the form 
    this.$.formOne.reset();
  } 
  
}
// Register the element with the browser.
window.customElements.define('book-appoinment', Appoinment);
