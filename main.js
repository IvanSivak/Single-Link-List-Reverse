// Linked list class
function LinkedList(){
	this.head = null;
  this.tail = null;
  this.addNode = function(val){
  	var n = new Node(val);
    if (this.tail != null) this.tail.next = n;
  	if (this.head == null) this.head = n;
    this.tail = n;
  }.bind(this);
  
  this.reverse = function(){
  	var current = this.head,
    		prev = null;
    while (current != null){
    	var next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }.bind(this);
}

// Node class
function Node(val){
	this.val = val;
  this.next = null;
}

// Test data
var list = new LinkedList();
for (var i = 1; i <= 20; i++) list.addNode(i);

// Reversing
list.reverse();

// log
console.log(list)
