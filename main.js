import PriorityQueue from "./priorityqueue.js";
import Queue from "./queue.js";
import HashTable from "./hashtable.js";
import BfsGraph from "./bfsGraph";
import LinkedList from "./linkedlist.js";
import BST from "./bst.js";
import Stack from "./stack.js";

var pq = new PriorityQueue();
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Muntakimur Rahaman", 1]);
pq.enqueue(["Nobel Hasan", 2]);
pq.print();
pq.dequeue();
pq.front();
pq.print();

let ht = new HashTable();
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosor");
ht.add("tux", "penguin");
console.log(ht.lookup("tux"));
ht.print();

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();
console.log(q.size());

var exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log(BfsGraph(exBFSGraph, 1));

var conga = new LinkedList();
conga.add("kitten");
conga.add("puppy");
conga.add("Dog");
conga.add("Cat");
conga.add("Fish");
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf("puppy"));
console.log(conga.size());

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(5);
bst.add(8);
bst.add(9);
bst.add(19);
bst.add(3);
bst.add(7);
bst.remove(4);

console.log(bst.findMax());
console.log(bst.findMin());
bst.remove(19);

console.log(bst.findMax());
console.log(bst.isPresent(4));

bst.add(15);
bst.add(13);
bst.add(1);

console.log(bst.findMaxHeight());
console.log(bst.findMinHeight());
console.log(bst.isBalanced());

console.log("InOrder ", bst.inOrder());
console.log("PreOrder ", bst.preOrder());
console.log("PostOrder ", bst.postOrder());
console.log("LevelOrder  ", bst.levelOrder());

var mystack = new Stack();

mystack.push(1);
mystack.push(2);

console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.peek());
mystack.push("freecodecamp");
console.log(mystack.size());
console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.peek());
