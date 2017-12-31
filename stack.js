var Stack = function() {
  this.storage = "";
  this.length = 0;
  this.lastValueLength = "";
};

Stack.prototype.push = function (val) {
  this.storage += `--${val}`;
  this.lastValueLength = val.length;
  this.length++;
  return this.lastValueLength;
};

Stack.prototype.pop = function () {
  let lastIndex = this.storage.length - (this.lastValueLength + 2);
  this.storage = this.storage.slice(0, lastIndex);
  this.length--;
  return this.storage;
};

Stack.prototype.size = function () {
  return this.length;
};

var myWeeklymenu = new Stack();

myWeeklymenu.push("RedBeans");
myWeeklymenu.push("Rice");
myWeeklymenu.pop();
myWeeklymenu.size();