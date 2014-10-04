/*
  Copyright 2009 Google Inc.

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
google.wspl.simplenotes=google.wspl.simplenotes||{},google.wspl.simplenotes.Template=function(e){this.template_=e,this.res_=null},google.wspl.simplenotes.Template.prototype.process=function(e,s){var t=s||!1;if(t||null==this.res_){var l=[];this.res_=null;for(var i in e)l.push("%"+String(i)+"%");l.length>0&&(this.res_=new RegExp(l.join("|"),"g"))}return null!=this.res_?this.template_.replace(this.res_,function(s){var t=s.slice(1,-1);return e[t]}):this.template_};