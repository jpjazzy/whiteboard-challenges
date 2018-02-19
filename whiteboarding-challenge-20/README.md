# General information
_Author_: Jeremy Pearson

_Version_: 1.0.0

_Libraries_: none (NO TESTING REQUIRED TODAY.)

_Last modified_: 2/19/2018

# Function use

## Example
[output] = function([inputs])

_Brief description_

## Challenge functions
[output specified array by callback function with a new array matching the size of the input array] = utils.map(inputArray, callback(current value[, index, array]))

[output specified array by callback function with a new array for all truthy evaluations using the callback] = utils.filter(inputArray, callback(current value[, index, array]))

[output specified by callback function with a new array matching the size of the input array] = utils.reduce(inputArray, callback(accumulator, current value[, index, array]), starting value)

_Three functions matching the equivalent of Array.prototype.map, Array.prototype.reduce, Array.prototype.filter (SEE MDN FOR MORE INFO)_

# Challenge Readme (SPECS)
26: Whiteboard Challenge
Requirements
Create a utils.js module which exports the following methods: map(), filter(), and reduce(). You will implement these methods from scratch, not utilizing the built-in array methods.

Submission Instructions
With your assigned partner, pseudocode your solution on the whiteboard. Take a picture of your proposed olution for your repo.
Make a new branch and folder in your whiteboard challenge repository on GitHub. The name of the folder should be the same as the name of the challenge.
This folder should contain:
A file named solution.js which contains the JavaScript solution
A picture of your pseudocoded solution from the whiteboarding exercise
A README.md which includes the problem domain
Complete the whiteboard challenge in your text editor, and verify that it's functional.
Make a pull request from your working branch to your master branch.
Submit a link to your PR, or a link to your repo/submission, in Canvas.