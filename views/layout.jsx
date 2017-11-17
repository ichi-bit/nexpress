var React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>
          <header>
            <h1>nexpress</h1>
            <nav>
              <ul>
                <li><a href="/">index</a></li>
                <li><a href="/users">users</a></li>
                <li><a href="/test">test</a></li>
              </ul>
            </nav>
          </header>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
