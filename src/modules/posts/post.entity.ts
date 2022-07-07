import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey, } from 'sequelize-typescript';

//import { User } from '../users/user.entity';

@Table({
    tableName :"users",
    schema: "public",
    timestamps: false

})
export class users extends Model<users> {
    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        allowNull: false,
    
    })
    id:number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;

 //  @ForeignKey(() => User)
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstname: String;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastname: String;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: String;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    mobile: String;
   

  //  @BelongsTo(() => User)
    //user: User;
}
