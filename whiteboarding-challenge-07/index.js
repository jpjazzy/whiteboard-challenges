'use strict';
let whiteboardFn = module.exports = {};
whiteboardFn.checkLL = function(LL) {
    if (!LL) return null;
    let slow_pointer = LL;
    let fast_pointer = LL;

    let counter = 0;
    while (slow_pointer && fast_pointer && fast_pointer.next) {
        counter++;
        slow_pointer = slow_pointer.next;
        fast_pointer = fast_pointer.next.next;



        if (slow_pointer === fast_pointer) {
            return true;
        }

        if (counter > 1000) {
            return false;
        }
    }
    return false;
}