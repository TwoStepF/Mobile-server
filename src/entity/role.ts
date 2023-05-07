import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"
import { UserRole } from "./enum/userRole"
import { User } from "./user"

@Entity()
export class Role {
    @PrimaryColumn()
    id: number

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.EMPLOYEE
    })
    role: UserRole

    @OneToMany(() => User, (user) => user.role)
    user: User[]
}