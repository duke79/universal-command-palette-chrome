import * as React from 'react';
// import * as moment from 'moment';
// import { ExecutionTask } from '../../types';
// import { taskStatusMap } from 'src/components/pages/ShipmentExecution/SEShipmentsList/SEShipmentCard';

// const TaskRow = (props: ExecutionTask) => {
//   const {
//     name,
//     responsibleUserName,
//     milestone,
//     updatedAt,
//     status,
//     approvalStatus,
//   } = props;

//   const propStyle: React.CSSProperties = {
//     marginRight: 25,
//     color: '#aaaaaa',
//     fontSize: '15px',
//   };

//   return <div>
//     <span style={{ marginRight: 15 }}>
//       {name}
//     </span>
//     {milestone ? <span style={propStyle}>
//       {milestone}
//     </span> : null}
//     {responsibleUserName ? <span style={propStyle}>
//       ({responsibleUserName})
//     </span> : null}
//     {status ? <span style={{ ...propStyle, color: taskStatusMap[status]?.color }}>
//       {status}
//     </span> : null}
//     {updatedAt ? <span style={propStyle}>
//       {moment.utc(updatedAt).local().format('llll')}
//     </span> : null}
//     {/* {approvalStatus ? <span style={{ ...propStyle, ...getApprovalStyle(approvalStatus as any) }}>
//       {approvalStatus}
//     </span> : null} */}
//   </div>;
// };

// const getApprovalStyle = (
//   status: 'Approved' | 'Approval Needed' | 'Rejected' | 'Approval Pending'
// ) => {
//   // console.log({ status });
//   switch (status) {
//     case 'Approved':
//       return {
//         // borderColor: '#46B774',
//         color: '#46B774',
//         background: '#E0FFEB',
//         // color: '#E0FFEB',
//       };
//     case 'Approval Needed':
//       return {
//         // borderColor: '#4A4650',
//         color: '#4A4650',
//         background: '#F2EFF5',
//         // color: '#F2EFF5',
//       };
//     case 'Rejected':
//       return {
//         // borderColor: '#F24E4E',
//         color: '#F62C2C',
//         background: '#FFEFEF',
//         // color: '#FFEFEF',
//       };
//     case 'Approval Pending':
//     default:
//       return {
//         borderColor: '#8B1FCA',
//         color: '#8B1FCA',
//         background: '#F0D6FF',
//         // color: '#F0D6FF',
//       };
//   }
// };

// export default TaskRow;
