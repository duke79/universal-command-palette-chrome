import { Icon } from 'antd';
import * as React from 'react';

const TextRow = (props: { text: string }) => {
  const { text } = props;
  return <div>
    {/* <Icon type="loading" style={{ fontSize: '20px', marginLeft: '10px' }} spin /> */}
    {text}
  </div>;
};

export default TextRow;
