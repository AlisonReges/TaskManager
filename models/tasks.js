module.exports = (app) => {
  return {
    findAll: (params, callback) => {
      return callback([
        { title: "Fazer compras" },
        { title: "Conserta o pc" },
        { title: "Nova tarefa" },
      ]);
    },
  };
};
