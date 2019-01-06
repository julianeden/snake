/* basic implementation of a singly-linked list with helper class Node */

function Node(value=null, next=null) {
	this.value = value;
	this.next = next;
}

class LinkedList {
	constructor(tailValue, ...nodeValues) {
		if (tailValue) {
			this.tail = new Node(tailValue);
			this.head = this.tail;
			for (let value of nodeValues) {
				let node = new Node(value);
				this.head.next = node;
				this.head = node;
			}
		} else {
			this.head = null;
			this.tail = null;
		}
	}

	addToHead(nodeValue) {
		let node = new Node(nodeValue);
		if (this.head) {
			this.head.next = node;
			this.head = node;
		} else {
			this.head = node;
			this.tail = node;
		}
	}

	popTail() {
		let tail = this.tail;
		this.tail = this.tail.next;
		return tail.value;
	}

	getTail() {
		return this.tail.value;
	}

	getHead() {
		return this.head.value;
	}
}

export default LinkedList;