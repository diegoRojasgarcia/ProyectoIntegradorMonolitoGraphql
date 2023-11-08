import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from 'src/user/services/user.service';
import { LoginUserInput } from '../dto/login-user.input';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterUserInput } from '../dto/register-user.input';
import { CarritoService } from 'src/carrito/services/carrito.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private readonly carritoService: CarritoService,
  ) {}

  async register(registerUserInput: RegisterUserInput) {
    try {
      const { password, ...userData } = registerUserInput;

      const usuario = await this.userService.createUser({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });
      delete usuario.password;
      return {
        user: usuario,
        access_token: this.getJwtToken({ id: usuario.id }),
      };
      console.log(usuario.id);
      const carrito = await this.carritoService.createCarrito({
        idUser: usuario.id,
      });
    } catch (error) {
      throw error;
    }
  }

  async login(loginUserInput: LoginUserInput) {
    try {
      const { email, password } = loginUserInput;
      const user = await this.userService.findByEmail(email);

      if (!user)
        throw new UnauthorizedException('Credentials are not valid (email)');

      if (!bcrypt.compareSync(password, user.password))
        throw new UnauthorizedException('Credentials are not valid (password)');

      delete user.password;

      return {
        access_token: await this.getJwtToken({ id: user.id }),
        user: user,
      };
    } catch (error) {
      throw error;
    }
  }

  private getJwtToken(payload: { id: number }) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
