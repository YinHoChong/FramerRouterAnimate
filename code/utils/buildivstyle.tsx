// eslint-disable-next-line import/prefer-default-export

export const buildDivStyle = (props = {}) => {
  return Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (value) {
      acc[key] = value;
    }
    return acc;
  }, {});
};
