class NeuralNetwork {

    // Here is my constructor
    constructor(inputNumber, hiddenNumber, outputNumber) {

        // Setting up the instance variables
        this.numInputNodes = inputNumber;
        this.numHiddenNodes = hiddenNumber;
        this.numOutputNodes = outputNumber;

        // Getting random weights and biases
        this.weights_ih = new Matrix(this.numHiddenNodes, this.numInputNodes).randomize().mult(2).add(-1);
        this.weights_ho = new Matrix(this.numOutputNodes, this.numHiddenNodes).randomize().mult(2).add(-1);
        this.bias_h = new Matrix(this.numHiddenNodes, 1).randomize().mult(2).add(-1);
        this.bias_o = new Matrix(this.numOutputNodes, 1).randomize().mult(2).add(-1);

        // How quickly it will learn 
        this.learningRate = 0.1;

    }

    // A function to get a guess from the net
    feedForward(data) {

        // Making a matrix out of the input
        let input = Matrix.fromArray(data).transpose();

        // Getting the values of the hidden layer
        let hiddenOutput = Matrix.mult(this.weights_ih, input).add(this.bias_h).map(this.activation);
        // this.weights_ih.mult(input).add(this.bias_h);

        // Generating the output layer values
        let output = Matrix.mult(this.weights_ho, hiddenOutput).add(this.bias_o).map(this.activation);
        // this.weights_ho.mult(hidden).add(this.bias_o).map(sigmoid);

        return output.data;

    }

    // A function to train the net on a guess
    train(data, targets) {

        // Running the feed forwards algorithm to get all of the data we want from the inner layers

        // Making a matrix out of the input
        let input = Matrix.fromArray(data).transpose();

        // Getting the values of the hidden layer
        let hiddenOutput = Matrix.mult(this.weights_ih, input).add(this.bias_h).map(this.activation);
        // this.weights_ih.mult(input).add(this.bias_h);

        // Generating the output layer values
        let outputs = Matrix.mult(this.weights_ho, hiddenOutput).add(this.bias_o).map(this.activation);


        // console.table(targets);

        // Turning the labels into a matrix
        let labels = Matrix.fromArray(targets); // new Matrix().set(targets);

        // Now we need to find the error of the output layer
        // This might need to be transposed, though it might not 
        let outputErrors = Matrix.subtract(labels, outputs); // labels.subtract(outputs);

        // Now we need to find the gradients to figure out what will happen next
        // Running the gradient through the activation gradient
        let outputGradient = Matrix.map(outputs, this.activationPrime).mult(outputErrors).mult(this.learningRate);


        // console.log("These need to multiply to get 2 x 3");
        // console.log("Matrix a:");
        // outputGradient.print();
        // console.log("Matrix b:");
        // Matrix.transpose(hidden).print();

        // ! I think below might be where the problem lies
        // ! It would be that rogue Matrix.transpose(hidden)
        // ! I don't think it is the one directly below

        // Calculating the deltas (changes)
        let weights_ho_deltas = Matrix.mult(outputGradient, Matrix.transpose(hiddenOutput)); // outputGradient.mult(hidden.transpose());

        // Now to adjust the new weights going into the final layer
        this.weights_ho.add(weights_ho_deltas);

        // Adjusting the bias by the gradients
        this.bias_o.add(outputGradient);

        // Now for the earlier layer

        // ! The Matrix.transpose below might also be the problem here

        // Finding the error of the hidden layer
        let hiddenErrors = Matrix.transpose(this.weights_ho).mult(outputErrors); // this.weights_ho.transpose().mult(outputErrors);

        // Finding the hidden gradient
        // Should be a 4 x 1
        let hiddenGradient = Matrix.map(hiddenOutput, this.activationPrime).elementMult(hiddenErrors).mult(this.learningRate); // hidden.map(this.sigmoidPrime).mult(hiddenErrors).mult(this.learningRate);

        // ! Another Matrix.transpose below

        // The ih deltas
        let hiddenDeltas = Matrix.mult(hiddenGradient, Matrix.transpose(input)); // hiddenGradient.mult(input.transpose())

        // Adjusting the weights of the hidden layer
        this.weights_ih.add(hiddenDeltas);

        // Adjusting the ih bias by adding the hidden gradient
        this.bias_h.add(hiddenGradient);


    }

    // The activation function
    activation(x) {
        return sigmoid(x);
    }

    // The derivative of the activation function
    activationPrime(x) {
        return sigmoidPrime(x);
    }



}




// The sigmoid activation function
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

// The derivative of the sigmoid function
function sigmoidPrime(x) {
    return x * (1 - x);
}