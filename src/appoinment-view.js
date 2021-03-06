/**
 * @license
 * @author Dhanasekaran
 * Import statements in Polymer 3.0 can now use package names.
 * polymer-element.js now exports PolymerElement instead of Element,
 * Paper-spinner is a spinner element, which indicates the loading of a particular file or an image with supporting multiple colors.
 * shared-styles importing custom styles.
*/

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-spinner/paper-spinner.js';
import './shared-styles.js';

// Define the new element as a class
class AppoinmentView extends PolymerElement {
    constructor() {
        // something that requires access to the shadow tree
        super();
        // get appointment data from localstorage when during page load
        this._appoinmentView();
    }

     // creating properties 
    static get properties() {
        return {
            // get appointmentData array
            bookingData:Array,

            // waiting is used to show and hide spinner
            waiting: {
                type: Boolean,
                value:true                
              },
        };
    }

     // creating temptales 
    static get template() {
        return html`
        <style include="shared-styles">  
        .card{
            width: 70%;
            margin: 20px auto;
            border: 1px solid #ccc;
            padding: 15px;
            border-radius: 4px;
            box-shadow: 0 0 10px;
        }
        table{
            margin: 0 auto;
            width:400px;
        }
        @media (max-width:767px){
            table{
                width:100%;
            }
        }
        </style>
        <!-- include the paper spinner-->
        <paper-spinner active="[[waiting]]"></paper-spinner>
        
        <div class="card">
            <h2 class="content-title">Appoinment View</h2>
            <!-- dom-repeat starts here -->
            <!-- Booking view details with using dom-repeat -->
            <dom-repeat items="{{bookingData}}">
                <template>
                    <table>
                    <tr>
                    <td>Name </td><td>[[item.username]]</td>
                    </tr>
                    <tr>
                    <td>Email </td><td>[[item.email]]</td> 
                    </tr>
                    <tr>
                    <td>Phone Number </td><td>[[item.phone]]</td>
                    </tr>
                    <tr>  
                    <td>Date </td><td>[[item.date]]</td>
                    </tr>
                    <tr>
                    <td>Services </td><td>[[item.service]]</td> 
                    </tr>
                    <tr>
                    <td>Doctor </td><td>{{item.doctor}}</td> 
                    </tr>
                    <tr>
                    <td>Time </td><td>[[item.time]]</td>
                    </tr> 
                    <table>
                    <!-- successfully submited message showing here -->
                    <div class="center">
                        <h3>Successfully Submitted!<h3>
                        <p>Thank you for requesting an appointment at {{item.doctor}}! We will reach out to you momentarily.</p>
                    </div>
                </template>                
            </dom-repeat>
            <!-- dom-repeat ends here -->
        </div>
        `;
    }

    // after feching data from localstorage timeout will call 
    timeout(){
        setTimeout(()=> {
            this.waiting =false;
          }, 2000);
    } 

    // Booking details fectching data from localstorage
    _appoinmentView(){
        var patients = JSON.parse(window.localStorage.getItem('bookingData'));
        this.bookingData =[];        
        this.bookingData.push(patients);
        this.timeout();
    }
}
// Register the element with the browser.
window.customElements.define('appoinment-view', AppoinmentView);
