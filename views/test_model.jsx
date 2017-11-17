var React = require('react');
var Layout = require('./layout');

class TestModel extends React.Component {

    render() {
        var records = [];
        for (let row of this.props.data) {
            records.push(<li key={row._id}>{row.toString()}</li>);
        }
        return (
            <Layout title={this.props.title}>
                <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {records}
                </ul>
                </div>
            </Layout>
        );
    }
}

module.exports = TestModel;
