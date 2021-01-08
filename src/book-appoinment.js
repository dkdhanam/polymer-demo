/**
 * @license
 * @author Dhanasekaran
 * 
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import "@elifent/paper-datepicker/paper-datepicker.js";
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-toast/paper-toast.js';
import '@vaadin/vaadin-time-picker/vaadin-time-picker.js';

class Appoinment extends PolymerElement {
  
  static get template() {
    return html`
    <style>
      iron-pages{
      display:none !important;
      }
      .center {
        width:100%;
        text-align:center;
      }
      #appoinment-form paper-card{
        width:70%;
        display:inline-block;
        margin-top: 3%;
      }
      .content-title{
        background: linear-gradient(to right, #39b49a 0%, #1d86df 100%);
        padding:10px;
        color: #fff;
      }
      #dropdown{
        position: absolute !important;
        left: 0 !important;
        top:0 !important;
      }
      .card-content{
        border-radius: 4px;
        box-shadow: 0 0 10px #000;
        text-align: left;
      }
      .card-content paper-dropdown-menu{
        width:100%;
      }
      paper-dropdown-menu {
        --paper-dropdown-menu: {
          left:0 !important;
          width:100% !important;
        } 
    }
      @media (max-width: 767px){
        #appoinment-form paper-card{
          width: 90%;
        }

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

    <!-- Main Content -->
    <div class="center" id="appoinment-form">
      <!-- Paper card start -->
      <paper-card class="rate">
        <div class="card-content">
          <h2 class="content-title">+ Book Appoinment</h2>
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
              value="{{patientName}}"
              >              
              </paper-input>

            <!-- Email paper input -->
            <paper-input 
              type="email" 
              name="email"  
              label="Email" 
              value="{{email}}"
              >
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
                value="{{phonenumber}}"
                >
                </paper-input>
                <!-- category paper Dropdown -->
                <div class="margin-btm">
                  <paper-dropdown-menu label="Select Service" class="custom" auto-validate required error-message="Please Select Service ">
                    <paper-listbox slot="dropdown-content" name="Service" id="service" attr-for-selected="value"   class="dropdown-content  custom" horizontalAlign='left'>
                      <paper-item value="Gynaecology">Gynaecology</paper-item>
                      <paper-item value="Orthopaedics">Orthopaedics</paper-item>
                      <paper-item value="Lense Expert">Lense Expert</paper-item>
                      <paper-item value="Cardiology">Cardiology</paper-item>
                      <paper-item value="Associate Eye">Associate Eye</paper-item>
                      <paper-item value="Gastroenterology">Gastroenterology</paper-item>
                    </paper-listbox>
                  </paper-dropdown-menu>
                </div>
                <!-- category paper Dropdown -->
                <div class="margin-btm">
                  <paper-dropdown-menu label="Select Doctors" class="custom" auto-validate required error-message="Please Select Service ">
                    <paper-listbox slot="dropdown-content" name="Service" id="service" attr-for-selected="value"   class="dropdown-content  custom" horizontalAlign='left'>
                      <paper-item value="Gynaecology">Dr. Juan Annato</paper-item>
                      <paper-item value="Orthopaedics">Dr. Jaffrin Skote</paper-item>
                      <paper-item value="Lense Expert">Dr. Jonathon Deo</paper-item>
                      <paper-item value="Cardiology">Dr. JMaya Didas</paper-item>
                      <paper-item value="Associate Eye">Dr. Buck Kinnear</paper-item>
                      <paper-item value="Gastroenterology">Dr. Shonda Leer</paper-item>
                    </paper-listbox>
                  </paper-dropdown-menu>
                </div>
            <!-- Dater Picker paper input -->
            <paper-input label="Date" value="{{demoDate}}">
              <paper-icon-button
                slot="suffix"
                icon="date-range"
                on-click="openDateBox"
              >
              </paper-icon-button>
            </paper-input>
            <paper-datepicker opened="{{opened}}" date="{{demoDate}}"></paper-datepicker>
            <vaadin-time-picker label="Delivery Time" value={{time}}></vaadin-time-picker>
            <div class="card-actions">
              <paper-button raised class="custom indigo"  on-tap="submitHandler" style="background:green;color:#fff;width:100%">Submit</paper-button>
            </form>
        </iron-form>
         </div>
        </div>
      </paper-card>
      <paper-toast id="toast"></paper-toast>
    </div>
    `;
  }
  static get properties () {
    return {
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
    super.ready();
  }
  openDateBox() {
    this.opened = true;
  }
  submitHandler() {
    this.$.formOne.submit();
  }
  onResponse() {
   // this.response = e.detail.response.form;
    this.patientData = {
      username : this.patientName,
      email: this.email,
      date : this.demoDate,
      phone : this.phonenumber,
      service : this.$.service.selected,
      time : this.time
    }
    localStorage.setItem('bookingData',JSON.stringify(this.patientData));
    this.set('route.path', '/appoinmentview');
    this.$.formOne.reset();
  }
   
  
}

window.customElements.define('book-appoinment', Appoinment);