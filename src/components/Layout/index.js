import React from 'react';
import Head from 'next/head';

import '../../assets/snippets.less';


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading',
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    return (
      <div className={`body centering ${this.state.loading}`}>
        <Head>
          <title>Next.js Starter</title>
          <meta name="description" content="Next.js Starter" />
          <link href={`${process.env.ASSET_PREFIX}/static/css/grid.min.css`} rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
        </Head>
        {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}
        <div id="wrapper" className="system-font-stack quadratic">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
