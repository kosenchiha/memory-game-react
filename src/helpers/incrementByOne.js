export const incrementByOne = key => state => {
  return {
    [key]: state[key] + 1
  };
};
