module.exports = {
  database: "taskmanager",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "taskmanager.sqlite",
    define: {
      underscored: true,
    },
  },
  jwtSecret: "TaskManager-API",
  jwtSession: { session: false },
};
