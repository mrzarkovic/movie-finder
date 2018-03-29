const AppActions = require('../actions/AppActions');
const keys = require('../../../api_key.json');

module.exports = {
    searchMovies: function (movie) {
        $.ajax({
            url: 'http://www.omdbapi.com/?apikey=' + keys.OMDB_API_KEY + '&s=' + movie.title,
            dataType: 'json',
            cache: false,
            success: function (data) {
                AppActions.receiveMovieResults(data.Search);
            }.bind(this),
            error: function (xhr, status, error) {
                alert(error);
            }.bind(this)
        });
    }
};