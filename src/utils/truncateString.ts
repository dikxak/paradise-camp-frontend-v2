const MAX_STRING_LENGTH = 135;

const truncateString = (str: string, length: number = MAX_STRING_LENGTH) => {
  if (str.length <= length) return str;

  return `${str.slice(0, length)}...`;
};

export default truncateString;
