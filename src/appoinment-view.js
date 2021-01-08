/**
 * @license
 * @author Dhanasekaran
 * 
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-spinner/paper-spinner.js';
class AppoinmentView extends PolymerElement {
    constructor() {
        super();
        this._appoinmentView();
    }
    static get properties() {
        return {
            bookingData:Array,
            waiting: {
                type: Boolean,
                value:true
                
              },
        };
    }
    static get template() {
        return html`
        <style>
            .card{
                width: 70%;
                margin: 20px auto;
                border: 1px solid #ccc;
                padding: 15px;
                border-radius: 4px;
                box-shadow: 0 0 10px;
            }
            .content-title{
                background: linear-gradient(to right, #39b49a 0%, #1d86df 100%);
                padding:10px;
                color: #fff;
            }
        </style>
        <paper-spinner active="[[waiting]]"></paper-spinner>
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
        <div class="card">
        <h2 class="content-title">Appoinment View</h2>
        <dom-repeat items="{{bookingData}}">
            <template>
                <p>Name: <span>[[item.username]]</span></p>
                <p>Email: <span>[[item.email]]</span></p> 
                <p>Date: <span>[[item.date]]</span></p>
                <p>Phone Number: <span>[[item.phone]]</span></p>  
                <p>Services: <span>[[item.service]]</span></p> 
                <p>Time: <span>[[item.time]]</span></p> 
            </template>
        </dom-repeat>
        </div>
        `;
    }
    timeout(){
        console.log('resr',this.waiting)
        setTimeout(()=> {
            this.waiting =false;
          }, 2000);
    }
    _appoinmentView(){
        console.log('test');
        var patients = JSON.parse(window.localStorage.getItem('bookingData'));
        this.bookingData =[];
        
       this.bookingData.push(patients);
       this.timeout();
    }
}
window.customElements.define('appoinment-view', AppoinmentView);