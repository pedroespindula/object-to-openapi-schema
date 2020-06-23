const toOpenApi = require('json-schema-to-openapi-schema');
const toJsonSchema = require('to-json-schema');

const obj = {
  name: 'pedro'
};

const schema = toJsonSchema(obj);
const convertedSchema = toOpenApi(schema);

console.log(convertedSchema)
