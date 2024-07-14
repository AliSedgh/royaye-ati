function transformString(input: string): string {
  const indicesToReplace = [2, 3, 7];
  let modified = input
    .split("")
    .map((char, index) => (indicesToReplace.includes(index) ? "*" : char))
    .join("");

  let reversed = modified.split("").reverse().join("");

  return reversed;
}

export default transformString;
