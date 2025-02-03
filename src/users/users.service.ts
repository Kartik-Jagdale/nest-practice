import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            "id" : 1,
            "name" : "kartik",
            "email" : "kartik@123",
            "role" : "ENGINEER"
        },
        {
            "id" : 2,
            "name" : "Dhiraj",
            "email" : "dhiraj@123",
            "role" : "INTERNS"
        },
        {
            "id" : 3,
            "name" : "Sanket",
            "email" : "sanket@123",
            "role" : "ADMIN"
        },
        {
            "id" : 4,
            "name" : "Saurbh",
            "email" : "saurbh@123",
            "role" : "ENGINEER"
        },
    ]

    findAll(role?: 'INTERNS' | 'ENGINEER' | 'ADMIN'){
        if(role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id: number) {
        const user1 = this.users.find(user => user.id === id)

        return user1;
    }

    create(createUserDto: CreateUserDto){
        const userByHighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id : userByHighestId[0].id + 1,
            ...createUserDto
        }

        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updateUserDto:UpdateUserDto){
        this.users = this.users.map((user) => {
            if(user.id === id){
                return {...user, ...updateUserDto}
            }
            return user
        }
        )
        return this.findOne(id)
    }

    delete(id: number){
        const removedUser = this.findOne(id);

        this.users = this.users.filter(user => user.id !== id)

        return removedUser;
    }
}
