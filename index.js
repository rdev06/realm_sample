const useRealm = require('./utils/useRealm');

async function init() {
  const db = await useRealm;

  try {
    db.write(async () => {
      // await db.create('Task', { name: 'Task 2', priority: 1, completed: false });
      const tasks = db
        .objects('Task')
        .filtered('_id == oid(649b66b491be1d4f6110661a)') //.select(['name', 'completed']);

      //   tasks[1].completed = true
      console.log(tasks.toJSON());
    });
  } finally {
    db.close();
  }
}

init();
