
exports.seed = function (knex, Promise) {
  return knex('friends').truncate()
    .then(function () {
      return knex('friends').insert([
        { name: 'Steve' },
        { name: 'Bob' },
        { name: 'Joe' },
        { name: 'Fred' },
        { name: 'John' },
      ]);
    });
};
