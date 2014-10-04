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
google.wspl.html5=google.wspl.html5||{},google.wspl.LARGEST_SUPPORTED_DATABASE=4194304,google.wspl.html5.Transaction=function(t){this.tx_=t},google.inherits(google.wspl.html5.Transaction,google.wspl.Transaction),google.wspl.html5.Transaction.prototype.executeAll=function(t,e){if(0==t.length)throw Error("Possibly silly attempt to execute empty statement list.");for(var o=this,s=0;s<t.length;++s){var n=t[s];google.logger("SQL: "+n.sql+" PARAMS: "+n.params),this.tx_.executeSql(n.sql,n.params,function(t,s){if(e&&e.onSuccess){var n=new google.wspl.html5.ResultSet(s);e.onSuccess(o,n)}},function(t,o){return e&&e.onFailure&&e.onFailure(o),!0})}},google.wspl.html5.Database=function(t,e){this.sequenceNum_=1,this.inflightTransactions_={};var o=e||window;if(this.db_=o.openDatabase(t,"",t,google.wspl.LARGEST_SUPPORTED_DATABASE),null==this.db_)throw Error("The returned database was null.")},google.inherits(google.wspl.html5.Database,google.wspl.Database),google.wspl.html5.Database.prototype.createTransaction=function(t,e){var o=e||{onSuccess:function(){},onFailure:function(){}},s=this.sequenceNum_++,n=this.inflightTransactions_;n[s]=this.getCurrentTime(),this.db_.transaction(function(e){delete n[s],t(new google.wspl.html5.Transaction(e))},function(t){o.onFailure(t)},function(){o.onSuccess()})},google.wspl.html5.Database.prototype.hasInflightTransactions=function(t){for(var e in this.inflightTransactions_){var o=this.inflightTransactions_[e];if(this.getCurrentTime()-o>t)return!0}return!1},google.wspl.html5.Database.prototype.getCurrentTime=function(){var t=new Date;return t.getTime()},google.wspl.html5.ResultSet=function(t){this.result_=t,this.index_=0},google.inherits(google.wspl.html5.ResultSet,google.wspl.ResultSet),google.wspl.html5.ResultSet.prototype.isValidRow=function(){return this.index_>=0&&this.index_<this.result_.rows.length},google.wspl.html5.ResultSet.prototype.next=function(){this.index_++},google.wspl.html5.ResultSet.prototype.getRow=function(){return this.result_.rows.item(this.index_)};