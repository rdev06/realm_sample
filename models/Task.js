const Realm = require('realm');
module.exports = {
  name: 'Task',
  properties: {
    _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId() },
    name: 'string',
    priority: {type: "int?", indexed: true},
    completed: 'bool',
  },
  primaryKey: '_id',
  }