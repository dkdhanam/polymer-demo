/**
 * @license
 * @author Dhanasekaran
 * 
 */
import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-toast/paper-toast.js';
import './my-icons.js';
import './login-form.js';

setRootPath(MyAppGlobals.rootPath);
class HealthCare extends PolymerElement{
    static get template(){
      return html`
        <style>
          :host {
            --app-primary-color: #4285f4;
            --app-secondary-color: black;
            --app-white-color: white;
            display: block;
          }
          .logo-main{
            display: inherit;
          }
          .logo-main a{
            margin-left: 20px;
            color: var(--app-white-color);
            text-decoration: none;
            font-size: 34px;
            top: 15px;
            position: relative;
          }
          /* Navigation Menu*/          
          app-header iron-selector a{
            display: inline-block !important;
          }
          app-header {
            background: linear-gradient(to right, #39b49a 0%, #1d86df 100%);
            color: #fff;
          }
          .drawer-list {
            margin: 0 5px;
            display: inline-block;
            text-align: right;
            width: 75%;
            float: right;
          }
          .drawer-list a {
            display: block;
            padding: 10px;
            text-decoration: none;
            color: var(--app-white-color);
            line-height: 50px;
            transition: all linear 300ms;
          }
          .drawer-list a:hover {
            background: #ccc;
            transition: all linear 300ms;
          }
          .drawer-list a.iron-selected {
            color: black;
            font-weight: bold;
            background: #ccc;
          }
          .menu-toggle{
            display: none;
          }
          footer{
            background: linear-gradient(to right, #39b49a 0%, #1d86df 100%);
            padding: 35px;
            color: var(--app-white-color);
            margin-top:30px;
          }
          @media (max-width:900px){
            app-header{
              display: none !important;
            }
            .menu-toggle{
              display: block;
            }
            .drawer-list {
              text-align: left;
              margin: 0;
              width:100%;
            }
            .drawer-list a {
              color: var(--app-secondary-color);
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
        
        <!-- App Drawer Layout starts -->
        <app-drawer-layout force-narrow>

          <!-- App Drawer start -->
          <app-drawer id="drawer" slot="drawer">            
            <!-- Iron Selecctor Start -->
            <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
              <a name="home" href="[[rootPath]]home">Home Page</a>
              <a name="services" href="[[rootPath]]services">Our Services</a>
              <a name="doctors" href="[[rootPath]]doctors">Our Doctors</a>
              <a name="appoinment" href="[[rootPath]]appoinment">Book Appoinment</a>
              <a name="appoinmentview" href="[[rootPath]]appoinmentview">view Appoinment</a>
              <a name="login" href="[[rootPath]]login">Login</a>
            </iron-selector>
            <!-- Iron Selecctor End -->
          </app-drawer>
          <!-- App Drawer End -->

          <!-- App Header Layput start -->
          <app-header-layout>
            <!-- Toggle Menu -->
            <app-toolbar class="menu-toggle">
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
            </app-toolbar>
            
            <!-- App Header start -->
            <app-header id="appheader" class="main-header" slot="header">
              <!-- Header Logo -->
              <app-toolbar class="logo-main">
                <a href="[[rootPath]]">Health Care</a>
              </app-toolbar>

              <!-- Iron Selector start -->
              <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
                <a name="home" href="[[rootPath]]home">Home Page</a>
                <a name="services" href="[[rootPath]]services">Our Services</a>
                <a name="doctors" href="[[rootPath]]doctors">Our Doctors</a>
                <a name="appoinment" href="[[rootPath]]appoinment">Book Appoinment</a>
                <a name="login" on-click="logout">Logout</a>
              </iron-selector>
              <!-- Iron Selector End -->
            </app-header>
            <!-- App Header End -->

            <!-- Iron Page Start -->
            <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
              <login-form name="login"></login-form>
              <home-page name="home"></home-page>
              <our-services name="services"></our-services>
              <our-doctors name="doctors"></our-doctors>
              <book-appoinment name="appoinment"></book-appoinment>
              <appoinment-view name="appoinmentview"></appoinment-view>
              <services-detail name="servicesdetail"></services-detail>
              <doctor-details name="doctordetails"></doctor-details>
            </iron-pages>
            <!-- Iron Page End -->

          </app-header-layout>
          <!-- App Header Layout End -->
        </app-drawer-layout>    
        <!-- App Drawer Layout Ends -->
        <paper-toast id="toast"></paper-toast>
        <footer>
          <p>© 2020 Lifecare. All Rights Reserved.</p>
        </footer>
      `;
    }
    static get properties() {
      return {
        page: {
          type: String,
          reflectToAttribute: true,
          observer: '_pageChanged'
        },
        routeData: Object,
        subroute: Object,
      };
    }    
    static get observers() {
      return [
        '_routePageChanged(routeData.page)'
      ];
    }
    
    _routePageChanged(page) {
      // Show the corresponding page according to the route.

      if (!page) {
          this.page = 'login';
      } else if (['login', 'home', 'services', 'doctors', 'appoinment','appoinmentview','servicesdetail','doctordetails'].indexOf(page) !== -1) {
          this.page = page;
      } else {
          this.page = 'view404';
      }

      // Close a non-persistent drawer when the page & route are changed.
      if (!this.$.drawer.persistent) {
          this.$.drawer.close();
      }
      
    }
    logout(){
      this. openToast();
      localStorage.clear();
      this.set('route.path', '/login');
    }
    openToast() {
      this.$.toast.show({text: 'Sucessfully Logout', duration: 3000})
    };
    _pageChanged(page) {
      /** 
      * Import the page component on demand.
      
      * Note: `polymer build` doesn't like string concatenation in the import
      * statement, so break it up.
      **/
      switch (page) {
          case 'login':
              import('./login-form.js');
              this.$.appheader.style.display="none";
              break;
          case 'home':
              import('./home-page.js');
              this.$.appheader.style.display="block";
              break;
          case 'services':
              import('./our-services.js');
              break;
          case 'doctors':
              import('./our-doctors.js');
              break;
          case 'appoinment':
              import('./book-appoinment.js');
              break;
          case 'appoinmentview':
              import('./appoinment-view.js');
              break;
          case 'servicesdetail':
              import('./services-detail.js');
              break;
          case 'doctordetails':
              import('./doctor-details.js');
              break;
      }
    }
}
window.customElements.define('healthcare-app', HealthCare);