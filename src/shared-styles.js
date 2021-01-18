import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
    :host {
      --app-primary-color: #4285f4;
      --app-secondary-color: black;
      --app-white-color: white;
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

      /*Login page*/

       
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
       
      /* Home page */

      .app-grid > *{
        text-align: center;
      }
      .services-section h2, .doctors-section h2, .about-section .page-title{
        text-align: center;
      }
      .container{
        max-width:1200px;
        margin:0 auto;
      }
      .width-100{
        width:100%;
      }
      .home-content{
        position: absolute;
        top: 13%;
        text-align: center;
        width:100%;
      }
      .section-1{
        color: #000;
        width:100%;
        text-align: center;
      }
      
      /* Appoinment Page */


      #appoinment-form paper-card{
        display:inline-block;
        margin-top: 3%;
        width:100%;
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
      
      paper-dropdown-menu {
        --paper-dropdown-menu: {
          left:0 !important;
          width:100% !important;
        } 
    }
      
      /* Appoinment View */

      
      .content-title{
        background: linear-gradient(to right, #39b49a 0%, #1d86df 100%);
        padding:10px;
        color: #fff;
      }
      vaadin-time-picker{
        width:100%;
      }
      vaadin-combo-box-light{
        width: 100%;
      }
      vaadin-time-picker-text-field{
        width: 100%;
      }
      .vaadin-text-field-container [part="input-field"]{
        background: #fff;
      }

    /* Our Services */

    a{
      text-decoration: none;
      color: #000;
    }
    .app-grid {
      padding: 0;
      list-style: none;
    }
    .card{
      padding: 10px;
    }
    
    .center{
      text-align: center;
    }
    .number-box {
      margin: 0 auto;
      width: 65px;
    }
    .number-box .number{
      position: relative;
      width: 52px;
      height: 52px;
      padding: 3px;
      color: #ffffff;
      font-size: 14px;
      line-height: 26px;
      border-radius: 50px;
      margin: 4px 3px 3px 4px;
      border: 11px solid #cfd2fc;
      background-color: #5153ff;
      text-align: center;
    }
    .number-box .number span{
      position: relative;
      top: 12px;
    }
    

    /* Our Doctors */

    .team-block{
      position:relative;
      margin-bottom:30px;
    }
    .team-block .inner-box{
      position:relative;
      overflow:hidden;
      border-radius:10px;
      border: 1px solid;
      background: #fff;
    }
    .team-block .inner-box .image{
      position:relative;
    }
    .team-block .inner-box .image img{
      position:relative;
      width:100%;
      display:block;
    }

    @media screen and (min-width:767px) and (max-width: 1024px){
      :host {
        --app-grid-columns: 2 !important;
      }
      .logo-main a{
        margin-left: 15px;
      }
    }
    /* screen lessthan 767px width */

    @media (max-width: 767px){
      :host {
        --app-grid-columns: 1;
      }
      .home-content{
        display: none;
      }
      .mobile-logo{
        text-align: center;
        display: inline-block;
        width: 75%;
        margin-top: 15px;
        position: absolute;
        
      }
      paper-icon-button{
        margin-top:12px;
      }
      .mobile-logo a{
        font-size: 30px;
        color: #fff;
      }
      #drawer .drawer-list{
        background: linear-gradient(to right, #39b49a 0%, #1d86df 100%);
      }
      app-header{
        display: none !important;
      }
      .menu-toggle{
        display: block;
        background: linear-gradient(to right, #39b49a 0%, #1d86df 100%);
        color: #fff;
      }
      .drawer-list {
        text-align: left;
        margin: 0;
        width:100%;
      }
      .drawer-list a {
        color: var(--app-white-color);
        text-align: center;
        line-height: 30px;
      }
      #mylogin paper-card{
        width:80%;
        margin-top: 30%;
      }
      #appoinment-form paper-card{
        width: 90%;
      }

    }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
