/**
 * @license
 * @author Dhanasekaran
 * 
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-form/iron-form.js';

class Login extends PolymerElement {
  /* Properties */
  static get properties () {
    return {
      username:{
        type: String,
        notify: true
      },
      password:{
        type: String,
        notify: true
      },
      response: {
        type: String,
       observer:'validators'
    },
    errorMessage:{
      type: String,
      value:"required",
      notify: true,
    },
    }
  }
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
        .errmsg{
          color:red;
          margin: 4px;
        }
        #mylogin paper-card{
          width:37%;
          display:inline-block;
          margin-top: 12%;
          border-radius: 20px;
          box-shadow: 0px 0px 20px #ccc;
          padding: 25px;
        }
        #mylogin{
          background: linear-gradient(to right, #39b49a 0%, #1d86df 100%);
          width:100%;
          position:fixed;
          left:0;
          margin: 0 auto;
          height: 100%;
          top:0;
        }
        @media (max-width: 767px){
          #mylogin paper-card{
            width:80%;
            margin-top: 30%;
          }
        }
      </style>
    
      <app-location 
          route="{{route}}" 
          url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route 
          route="{{route}}" 
          pattern="[[rootPath]]:page" 
          data="{{routeData}}" 
          tail="{{subroute}}">
      </app-route>
      <paper-toast id="toast"></paper-toast>
      <div class="center" id="mylogin">
        <paper-card class="rate">
          <div class="card-content">
          <div class="errmsg">
                <small>{{errorMsg}}</small>
                </div>
            <iron-form id="formOne" on-iron-form-response="onResponse">
              <form>
                <paper-input maxlength="15" error-message="{{errorMessage}}" name="username" auto-validate required  float-label label="Username" value={{username}}></paper-input>
                <paper-input maxlength="10" type="password" auto-validate required error-message="{{errorMessage}}" name="password" float-label label="Password" value={{password}}></paper-input>
                <div class="card-actions">
                <paper-button raised on-tap="_login" class="indigo" style="background:green;color:#fff;width:100%;margin-top: 20px;">Login</paper-button>
              </div>
                </form>
              </iron-form>
          </div>
          
        </paper-card>
      </div>
    `;
  }
  
  // get the form data from irom-form response
  _login() {
    this.$.formOne.submit();
  }
  onResponse(){
    if(this.username != 'dhana' || this.password != 'dhana'){
      this.errorMsg = "Invalid credentials";

    }else{
      this.errorMsg = "";
      localStorage.setItem('credentials', this.username);
      localStorage.setItem('password', this.password);
      this.openToast();
      this.$.formOne.reset();
      setTimeout(()=> {
        this.set('route.path', '/home');
      }, 1000);
    }
   
  }
  openToast() {
    this.$.toast.show({text: 'Sucessfully Login', duration: 3000})
  }
}

window.customElements.define('login-form', Login);