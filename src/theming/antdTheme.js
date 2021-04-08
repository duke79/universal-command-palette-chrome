const defaultTheme = {
  primaryColor: '#1890FF',
  fontFamily: "'Open Sans', sans-serif",
};

const getDefaultAntTheme = () => {
  const hoverActiveColor = '#eee';
  const toRet = {
    'item-hover-bg': hoverActiveColor,
    'item-active-bg': hoverActiveColor,
    'table-row-hover-bg': hoverActiveColor,
  };
  if (defaultTheme.primaryColor) {
    toRet['primary-color'] = defaultTheme.primaryColor;
  }

  if (defaultTheme.fontFamily) {
    toRet['font-family'] = defaultTheme.fontFamily;
  }
  return toRet;
};

module.exports = {
  getDefaultAntTheme,
}