import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import Funcionario from '../src/models/Funcionario';
import Permissao from '../src/models/Permissao';

const SECRET_KEY = `${process.env.SECRET_KEY}`;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const funcionario = await Funcionario.findByPk(jwt_payload.id, { include: [Permissao] });
      if (funcionario) {
        return done(null, funcionario);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

export default passport;
