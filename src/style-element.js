const styleElement = document.createElement('dom-module');
styleElement.innerHTML =
    `<template>
   <style>
   *{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
body, html {
    height: 100%;
}
#navbarNavDropdown a{
    color: #fff;;
}
#login{
    background-image: url("../images/bg.jpg");
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    margin: auto !important;  
}
.login-area {
    margin: 10% auto 0;
    margin-top: 25vh !important;
    padding: 30px;
    width: 100%;
    max-width: 280px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 0 5px #ccc;
    text-align:center;
}
.login-area input {
    width: 86%;
    border-radius: 10px;
    border: 0px;
    background: #e7e7e7;
    color: #555;
    padding: 15px;
    margin: 10px 0px;

}
.login-area .btn {
    width: 95%;
    background: #ff7b02;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    padding: 15px 0px;
    margin-left: 7px;
    margin: 10px 7px 20px;
    float: left;
}
.login-area .btn:hover {
        background: #ff7b02;
        color: #fff;

}
.login-area a {
    font-size: 12px;
    color: #2196F3;
}
#div1, #div2{
    color: red;
    font-size: 12px;
}
.nav-item a{
    color: #fff !important;
}

.nav-item a:hover, .nav-item a.active{
    color: #fff !important;
}
.menu-bar {
   background: #fff;
   height: 100%;
}
.menu-bar .nav{
    height: 100%;

}
.content{
    background: #f3f3f3;
}
.dashboard h2{
    font-size: 20px !important;
    text-shadow: 0 0 2px #ccc;
    margin: 15px;
}
.dashboard h3{
    font-size: 20px !important;
    text-shadow: 0 0 2px #ccc;
    margin: 15px 0px 15px 0px;
}
.clr1, .clr2, .clr3, .clr4{
    border-radius: 5px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: 10px;
}
.clr1 span, .clr2 span, .clr3 span, .clr4 span {
    font-size: 25px;
}
.clr1{
    background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important
}
.clr2{
    background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%) !important;
}
.clr3{
    background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%) !important;
}
.clr4{
    background-image: linear-gradient(to right, #434343 0%, black 100%) !important;
}
.sidebar-menu{
    background-color: #673AB7;
    padding: 0px !important;
}
app-header{
    display: block;
}
@media only screen and (min-width: 640px) {
    app-header{
        display: none;
    }
}
@media only screen and (min-width: 1200px) {
    .sidebar-menu{
        min-height: calc(100vh - 0px);
    }
  }
 
.sidebar-menu img{
    width: 100%;
    max-width: 200px;
    text-align: center;
    padding: 10px;
}
.mr-auto, .mx-auto {
    margin-right: auto!important;
    width: 100%;
}
button.navbar-toggler {
    position: absolute;
    right: 0;
    top: -61px;
}
li.nav-item.active {
    background: #ffffff5e;
}
li.nav-item:hover {
    background: #ffffff5e;
    color:#ff7b02;
}
nav.navbar.navbar-expand-lg {
    margin: 0px !important;
    padding: 0px;
}
.navbar-toggler-icon{
    background-image:url(../images/menu.png) !important;
}
.sidebar-menu li.nav-item {
    padding: 10px 5px;
}
.main-content {
    background: #efefef;
}
footer {
    position: relative;
    margin-top: 20px;
    bottom: 0px;
}
.emp-form paper-input {
    margin: 20px 0px;
}
.navbar-toggler:focus, .navbar-toggler:hover {
    text-decoration: none;
    outline: none;
}

   </style>
 </template>`;
styleElement.register('style-element');