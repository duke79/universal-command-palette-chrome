// import { editShipmentTask, fetchAllShipment, fetchShipmentTasks, getTaskCountByStatusForShipment, searchShippingApi } from "src/api/shipmentExecution";
// import { SETask } from "src/dto/response/fetchShipmentTasks";
// import { APIResponseType } from "src/Library/Types";
// import { OptionService, Option } from "universal-command-palette";
// import ShipmentRow from "../components/execution/ShipmentRow";
// import TextRow from '../components/common/TextRow';
// import { jsxToHtml, sleep } from '../utils';
// import { ExecutionShipment, ExecutionTask } from "../types";
// import TaskRow from "../components/execution/TaskRow";
// import { taskStatusMap } from "src/components/pages/ShipmentExecution/SEShipmentsList/SEShipmentCard";
// import TaskStatusRow from "../components/execution/TaskStatusRow";
// import ApiDto from "src/dto/ApiDto";
import { message } from "antd";

// const useExecutionService = (): OptionService => {
//   const searchShipment = async (queryString: string): Promise<Option[]> => {
//     const response = await searchShippingApi({ queryString, viewType: 'SHIPPER' /*VENDOR*/ });
//     if (response.isSuccess) {
//       const shipments = response.data as {
//         id: string;
//         name: string;
//         searchType: string;
//         shipmentIdList: string;
//       }[];
//       return shipments.map(sh => ({
//         htmlToRender: sh.name,
//         humanReadableId: sh.shipmentIdList[0],
//         // hasChildren: false,
//         searchableText: sh.name,
//       }));
//     }
//     return [{
//       htmlToRender: 'No shipment found!',
//       humanReadableId: 'No shipment found!',
//       // hasChildren: false,
//     }];
//   };

//   const getShipmentsWithInfo = async (shipmentIdList: string[], summaries?: {[key: string]: { [key: string]: number }}): Promise<Option[]> => {
//     // console.log({ shipmentIdList, summaries });
//     if(shipmentIdList?.length && summaries && Object.keys(summaries)?.length) {
//       const response = await fetchAllShipment({ shipmentIdList, viewType: 'SHIPPER' /*VENDOR*/ });
//       if (response.isSuccess && response.data?.data?.length) {
//         const shipments = response.data?.data || [];
//         return shipments?.map(sh => ({
//           htmlToRender: jsxToHtml(ShipmentRow, { ...sh, status: summaries?.[sh.id] }),
//           humanReadableId: sh.referenceNumber,
//           // hasChildren: true,
//           searchableText: sh.referenceNumber,
//           extraData: sh,
//         }));
//       }
//     }
//     return [{
//       htmlToRender: 'No shipments found!',
//       humanReadableId: 'No shipments found!',
//       // hasChildren: false,
//     }];
//   };

//   const fetchTaskSummaries = async (shipmentIdList: string[]) => {
//     if(!shipmentIdList?.length) return [];

//     const response: APIResponseType<{
//       sourceObjectId: string;
//       status: string;
//       count: number;
//     }[]> = await getTaskCountByStatusForShipment({ shipmentIdList });

//     const taskSummaries = response.data?.length && response.data.reduce((acc, cur) => {
//       if (!acc[cur.sourceObjectId]) acc[cur.sourceObjectId] = {};
//       acc[cur.sourceObjectId][cur.status] = cur.count;
//       return acc;
//     }, {});

//     return taskSummaries;
//   };

//   const fetchTasks = async (shipmentId): Promise<Option[]> => {
//     const response = await fetchShipmentTasks({ shipmentId });
//     if (response.isSuccess) {
//       const tasks = response.data;
//       // console.log({ tasks });
//       const ret = tasks ? Object.keys(tasks)
//       ?.filter(key => !['currentShipmentMilestone', 'currentSequenceNumber'].includes(key))
//       ?.reduce((acc, key) => {
//         if(tasks[key]) {
//           // console.log({ acc, tasks: tasks[key] });
//           acc = [
//             ...acc,
//             ...tasks[key].tasks?.map(el => {
//               const disabled = (response.data as any)?.currentSequenceNumber &&
//                 (el.sequenceNumber > (response.data as any)?.currentSequenceNumber);
//               return {
//                 ...el,
//                 milestone: key,
//                 disabled
//               };
//             }),
//           ];
//         }
//         return acc;
//       }, [] as ExecutionTask[]) : [];
//       // const keys = Object.keys(ret).filter(key => key !== 'currentShipmentMilestone').map(key => {
//       //   return key;
//       // });
//       // console.log({ ret });
//       return ret.map(task => ({
//         htmlToRender: jsxToHtml(TaskRow, task),
//         humanReadableId: task.name,
//         searchableText: `${task.name} ${task.milestone}`,
//         // hasChildren: true,
//         extraData: task,
//       }))
//     }
//     return [{
//       htmlToRender: 'No tasks found!',
//       humanReadableId: 'No tasks found!',
//       // hasChildren: false,
//     }];
//   };

//   const getTaskStatusOptions = (task: ExecutionTask): Option[] => {
//     return Object.keys(taskStatusMap).map(key => ({
//       htmlToRender: jsxToHtml(TaskStatusRow, { taskStatus: task.status, statusKey: key }),
//       humanReadableId: key,
//       searchableText: key,
//       // hasChildren: false,
//     }));
//   };

//   const handleUpdateTaskStatus = async (shipment: ExecutionShipment, task: ExecutionTask, status: string) => {
//     const body: typeof ApiDto.CreateShipmentTaskDto = {
//       sourceObjectId: shipment.id,
//       responsibleOrganisationId: task.responsibleOrganisationId,
//       responsibleTeamId: task.responsibleTeamId,
//       responsibleUserId: task.responsibleUserId,
//       name: task.name,
//       deadline: task.deadline,
//       taskId: task?.id,
//       sourceObjectType: 'SHIPMENT',
//       status,
//       deadlineDelta: task.deadlineDelta,
//     } as any;

//     const editShipmentTaskParams = {
//       shipmentId: shipment.id,
//       taskId: task?.id,
//     };

//     const response = await editShipmentTask(editShipmentTaskParams, body);
//     if (!response.isSuccess) {
//       if (
//         status === 'Done' &&
//         response.errorMessage.includes('All mandatory fields must be present before')
//       ) {
//         message.error('Fields missing');
//       } else {
//         message.error(response.errorMessage);
//       }
//     } else {
//       // TODO: commenting it because status Dropdown stays changed even if API fails, hence always fetching tasks
//       // await fetchTasks(sourceObjectId);
//     }
//   };

//   return {
//     humanReadableId: 'Execution',
//     htmlToRender: jsxToHtml(TextRow, { text: 'Execution' }),
//     searchableText: 'Shipment Execution',
//     // hasChildren: true,
//     callback: async (queryStack) => {
//       console.log({ queryStack });
//       // await sleep(700);
//       if(queryStack.length === 2) {
//         const shipmentIdList = (await searchShipment(queryStack[1]?.humanReadableId)).map(sh => sh.humanReadableId);
//         const summaries = await fetchTaskSummaries(shipmentIdList) as any;
//         const shipments = await getShipmentsWithInfo(shipmentIdList, summaries);
//         // console.log({ summaries });
//         return {
//           options: shipments,
//           enableLocalSearch: false,
//           queryStack,
//           rowHeight: 90,
//           listHeight: 360,
//         };
//       } else if(queryStack.length === 3) {
//         const tasks = await fetchTasks(queryStack[1]?.extraData?.id);
//         return {
//           options: tasks,
//           enableLocalSearch: true,
//           queryStack,
//         };
//       } else if(queryStack.length === 4) {
//         const tasks = await fetchTasks(queryStack[1]?.extraData?.id);
//         const statuses = getTaskStatusOptions(tasks.find(el => el.humanReadableId === queryStack[2]?.humanReadableId)?.extraData);
//         return {
//           options: statuses,
//           enableLocalSearch: true,
//           queryStack,
//         };
//       } else if(queryStack.length === 5) {
//         // const tasks = await fetchTasks(queryStack[1]?.extraData?.id);
//         // await sleep(2000);
//         await handleUpdateTaskStatus(queryStack[1]?.extraData, queryStack[2]?.extraData, queryStack[3]?.humanReadableId);

//         return {
//           options: [], //tasks,
//           enableLocalSearch: true,
//           queryStack: queryStack.slice(0, 2),
//         };
//       }
//       return {
//         options: ['baba', 'kaba', 'chakku', 'makku', 'sudoku'].map(el => ({
//           searchableText: el,
//           htmlToRender: jsxToHtml(TextRow, { text: el }),
//           humanReadableId: el,
//           // hasChildren: true,
//         })),
//         enableLocalSearch: false,
//         queryStack,
//       };
//     },
//   };
// };

// export default useExecutionService;
