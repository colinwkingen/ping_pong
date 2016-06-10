# Ping Pong
#### A Javascript fizz-buzz type test.
[Try Ping Pong] http://colinwkingen.github.io/ping_pong
#### Made With:
* HTML
* CSS
* Javascript
* jQuery
* Bootstrap
* Git

#### How it Works

The program will take a number, and print
all numbers below it counting by 1.
if the number is divisible by three
it wIll print "Ping". If it is divisible by 5 it will print "Pong".
If the number is divisible by 3 AND 5 it
will print "PingPong".

#### Specs:

+ The program takes an user created input from a text field, and generates an output.
  - Example Input: 1
  - Example Output: 1

+ The program accepts only numbers.
  - Example Input: 1
  - Example Output: 1
  - Example Input: Potato
  - Example Output: ...

+ The program print an error message to the screen for non-numbers including the input.
  - Example Input: 1
  - Example Output: 1
  - Example Input: Potato
  - Example Output: "Potato is not a usable number!"

+ The program prints an error message at large numbers, and refuses very large ones..
  - Example Input: 987209
  - Example Output: "Ack"
  - Example Input: 98722324309
  - Example Output: "Nope"

+ The program prints valid numbers to the screen.
  - Example Input: 1
  - Example Output: "1"

+ The program prints all the decending numbers lower than the input counting by one.
  - Example Input: 4
  - Example Output: 4, 3, 2, 1

+ In the output, the program replaces any numbers divisible by 3 with the word "Ping".
  - Example Input: 4
  - Example Output: 4, Ping, 2, 1

+ In the output, the program replaces any numbers divisible by 5 with the word "Pong".
  - Example Input: 6
  - Example Output: 6, Pong, 4...

+ In the output, the program replaces any numbers divisible by 15 with the word "PingPong".
  - Example Input: 16
  - Example Output: 16, PingPong, 14...

+ The program has input buttons that increase and return the font size on click.
  - Example Input: little 1
  - Example Output: big 1

+ The program has an "Insanity mode" button which toggles a class that adds really
  horrible styling to many elements, and a button to remove this class.
  - Example Input: click event
  - Example Output: all headers are huge and purple



##### Licence

License Copyright (c) 2016 Colin Kingen
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
