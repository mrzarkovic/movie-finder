const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const SearchForm = require('./SearchForm');

const App = React.createClass({
    render: function () {
        return (
            <SearchForm />
        );
    }
});

module.exports = App;