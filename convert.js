const toOpenApi = require('json-schema-to-openapi-schema');
const toJsonSchema = require('to-json-schema');
const fetch = require('node-fetch');

function convertToOpenApi(obj) {
  const schema = toJsonSchema(obj);
  const convertedSchema = toOpenApi(schema);

  return convertedSchema;
}

function fetchRoute(routeName) {
  const BASE_URL = 'http://localhost:8000/api';

  return fetch(`${BASE_URL}/${routeName}`, {
    headers: {
      'Authorization': 'abc'
    }
  });
}

const routeName = process.argv[2];

fetchRoute(routeName)
  .then(r => r.json())
  .then(obj => console.log(convertToOpenApi(obj)));
