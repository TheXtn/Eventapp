import { Fragment } from 'react';

import MainHeader from './main-header';

function Layout(props) {
  return (
    <Fragment>
    <title>XtnEvents</title>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
