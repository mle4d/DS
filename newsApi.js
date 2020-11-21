var url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2020-11-21&' +
          'sortBy=popularity&' +
          'process.env.API_KEY';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })