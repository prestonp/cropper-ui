import * as request from 'superagent';

exports.crop = function(baseUrl, videoId, start, duration, callback) {
  request
    .post(baseUrl)
    .send({ videoId, start, duration })
    .set('Accept', 'application/json')
    .end(callback);
}
