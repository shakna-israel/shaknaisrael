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
google.wspl.DatabaseFactory=google.wspl.DatabaseFactory||{},google.wspl.DatabaseFactory.createDatabase=function(a,e){var o;if(window.openDatabase)o=new google.wspl.html5.Database(a);else{var t=goog.gears.getFactory().create("beta.database"),s=goog.gears.getFactory().create("beta.workerpool");o=new wireless.db.gears.Database,o.openDatabase("",a,t),s.onmessage=google.bind(o.onMessage_,o),o.startWorker(s,e,0)}return o};