const MAX_STRING_LENGTH = 135;

const truncateString = (str: string) => {
  if (str.length <= MAX_STRING_LENGTH) return str;

  return `${str.slice(0, MAX_STRING_LENGTH)}...`;
};

export default truncateString;
