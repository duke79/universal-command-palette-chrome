import { OptionService } from 'universal-command-palette';
import TextRow from '../components/common/TextRow';
import { jsxToHtml, sleep } from '../utils';

const useServiceDummy = (): OptionService => {
  return {
    humanReadableId: 'dummy',
    htmlToRender: jsxToHtml(TextRow, { text: 'Dummy' }),
    searchableText: 'Dummy Service',
    // hasChildren: true,
    callback: async (queryStack) => {
      console.log({ queryStack });
      const list = ['baba', 'kaba', 'chakku', 'makku', 'sudoku'];
      await sleep(700);
      return {
        options: [...list, ...list, ...list].map(el => ({
          searchableText: el,
          htmlToRender: jsxToHtml(TextRow, { text: el }),
          humanReadableId: el,
          hasChildren: true,
        })),
        enableLocalSearch: true,
        queryStack,
      };
    },
  };
};

export default useServiceDummy;
