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
google.wspl.Statement=function(t,e){this.sql=t,this.params=e||[]},google.wspl.Statement.prototype.createStatement=function(t){return new google.wspl.Statement(this.sql,t)},google.wspl.Transaction=function(){},google.wspl.Transaction.prototype.execute=function(t,e){this.executeAll([t],e)},google.wspl.Transaction.prototype.executeAll=function(){throw Error("executeAll not implemented")},google.wspl.Database=function(){},google.wspl.Database.prototype.createTransaction=function(){throw Error("createTransaction not implemented")},google.wspl.Database.prototype.execute=function(t,e,o){this.createTransaction(function(o){o.execute(t,e)},o)},google.wspl.Database.prototype.executeAll=function(t,e,o){this.createTransaction(function(o){o.executeAll(t,e)},o)},google.wspl.ResultSet=function(){},google.wspl.ResultSet.prototype.isValidRow=function(){throw Error("isValidRow not implemented")},google.wspl.ResultSet.prototype.next=function(){throw Error("next not implemented")},google.wspl.ResultSet.prototype.getRow=function(){throw Error("getRow not implemented")};