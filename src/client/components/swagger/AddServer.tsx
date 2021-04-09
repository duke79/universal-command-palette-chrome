import { Icon } from 'antd';
import * as React from 'react';

const AddServer = (props: { serverUrl: string }) => {
  const { serverUrl } = props;
  return <div>
    <span style={{ color: '#00ff1f', marginRight: '10px' }}>
      + Add Server:
    </span>
    <span>
      "{serverUrl}"
    </span>
  </div>;
};

export default AddServer;
