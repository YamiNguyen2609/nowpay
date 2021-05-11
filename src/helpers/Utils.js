const formatCurrency = (value, character = '.') => {
  return value == '' || value == null
    ? ''
    : value
        .toString()
        .replace(/[.]/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, character);
};

const convertHex = (value) => {
  return (value + 0x10000).toString(16).substr(-2).toUpperCase();
};

export {formatCurrency, convertHex};
