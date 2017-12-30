function Node(data) {
  this.data = data;
  this.next = null
}

function LinkedList() {
  this._length = 0;
  this.head = null;
}

LinkedList.prototype.add = function(val) {
  var node = new Node(val);

  //if there is no head, set node to be the head of the list
  if(!this.head) {
    this.head = node;
    this._length++;
    return this;
  //otherwise...
  } else {
    var current = this.head;
    //we iterate till we get to the end 'null' current.next value
    while(current.next) {
      current = current.next;
    }
    //we switch that 'null' value to our new new node
    current.next = node;
    this._length++;
    return node;
  }
  
}

LinkedList.prototype.remove = function(val) {
  let currentNode = this.head;
  let previousNode; 

  //if the value to remove is the first item
  if(currentNode.data === val) {
    this.head = currentNode.next;
  } else {
      //loop through the references
      while (currentNode.data !== val) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      
      /*
      instead of delete()'ing the node, we simply lose its reference by assigning its
      previous node's 'next' value the value of its own 'next' value
      */
      previousNode.next = currentNode.next; //assign the previous node's 'next' value to be the current node's next value
  }

  this._length--;
}

LinkedList.prototype.indexOf = function(val) {
  let currentNode = this.head;
  let index = -1;

  while(currentNode) { //'while currentNode is not null'...
    index++;
    if (currentNode.data === val) {
      return index;
    }
    currentNode = currentNode.next;
  }

  //if not found, return -1
  return -1;
}

LinkedList.prototype.size = function() {
  return this._length;
}

LinkedList.prototype.getHead = function() {
  return this.head;
}

var ll = new LinkedList();
ll.add(3);
ll.add(6);
ll.add(9);
// ll.remove(3);
// console.log(ll);
console.log(ll.indexOf(8));

// console.log(ll.size());