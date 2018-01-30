# General information
_Author_: Jeremy Pearson

_Version_: 1.0.0

_Libraries_: jest

_Last modified_: 1/30/2018

# Function use

## Example
[output] = function([inputs])

_Brief description_

## Challenge functions
[NEW QUEUE OBJECT MADE OF 2 STACKS (EnqStack and DeqStack)] = new whiteboardFn.TwoStackQueue()

[ENQUEUES A NODE IN THE FIRST STACK (EnqStack)] = [TwoStackQueue object].twoStackEnqueue([VALUE TO ENQUEUE])

[DEQUEUES A NODE FROM THE SECOND STACK (DeqStack)] = [TwoStackQueue object].twoStackDequeue()

    - Returns null if both stacks are empty (empty queue)
    - Moves the enqueue stack to dequeue stack if enqueue is not empty but dequeue is empty and assigns a new stack to the enqueue stack

# Challenge Readme (SPECS)
Whiteboard Challenge 12
Complete today's whiteboard challenge and follow the submission instructions below:

Implement a Queue using only two Stacks

Whiteboard Challenge Submission Instructions
Root Repository Configuration
Configure the root of your repository with the following files and directories.

README.md - contains documentation
.gitignore - contains a robust .gitignore file
.eslintrc - contains the course linter configuration
.eslintignore - contains the course linter ignore configuration
Configure each daily whiteboard solution directory with the following files and directories. Thoughtfully name any other directories or files.

pseudo-solution.jpeg (or other image file format) - containers a picture of your pseudo-coded solution from the whiteboarding exercise
package.json - contains npm package config
configure a test script for running tests with Jest
index.js - contains the executable entry point for your solution
lib/ - contains module definitions (if applicable)
__test__/ - contains unit tests for any solution code in index.js or other modules in the lib directory
With your assigned partner, pseudo-code your solution on the whiteboard. Take a picture of your proposed solution for your repo.
Make a new branch and folder in your whiteboard challenge repository on Github. The name of the folder should be the same as the name of the challenge.
Complete the whiteboard challenge in your text editor, and verify that it's functional.
Include at least three unit tests for each function that you write for your solution.
Make a pull request from your working branch to your master branch.
Submit a link to your PR on Canvas.