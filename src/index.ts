const testLongVariable =
  "this is a long string and could be splitted but shouldn't";

// should not be changed, because of "max_line_length = 200" in .editorConfig
const longArrowFunction = (parameterA: string, parameterB: boolean, parameterC: string) => {
  //nothing
};
