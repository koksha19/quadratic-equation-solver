# Quadratic Equation Solver

## Description
This repo contains code for Node.js console application, which solves 
quadratic equations. This app contains two modes:
- Interactive mode
- File mode

## Project installation and setup

### Node.js installation
To try this app Node.js has to be installed on your computer.
To check if it is installed run the following command:

```bash
node -v
```

If you get the version number, you're good to go. Otherwise, visit
[Node.js](https://nodejs.org/en/download) for installation.

### Cloning 
After that, make a local copy of this repository by running this command:

```bash
git clone https://github.com/koksha19/quadratic-equation-solver.git
```

### Launching

#### Interactive mode
Now that you have the project set up, open terminal or command line in
the project's folder and run the following command:

```bash
node main
```

This command will start the interactive mode of this application. You will
be asked to enter 3 coefficients of quadratic equation, which will be
solved next.

#### File mode
If you want to start the file mode, you should add the coefficients file
path to the previous command:

```bash
node main [your_path]
```

Possible command:

```bash
node main ./file.txt
```

This command will immediately form an equation based on the file content
and return the result.

### File format
If you are using file mode, your file should match those criteria:

- It has to be a .txt file
- 3 coefficients should be separated with spaces like that: 1 2 3
- Period is expected as a floating point:
    - 3,75 - incorrect
    - 3.75 - correct

### Revert commit
This repo contains [revert commit](https://github.com/koksha19/quadratic-equation-solver/commit/e388bf202d6e1e4643b40d89764c5b317fc33c05), which was created to simplify the 
logic of that commit and change the message.