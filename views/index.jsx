var React = require('react');
var Layout = require('./layout');

class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <div>
          <h2>{this.props.title}</h2>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
