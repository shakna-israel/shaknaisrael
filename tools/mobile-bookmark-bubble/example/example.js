/*
  Copyright 2010 Google Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
window.addEventListener("load",function(){window.setTimeout(function(){var e=new google.bookmarkbubble.Bubble,o="bmb=1";e.hasHashParameter=function(){return-1!=window.location.hash.indexOf(o)},e.setHashParameter=function(){this.hasHashParameter()||(window.location.hash+=o)},e.getViewportHeight=function(){return window.console.log("Example of how to override getViewportHeight."),window.innerHeight},e.getViewportScrollY=function(){return window.console.log("Example of how to override getViewportScrollY."),window.pageYOffset},e.registerScrollHandler=function(e){window.console.log("Example of how to override registerScrollHandler."),window.addEventListener("scroll",e,!1)},e.deregisterScrollHandler=function(e){window.console.log("Example of how to override deregisterScrollHandler."),window.removeEventListener("scroll",e,!1)},e.showIfAllowed()},1e3)},!1);