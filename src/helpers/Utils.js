const formatCurrency = (value, character = '.') => {
  return value == '' || value == null
    ? ''
    : value
        .toString()
        .replace(/[.]/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, character);
};

export {formatCurrency};
