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
google.wspl.gears.Transaction=function(t,e){google.wspl.Transaction.call(this),this.id_=t,this.db_=e,this.activeExecutes_={}},google.inherits(google.wspl.gears.Transaction,google.wspl.Transaction),google.wspl.gears.Transaction.prototype.numActiveExecutes_=0,google.wspl.gears.Transaction.prototype.nextCallbackId_=1,google.wspl.gears.Transaction.prototype.needsRollback_=!1,google.wspl.gears.Transaction.prototype.executeAll=function(t,e){if(0==t.length)throw Error("Possibly silly attempt to execute empty statement list.");0==this.numActiveExecutes_&&this.db_.doBegin(this.id_),this.numActiveExecutes_++;var s=this.nextCallbackId_++,o=e||{onSuccess:function(){},onFailure:function(){}};this.activeExecutes_[s]={statements:t,currentStatement:0,callback:o},this.db_.doExecute(t,s,this.id_)},google.wspl.gears.Transaction.prototype.success=function(t,e){if(!this.needsRollback_){var s=this.activeExecutes_[e];s.callback.onSuccess(this,t)}this.endStatement_(e)},google.wspl.gears.Transaction.prototype.failure=function(t,e){if(!this.needsRollback_){this.needsRollback_=!0;var s=this.activeExecutes_[e];s.callback.onFailure(t)}this.endStatement_(e)},google.wspl.gears.Transaction.prototype.endStatement_=function(t){var e=this.activeExecutes_[t],s=e.statements,o=++e.currentStatement;o==s.length&&this.endExecute_(t)},google.wspl.gears.Transaction.prototype.endExecute_=function(t){delete this.activeExecutes_[t],this.numActiveExecutes_--,this.isExecuting()||this.endTransaction_()},google.wspl.gears.Transaction.prototype.endTransaction_=function(){this.needsRollback_?this.db_.doRollback(this.id_):this.db_.doCommit(this.id_)},google.wspl.gears.Transaction.prototype.isExecuting=function(){return this.numActiveExecutes_>0};