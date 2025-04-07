import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { UserRole } from '../../auth/enums/roles.enum';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ allowNull: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ allowNull: true })
  picture: string;

  @Column
  googleId: string;

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    defaultValue: UserRole.USER,
  })
  role: UserRole;

  @Column({ defaultValue: true })
  isActive: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  refreshToken: string | null;

  @Column({ 
    type: DataType.DATE, 
    defaultValue: DataType.NOW 
  })
  createdAt: Date;
}
