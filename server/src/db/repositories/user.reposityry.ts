import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    getByEmail(email: string): Promise<User | undefined> {
        return this.findOne({ where: {email} })
    }
}