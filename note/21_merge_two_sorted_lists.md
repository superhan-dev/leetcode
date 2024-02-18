# Idea

Use two pointers to keep tracking the head1 and the head2.

And Use the tail variable as the key variable to append a node.

Compare two current nodes and append bigger node to the tail node.The tail variable point to the head1 node, therefore if you append a node to tail, the node also will append to head1 node.

All nodes should be sorted.

# Code

```javascript
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var nodeA1 = new ListNode(2);
var nodeA2 = new ListNode(2);
var nodeA4 = new ListNode(4);

nodeA1.next = nodeA2;
nodeA2.next = nodeA4;

var nodeB1 = new ListNode(1);
var nodeB3 = new ListNode(3);
var nodeB4 = new ListNode(4);

nodeB1.next = nodeB3;
nodeB3.next = nodeB4;

const mergeTwoLists = (head1, head2) => {
  // Pick a small node and swap it with bigger node.
  if (head1.val > head2.val) {
    let temp = head1;
    head1 = head2;
    head2 = temp;
  }

  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;

  while (current1 && current2) {
    if (current2.val < current1.val) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }

    tail = tail.next;
  }

  if (current1) tail.next = current1;
  if (current2) tail.next = current2;

  let temp = head1;
  while (temp) {
    console.log(temp.val);

    temp = temp.next;
  }

  return head1;
};

mergeTwoLists(nodeA1, nodeB1);
```
