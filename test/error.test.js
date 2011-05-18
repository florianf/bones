process.env.NODE_ENV = 'test';
var assert = require('assert');

require('./fixture');
var fixture = require('bones').plugin;
var server = new fixture.servers['Core'](fixture);

exports['error 404'] = function(beforeExit) {
    assert.response(server, {
        url: '/does-not-exist',
        method: 'GET'
    }, {
        body: 'Not Found',
        status: 404
    });

    assert.response(server, {
        url: '/does-not-exist',
        method: 'GET',
        headers: { 'accept': 'application/json' }
    }, {
        body: '{"message":"Not Found"}',
        status: 404
    });

    assert.response(server, {
        url: '/does-not-exist',
        method: 'POST',
        headers: { 'accept': 'application/json' }
    }, {
        body: '{"message":"Forbidden"}',
        status: 403
    });

    assert.response(server, {
        url: '/does-not-exist',
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'cookie': 'bones.token=cfd72122969dfaefddd180725fadf53f;'
        },
        body: JSON.stringify({ 'bones.token': 'cfd72122969dfaefddd180725fadf53f' })
    }, {
        body: 'Not Found',
        status: 404
    });

    assert.response(server, {
        url: '/does-not-exist',
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'cookie': 'bones.token=cfd72122969dfaefddd180725fadf53f;'
        },
        body: JSON.stringify({ 'bones.token': 'cfd72122969dfaefddd180725fadf53f' })
    }, {
        body: '{"message":"Not Found"}',
        status: 404
    });

    assert.response(server, {
        url: '/api/DoesNotExit/asdf',
        method: 'GET'
    }, {
        body: 'Not Found',
        status: 404
    });

    assert.response(server, {
        url: '/api/DoesNotExit/asdf',
        method: 'GET',
        headers: { 'accept': 'application/json' }
    }, {
        body: '{"message":"Not Found"}',
        status: 404
    });

    assert.response(server, {
        url: '/api/Page/asdf',
        method: 'GET'
    }, {
        body: 'Not Found',
        status: 404
    });

    assert.response(server, {
        url: '/api/Page/asdf',
        method: 'GET',
        headers: { 'accept': 'application/json' }
    }, {
        body: '{"message":"Not Found"}',
        status: 404
    });

    assert.response(server, {
        url: '/api/Page/asdf',
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'cookie': 'bones.token=cfd72122969dfaefddd180725fadf53f;'
        },
        body: JSON.stringify({ 'bones.token': 'cfd72122969dfaefddd180725fadf53f' })
    }, {
        body: 'Conflict',
        status: 409
    });

    assert.response(server, {
        url: '/api/Page/asdf',
        method: 'PUT',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'cookie': 'bones.token=cfd72122969dfaefddd180725fadf53f;'
        },
        body: JSON.stringify({ 'bones.token': 'cfd72122969dfaefddd180725fadf53f' })
    }, {
        body: '{"message":"Conflict"}',
        status: 409
    });

    assert.response(server, {
        url: '/api/Page/asdf',
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'cookie': 'bones.token=cfd72122969dfaefddd180725fadf53f;'
        },
        body: JSON.stringify({ 'bones.token': 'cfd72122969dfaefddd180725fadf53f' })
    }, {
        body: 'Conflict',
        status: 409
    });

    assert.response(server, {
        url: '/api/Page/asdf',
        method: 'DELETE',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'cookie': 'bones.token=cfd72122969dfaefddd180725fadf53f;'
        },
        body: JSON.stringify({ 'bones.token': 'cfd72122969dfaefddd180725fadf53f' })
    }, {
        body: '{"message":"Conflict"}',
        status: 409
    });
};
