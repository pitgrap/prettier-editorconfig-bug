// see https://prettier.io/docs/en/options.html#print-width
// "Setting max_line_length in an .editorconfig file will configure Prettier’s print width, unless overridden."


// the following examples should not be changed, because of "max_line_length = 200" in .editorConfig
// doesn't work on Windows and Linux.

// example 1:
const testLongVariable = "this is a long string and could be splitted but shouldn't";

// example 2:
const longArrowFunction = (parameterA: string, parameterB: boolean, parameterC: string) => {
  //nothing
};
