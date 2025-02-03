import { Body, Controller, Get, Post, Patch, Delete, Query, Param , ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')   //users
export class UsersController {

    constructor(private readonly UserService: UsersService) { }

    @Get()
    findAll(@Query('role') role?: 'INTERNS' | 'ENGINEER' | 'ADMIN') {
        return this.UserService.findAll(role);
    }

    @Get(':id')
    findOne(@Param(':id', ParseIntPipe) id: number) {
        return this.UserService.findOne(id)
    }

    @Post()
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.UserService.create(createUserDto);
    }

    @Patch(':id')
    update(@Param(':id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.UserService.update(id, updateUserDto)
    }

    @Delete(':id')
    delete(@Param(':id', ParseIntPipe) id: number) {
        return this.UserService.delete(id)
    }

}
