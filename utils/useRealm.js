const Realm = require('realm');
const Task = require('../models/Task');
const People = require('../models/People');

/**
 * In below config we some more frequently used key values as below
 * schemaVersion: 0 (default value is 0)
 * we have migration function also (oldRealm, newRealm) => {}
 */
const config = {schema: [Task, People], path: "db/localOnly.realm"}

module.exports = Realm.open(config)