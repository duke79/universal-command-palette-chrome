import { OptionService } from "universal-command-palette";
import useDummyService from "./services/useDummyService";
import useServiceSwagger from "./services/useSwaggerService";
// import useExecutionService from "./services/useExecutionService";

export const useOptionsServices = (): OptionService[] => {
  const serviceDummy = useDummyService();
  // const executionService = useExecutionService();
  const swaggerService = useServiceSwagger();
  return [swaggerService, serviceDummy];
};
