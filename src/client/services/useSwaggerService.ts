import { OptionService, Option } from 'universal-command-palette';
import TextRow from '../components/common/TextRow';
import AddServer from '../components/swagger/AddServer';
import { jsxToHtml, sleep } from '../utils';

const constants = {
  addServerId: '+ Add Server',
};

const useServiceSwagger = (): OptionService => {
  const getAddServerOption = async (serverUrl: string) => {
    return {
      searchableText: constants.addServerId,
      htmlToRender: jsxToHtml(AddServer, { serverUrl }),
      humanReadableId: `${constants.addServerId}: "${serverUrl}"`,
      hasChildren: true,
      extraData: {
        serverUrl,
      }
    };
  };

  const getServerList = async (queryStack: Option[]) => {
    const list = ['baba', 'kaba', 'chakku', 'makku', 'sudoku'];
    const options = [...list].map(el => ({
      searchableText: el,
      htmlToRender: jsxToHtml(TextRow, { text: el }),
      humanReadableId: el,
      hasChildren: true,
    })).concat(await getAddServerOption(queryStack[1].humanReadableId));
    console.log({ options });
    return {
      options,
      enableLocalSearch: false,
      queryStack: queryStack.slice(0, 2)
    };
  };

  const getOnAddServer = async (queryStack: Option[]) => {
    await sleep(3000);
    return {
      options: [],
      enableLocalSearch: true,
      queryStack: queryStack.slice(0, 1),
    };
  };

  const getServerOptions = async (queryStack: Option[]) => {
    const list = ['baba', 'kaba', 'chakku', 'makku', 'sudoku'];
    return {
      options: [...list, ...list, ...list].map(el => ({
        searchableText: el,
        htmlToRender: jsxToHtml(TextRow, { text: el }),
        humanReadableId: el,
        hasChildren: true,
      })),
      enableLocalSearch: true,
      queryStack: queryStack.slice(0, 1),
    };
  };

  const getServerApiList = async (queryStack: Option[]) => {
    const list = ['baba', 'kaba', 'chakku', 'makku', 'sudoku'];
    return {
      options: [...list, ...list, ...list].map(el => ({
        searchableText: el,
        htmlToRender: jsxToHtml(TextRow, { text: el }),
        humanReadableId: el,
        hasChildren: true,
      })),
      enableLocalSearch: true,
      queryStack: queryStack.slice(0, 3)
    };
  };

  return {
    humanReadableId: 'swagger',
    htmlToRender: jsxToHtml(TextRow, { text: 'Swagger' }),
    searchableText: 'Swagger',
    // hasChildren: true,
    callback: async (queryStack) => {
      if (queryStack.length === 2) {
        return await getServerList(queryStack);
      } else if (queryStack.length === 3) {
        console.log({ queryStack, constants });
        if (queryStack[1].humanReadableId.includes(constants.addServerId)) {
          return await getOnAddServer(queryStack);
        } else {
          return await getServerOptions(queryStack);
        }
      } else if (queryStack.length === 4) {
        return await getServerApiList(queryStack);
      }
      return await getServerList(queryStack);
    },
  };
};

export default useServiceSwagger;
