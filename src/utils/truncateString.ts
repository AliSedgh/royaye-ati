function truncateString(input: string, wordLimit: number = 20): string {
  const words = input.split("");

  if (words.length <= wordLimit) {
    return input;
  }

  const truncatedWords = words.slice(0, wordLimit).join("");
  return `${truncatedWords} ...`;
}

export default truncateString;
