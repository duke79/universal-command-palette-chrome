import * as React from 'react';
// import { taskStatusMap } from 'src/components/pages/ShipmentExecution/SEShipmentsList/SEShipmentCard';
// import { ExecutionShipment } from '../../types';

// const ShipmentRow = (props: ExecutionShipment) => {
//   const {
//     referenceNumber,
//     originPortName,
//     destinationPortName,
//     mode,
//     type,
//     cargoType,
//     cargoSubtype,
//     status,
//   } = props;

//   // console.log({ status });

//   const propStyle: React.CSSProperties = {
//     marginRight: 25,
//     color: '#aaaaaa',
//     fontSize: '15px',
//   };

//   const renderStatus = (key, value, isLast) => {
//     return <span>
//       <span>
//         <span style={{ color: taskStatusMap[key]?.color}}>{key}</span>: {value}
//       </span>
//       {isLast ? null : ', '}
//     </span>;
//   };

//   const renderStatuses = () => {
//     const keys = Object.keys(status);
//     return status ? <span style={propStyle}>
//       {keys.map((key, idx) => (renderStatus(key, status[key], idx === keys.length - 1)))}
//   </span> : null;
//   };

//   return <div style={{ display: 'flex', flexDirection: 'column' }}>
//     <div>
//       <span style={{ marginRight: 15 }}>
//         {referenceNumber}
//       </span>
//       {renderStatuses()}
//     </div>
//     <div>
//       {originPortName || destinationPortName ? <span style={propStyle}>
//         ({originPortName} - {destinationPortName})
//       </span> : null}
//       {mode || type ? <span style={propStyle}>
//         ({mode} - {type})
//       </span> : null}
//       {cargoType || cargoSubtype ? <span style={propStyle}>
//         ({cargoType} - {cargoSubtype})
//       </span> : null}
//     </div>
//   </div>;
// };

// export default ShipmentRow;
