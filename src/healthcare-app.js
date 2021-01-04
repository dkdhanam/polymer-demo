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
            display: block;
          }

          app-drawer-layout:not([narrow]) [drawer-toggle] {
            display: none;
          }

          app-header {
            color: #fff;
            background-color: var(--app-primary-color);
          }

          app-header paper-icon-button {
            --paper-icon-button-ink-color: white;
          }

          .drawer-list {
            margin: 0 20px;
          }

          .drawer-list a {
            display: block;
            padding: 0 16px;
            text-decoration: none;
            color: var(--app-secondary-color);
            line-height: 40px;
          }

          .drawer-list a.iron-selected {
            color: black;
            font-weight: bold;
          }
          app-header iron-selector a{
            display: inline-block !important;
          }

          app-header {
            background-color: #4285f4;
            color: #fff;
          }
          app-header paper-icon-button {
            --paper-icon-button-ink-color: #fff;
          }
          app-drawer-layout {
            --app-drawer-layout-content-transition: margin 0.2s;
          }
          app-drawer {
            --app-drawer-content-container: {
              background-color: #eee;
            }
          }
          .drawer-content {
            margin-top: 80px;
            height: calc(100% - 80px);
            overflow: auto;
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
          
        <app-header-layout>
          <!-- Main content -->

            <app-header fixed effects="waterfall" slot="header">
              <app-toolbar>
                <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
                <div main-title=""><a href="[[rootPath]]">Health Care</a></div>
                </app-toolbar>
            </app-header>

            <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
              <login-form name="login"></login-form>
              <home-page name="home"></home-page>
              <our-services name="services"></our-services>
              <our-doctors name="doctors"></our-doctors>
              <book-appoinment name="appoinment"></book-appoinment>
            </iron-pages>
          <!-- Drawer content -->
          <!-- Naviigation Start -->
          <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
            
              <app-toolbar><div class="logo"><img src="images/logo-png.png" width="200" alt="UniqueHire" loading="lazy"></div>
              </app-toolbar>
              <!-- Iron Selecctor Start -->
              <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
              <a name="home" href="[[rootPath]]home">Home Page</a>
              <a name="services" href="[[rootPath]]services">Our Services</a>
              <a name="doctors" href="[[rootPath]]doctors">Our Doctors</a>
              <a name="login" href="[[rootPath]]login">Login</a>
            </iron-selector>
              <!-- Iron Selecctor End -->
          </app-drawer>
        </app-header-layout>
        
          
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
      //
      // If no page was found in the route data, page will be an empty string.
      // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
      if (!page) {
          this.page = 'login';
      } else if (['login', 'home', 'services', 'doctors', 'appoinment'].indexOf(page) !== -1) {
          this.page = page;
      } else {
          this.page = 'view404';
      }

      // Close a non-persistent drawer when the page & route are changed.
      if (!this.$.drawer.persistent) {
          this.$.drawer.close();
      }
    }
    
    _pageChanged(page) {
      // Import the page component on demand.
      //
      // Note: `polymer build` doesn't like string concatenation in the import
      // statement, so break it up.
      switch (page) {
          case 'login':
              import('./login-form.js');
              break;
          case 'home':
              import('./home-page.js');
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
      }
    }
}
window.customElements.define('healthcare-app', HealthCare);