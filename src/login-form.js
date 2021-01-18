/**
 * @license
 * @author Dhanasekaran
 * import Polymer paper-input
 * import Polymer paper-button
 * import Polymer paper-card
 * import Polymer iron-form
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-form/iron-form.js';
import './shared-styles.js';

// Define the new element as a class
class Login extends PolymerElement {

  // creating Properties 
  static get properties () {
    return {
      //username value
      username:{
        type: String
      },
      // password value
      password:{
        type: String
      },
      // response is get the form data from iron-onResponse
      response: {
        type: String,
       observer:'validators'
      },
      // paper input errormessage
      errorMessage:{
        type: String,
        value:"required",
        notify: true,
      }
    }
  }

  //creating templates
  static get template() {
    return html`
      <style include="shared-styles">
        iron-pages{
        display:none !important;
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
      
      <!-- Paper toast used to show the form submiting message -->
      <paper-toast id="toast"></paper-toast>
      <div class="center" id="mylogin">
      <!-- paper-card starts here -->
        <paper-card class="rate">
          <h2 class="center" style="margin: 0;">Login</h2>
          <div class="card-content">
            <!-- error message shows here -->
            <div class="errmsg">
              <small>{{errorMsg}}</small>
            </div>
            <!-- Iron form starts here -->
            <iron-form id="formOne" on-iron-form-response="onResponse">
              <form>
                <paper-input maxlength="15" error-message="{{errorMessage}}" name="username" auto-validate required  float-label label="Username" value={{username}}></paper-input>
                <paper-input maxlength="10" type="password" auto-validate required error-message="{{errorMessage}}" name="password" float-label label="Password" value={{password}}></paper-input>
                <div class="card-actions">
                <paper-button raised on-tap="_login" class="indigo" style="background:green;color:#fff;width:100%;margin-top: 20px;margin-left:0;">Login</paper-button>
              </div>
                </form>
              </iron-form>
              <!-- Iron form ends here -->
          </div>          
        </paper-card>
        <!-- paper card ends here -->
      </div>
    `;
  }
  
  // get the form data from irom-form response
  _login() {
    this.$.formOne.submit();
  }

  // get data from iron form
  onResponse(){
    if(this.username != 'dhana' || this.password != 'dhana'){
      this.errorMsg = "Invalid credentials";

    }else{
      this.errorMsg = "";
      // credentials store the data to localstorage
      localStorage.setItem('credentials', this.username);
      localStorage.setItem('password', this.password);

      // open the toast message when submit is Success
      this.openToast();

      // after submit the form then reset the form 
      this.$.formOne.reset();
      setTimeout(()=> {
        // when the form is submitted then route is redirect home page
        this.set('route.path', '/home');
      }, 1000);
    }
   
  }

  // open the toast message when submit is Success
  openToast() {
    this.$.toast.show({text: 'Sucessfully Login', duration: 3000})
  }
}
// Register the element with the browser.
window.customElements.define('login-form', Login);