import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { UsersService } from "./users.service";
import { user } from "src/interfaces/user";
import { User } from "src/database/schemas/user.schema";
import { RequestWithUser } from "src/interfaces/requestWithUser";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getAll() {
    return this.usersService.findAll();
  }

  @Post("register")
  async register(@Body() registerDto: user): Promise<User> {
    const newUser = await this.usersService.register(registerDto);
    newUser.password = undefined;
    return newUser;
  }

  @Post("login")
  async login(
    @Body() loginDto: { email: string; password: string }
  ): Promise<{ token: string }> {
    return this.usersService.login(loginDto);
  }
  @Post("logout")
  async logout(@Req() req: RequestWithUser) {
    return this.usersService.logout(req);
  }
}
