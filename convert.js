const toOpenApi = require('json-schema-to-openapi-schema');
const toJsonSchema = require('to-json-schema');

const obj = JSON.parse(process.argv[process.argv.length - 1]);

const schema = toJsonSchema(obj);
const convertedSchema = toOpenApi(schema);

console.log(convertedSchema);
