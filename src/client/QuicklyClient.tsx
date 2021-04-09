import React from 'react';
import { useOptionsServices } from "./useOptionServices";
import { QuicklyProvider, useQuickly } from 'universal-command-palette';


const QuicklyClient = (props: { children: any; }): React.ReactElement => {

  return <QuicklyProvider hotkey="ctrl+shift+l">
    <QuicklyServices />
    {props.children}
  </QuicklyProvider>
};

const QuicklyServices = () => {
  const services = useOptionsServices();
  const quickly = useQuickly();

  React.useEffect(() => {
    quickly.registerOptionServices(services);
    quickly.handleQuicklyModalShow();
  }, []);

  React.useEffect(() => {
    if (!quickly.isQuicklyModalVisible) {
      quickly.handleQuicklyModalShow();
    }
  }, [quickly.isQuicklyModalVisible]);

  return null;
};

export default QuicklyClient;
