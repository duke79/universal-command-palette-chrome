import * as React from 'react';
import { ThemeProvider as JssThemeProvider } from 'react-jss';

class ThemeProvider extends React.PureComponent<any, any> {

  render() {
    return (
      <JssThemeProvider theme={{}} >
        {this.props.children}
      </JssThemeProvider>
    );
  }
}

export default ThemeProvider;
