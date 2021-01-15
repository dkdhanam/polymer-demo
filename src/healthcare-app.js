/**
 * @license
 * @author Dhanasekaran
 * @class Healthcare
 * import Polymer library and html function
 * import Polymer app-drawer
 * import Polymer app-drawer-layout
 * import Polymer app-header
 * import Polymer app-header-layout
 * import Polymer app-toolbar
 * import Polymer app-location
 * import Polymer app-route
 * import Polymer iron-pages
 * import Polymer iron-selector
 * import Polymer paper-icon-button
 * import Polymer paper-toast
 */

 // Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-toast/paper-toast.js';
import './shared-styles.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value in `index.html`.
setRootPath(MyAppGlobals.rootPath);

// Define the new element as a class
class HealthCare extends PolymerElement{
    static get template(){
      /**
        * Template getter must return an instance of HTMLTemplateElement.
        * The html helper function makes this easy.
      */
      return html`
          <style include="shared-styles">
            :host {
              --app-primary-color: #4285f4;
              --app-secondary-color: black;
              --app-white-color: white;
              display: block;
            }
            #contentContainer{
              background: linear-gradient(to right, #39b49a 0%, #1d86df 100%);
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
        
        <!-- App Drawer Layout starts -->
        <app-drawer-layout force-narrow>

          <!-- App Drawer for mobile menu start -->
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
              <div class="mobile-logo"><a href="[[rootPath]]home">Health Care</a></div>
            </app-toolbar>
            
            <!-- App Header for Desktop view start -->
            <app-header id="appheader" class="main-header" slot="header">
              <!-- Header Logo -->
              <app-toolbar class="logo-main">
                <a href="[[rootPath]]home">Health Care</a>
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
            <!-- iron-pages selects the view based on the active route -->
            <!-- selected: Data binding helps to get changed page value -->
            <!-- attr-for-selected: It reads value of name attr defined in each component & matches with selected value and triggers page switch -->
            <!-- fallback-selection: for 404., page/component not found handling -->

            <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
              <login-form name="login"></login-form>
              <home-page name="home"></home-page>
              <our-services name="services"></our-services>
              <our-doctors name="doctors"></our-doctors>
              <book-appoinment name="appoinment"></book-appoinment>
              <appoinment-view name="appoinmentview"></appoinment-view>
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
    /* observer: Its a simple observer that triggers whenever data changed in page property. We read the observer and calls a function to grab its earlier */
    static get properties() {
      return {
        // define a property
        page: {
          type: String,
          // reflectToAttribute update the corresponding attribute when the property changes
          reflectToAttribute: true,
          /**
           * specify an observer to be invoked when the property changes
           * In swicth case the Observer will observe the page is availabe or not
            */ 
          observer: '_pageChanged'
        },
        routeData: Object,
        subroute: Object,
      };
    }    
    /**
     * Each item of observers array is a method name followed by
     * a comma-separated list of one or more paths.
     * Triggers when data changed in page property.
      */ 
    
    static get observers() {
      return [
        '_routePageChanged(routeData.page)'
      ];
    }
    
    _routePageChanged(page) {
      // Show the corresponding page according to the route.
      
      if (!page) {
          this.page = 'login';
      } else if (['login', 'home', 'services', 'doctors', 'appoinment','appoinmentview'].indexOf(page) !== -1) {
          this.page = page;
      } else {
          this.page = 'home';
      }

      // Close a non-persistent drawer when the page & route are changed.
      if (!this.$.drawer.persistent) {
          this.$.drawer.close();
      }
      
    }
    logout(){

      // when user clicks logout clear localstorage and redirect to home page
      this. openToast();
      localStorage.clear();
      this.set('route.path', '/login');
    }
    openToast() {

       // After click locgout we are showing tost message succesfully logut
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
      }
    }
}

// Register the element with the browser.
window.customElements.define('healthcare-app', HealthCare);
