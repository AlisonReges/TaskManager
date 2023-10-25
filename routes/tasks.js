module.exports = (app) => {
  const Tasks = app.db.models.Tasks;
  app.get("/tasks", (req, res) => {
    Tasks.findAll({}).then((tasks) => {
      return res.json({ tasks: tasks });
    });
  });
};
