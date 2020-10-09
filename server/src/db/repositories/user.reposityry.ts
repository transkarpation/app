import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    getByEmail(email: string): Promise<User | undefined> {
        return this.findOne({ where: {email} })
    }

    async getById(id: string) {
       const user = await this.findOne({where: { id }})
       return user;
    }
}