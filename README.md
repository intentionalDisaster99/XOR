# XOR Neural Network Project
<!-- This is my first ever Github readme so, yes, it will be ugy -->

## WHAT IS THIS????
This is just a simple project that I made while following The Coding Train's tutorial[^1] on YouTube.
[^1]: The tutorial is great and it is [here](https://www.youtube.com/watch?v=188B6k_F9jU&list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh&index=19&pp=iAQB).

## Okay, How Does It Work?
It uses my version of The Coding Train's toy nerual network library to approximate a simple XOR gate. 
Sounds boring, right? 
I don't know, but I enjoyed making it, so I'd say no.

## Why a Neural Network?
The reason you would need an actual neural network to approximate an XOR gate is because it is a nonlinear function. 
That sounds fancy but it really just means that you can't section off the "true" areas from the "false" areas with a straight line if you were trying to visualize it.

With this project, we _are_ actually visualizing it in a way that shows this nicely. 
It draws a canvas with true being to the right and down, then colors the canvas how the neural network \(which I have lovingly named Brian after misspelling brain) wants it to be colored.
It's in grayscale right now, but feel free to mess around with it and make it actually pretty.

Anyway, the best way to show the nonliner-ness of the XOR problem is probably to show you. 
Knowing how the canvas is drawn, with true to the left and right, here are a few **linear** examples[^2]:

[^2]: These examples were also created using this project. 
  If you want to recreate these examples, you can simply change the `trainingData` object in `Sketch.js` to match the new gate.

Here we have the AND gate:
**PUT THE AND IMAGE HERE**
As you can see, the black\(being false) and the white\(being true) could be separated by a simple straight line.

It is the same for the OR gate:
**PUT THE OR IMAGE HERE**

However, with the XOR gate, it's different:
**PUT THE XOR IMAGE HERE**
The XOR gate needs two lines to correctly define the cavas. That means we can't do it with a simple linear approximator, like a perceptron[^3]
[^3] Another project I made following along with Coding Train.

## I WANNA USE IT
Okay, nice! I've hooked ya!

I'm happy to say it is very simple. 
[Here](https://editor.p5js.org/intentionalDisaster99/full/8YwpnVwph) is the link to the webeditor project so that you can play with it right now!

OR if you want to make it harder on yourself, you can download the files.
It still shouldn't be impossible, though it will take longer.

Here are the steps
1. Download p5

Download p5 [here](https://p5js.org/download/), though you can also not download p5 and use the web editor instead. It takes a few more steps that I won't be going over because it's less intuitive, though it definitely isn't impossible.
After all, that's what I did to create the example above.

2. Download the files
   
I'm new to Github, but I do believe there is a download code button somewhere. You kinda need that because you need the files.
BUT don't think of it as me not knowing much about Github, think of it as a fun treasure hunt I'm giving you.
You'll also want to make sure they are all in the same folder too.

3. Adjust the path to p5

You're going to need to adjust the path to p5.js so that it matches wherever you downloaded p5.
This is simple enough to do, you can just navagate to your p5 download, right click, and hit "copy path".
Then, under, `index.html` you will need to change the line `<script src="\p5\p5.js"></script>` to `<script src="yourPath"></script>`.

4. Run the thing

According to my calculations, you are now ready to run it! What I've been doing is using Visual Studio Code's Live Server extension to host it, though I'm sure there are countless other ways to replicate this effect to be uncovered using a quick Google search.


##License
Distributed under the MIT License. See LICENSE.txt for more information.



