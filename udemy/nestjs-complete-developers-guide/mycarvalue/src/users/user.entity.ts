import { Report } from 'src/reports/report.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  // @Exclude()
  password: string;

  @Column({
    default: true,
  })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log(`Inserted user: `, this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`updated user: `, this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log(`removed user: `, this.id);
  }
}
