import { OptionService } from "universal-command-palette";
import useDummyService from "./services/useDummyService";
// import useExecutionService from "./services/useExecutionService";

export const useOptionsServices = (): OptionService[] => {
  const serviceDummy = useDummyService();
  // const executionService = useExecutionService();
  return [serviceDummy];
};
