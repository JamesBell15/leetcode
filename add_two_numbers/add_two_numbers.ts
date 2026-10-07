// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // turn both lists into strings
    const l1_string = travelLinkedList('', l1);
    const l2_string = travelLinkedList('', l2);
    
    // stored in reverse order so reverse it 
    // turn strings to int
    const first_int = Number(l1_string.split("").reverse().join(""));
    const second_int = Number(l2_string.split("").reverse().join(""));

    // add together
    const sum = first_int + second_int

    // turn to string 
    const sum_string = sum.toString();

    // reverse string
    const sum_string_reverse = sum_string;

    // string to linked list
    return convertStringToLinkedList(sum_string_reverse, null)
};

// walk over the linked list and reduce it down to a string of the number.
function travelLinkedList(accumulator: string, list: ListNode | null): string {
 
    if (list == null) return accumulator;

    return travelLinkedList(accumulator + list.val.toString(), list.next);
};

// Turn a string into a linked list
function convertStringToLinkedList(source: string, list: ListNode | null): ListNode | null {
    if (source == '') return list;
    
    const value = Number(source[0]);
    const new_source = source.slice(1);

    return convertStringToLinkedList(new_source, new ListNode(value, list) )
}

export { ListNode, addTwoNumbers };