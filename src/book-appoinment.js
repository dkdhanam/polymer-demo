/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-card/paper-card.js';
import "@elifent/paper-datepicker/paper-datepicker.js";
import '@polymer/paper-listbox/paper-listbox.js';

class Appoinment extends PolymerElement {
  static get properties () {
    return {
      
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
      paper-card{
        width:37%;
        display:inline-block;
        margin-top: 3%;
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
    <div class="center">
      <paper-card class="rate">
        <div class="card-content">
          <paper-input id="your_name" name="usser" float-label label="Yourname" ></paper-input>
          <paper-input id="email" type="email" name="email" float-label label="Email" ></paper-input>
          <paper-datepicker with-backdrop opened date="{{demoDate}}"></paper-datepicker>
          <paper-dropdown-input label="Your favorite dinosaur"
                          items='["Velociraptor","Deinonychus","Allosaurus","Brontosaurus","Carcharodontosaurus","Diplodocus","T-Rex"]'>
    </paper-dropdown-input>
          <paper-time-input hour="3" min="05" am-pm="PM"></paper-time-input>
        </div>
        <div class="card-actions">
          <paper-button raised on-tap="_login" class="indigo" style="background:green;color:#fff;width:100%">Login</paper-button>
        </div>
      </paper-card>
    </div>
    `;
  }
  _login(){
    const username = this.$.User_name.value;
    const password = this.$.Password.value;
    if(username == ""){
      alert("username can't be empty");
        return false;
    }
    else if(password == ""){
        alert("Password can't be empty.");        
        return false;
    }

    if (username === "user" && password === "user") {
     // alert("You have successfully logged in.");
      this.set('route.path', '/home');
    }else{
        alert('worng credentials.');
    }
  }
}

window.customElements.define('book-appoinment', Appoinment);