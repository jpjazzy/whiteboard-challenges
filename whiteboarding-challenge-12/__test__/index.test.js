'use strict';


const whiteboardFn = require('../index');
require('jest');



describe('#null Case ', function() {
  it('Should return: empty stacks', function() {
    expect(new whiteboardFn.TwoStackQueue()).toEqual({"DeqStack": {"maxSize": 1337, "size": 0, "top": null}, "EnqStack": {"maxSize": 1337, "size": 0, "top": null}});
  });
});

let TSQ = new whiteboardFn.TwoStackQueue();
TSQ.twoStackEnqueue(1);
TSQ.twoStackEnqueue(5);
TSQ.twoStackEnqueue(9);
describe('#Standard Case ', function() {
  it('Should return: An enqueue stack only with nodes having 1, 5, 9.', function() {
    expect(TSQ).toEqual({"DeqStack": {"maxSize": 1337, "size": 0, "top": null}, "EnqStack": {"maxSize": 1337, "size": 3, "top": {"next": {"next": {"next": null, "val": 1}, "val": 5}, "val": 9}}});
  });
});

let TSQ2 = new whiteboardFn.TwoStackQueue();
TSQ2.twoStackEnqueue(1);
TSQ2.twoStackEnqueue(5);
TSQ2.twoStackEnqueue(9);
TSQ2.twoStackDequeue();
describe('#Standard Case ', function() {
  it('Should return: An dequeue stack only with nodes having 1, 5', function() {
    expect(TSQ2).toEqual({"DeqStack": {"maxSize": 1337, "size": 2, "top": {"next": {"next": null, "val": 1}, "val": 5}}, "EnqStack": {"maxSize": 1337, "size": 0, "top": null}});
  });
});

