var React = require('react');
var Layout = require('./layout');

class Error extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <div>
          <h1>{this.props.message}</h1>
          <h2>{this.props.error.status}</h2>
          <pre>
            {this.props.error.stack}
          </pre>
        </div>
      </Layout>
    );
  }
}

module.exports = Error;
