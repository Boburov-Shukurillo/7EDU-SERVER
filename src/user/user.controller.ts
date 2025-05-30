import { Body, Controller, Delete, Get, Param, Patch, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // @UseGuards(JwtAuthGuard)
  @Get('')
  async allUser() {
    return this.userService.allUser()
  }

  // @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  @UseInterceptors(FileInterceptor('file'))
  UpdateUser(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto, file, 'images');
  }


  // @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id)
  }

}
