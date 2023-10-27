const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");

module.exports = (app) => {
  const Users = app.db.models.Users;
  const configs = app.libs.configs;

  const jwtOptions = {
    secretOrKey: configs.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Exemplo de extração do token do cabeçalho de autenticação Bearer
  };

  const strategy = new Strategy(jwtOptions, (payload, done) => {
    Users.findByPk(payload.id)
      .then((user) => {
        if (user) {
          return done(null, {
            id: user.id,
            email: user.email,
          });
        }
        return done(null, false);
      })
      .catch((error) => {
        done(error, null);
      });
  });

  passport.use(strategy);

  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate("jwt", configs.jwtSession);
    },
  };
};
