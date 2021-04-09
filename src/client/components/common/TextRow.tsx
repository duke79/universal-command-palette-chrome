import { Icon } from 'antd';
import * as React from 'react';

const TextRow = (props: { text: string, style?: React.CSSProperties }) => {
  const { text, style } = props;
  return <div style={{ ...style }}>
    {/* <Icon type="loading" style={{ fontSize: '20px', marginLeft: '10px' }} spin /> */}
    {text}
  </div>;
};

export default TextRow;
