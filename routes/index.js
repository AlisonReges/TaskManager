module.exports = (app) => {
    app.get("/", (req, res) => {
        return res.json({ status: "NTask API" });
      });
};
