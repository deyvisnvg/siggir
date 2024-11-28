import { Table, Column, Model, PrimaryKey, DataType, BelongsToMany, HasOne } from 'sequelize-typescript';
import { Perfil, Persona, UsuarioPerfil } from './index';

@Table({
    tableName: 'usuario',
    timestamps: false,
})
export class User extends Model {
    @PrimaryKey
    @Column({
        field: 'usuario_id',
        type: DataType.UUID
    })
    userId!: string;

    @Column({
        field: 'usuario_user',
        type: DataType.STRING
    })
    user!: string;

    @Column({
        field: 'usuario_password',
        type: DataType.STRING
    })
    password!: string;

    @Column({
        field: 'usuario_estado',
        type: DataType.STRING
    })
    estado!: string;

    @Column({
        field: 'usuario_fechaCreacion',
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    fechaCreacion!: Date;

    @HasOne(() => Persona)
    persona!: Persona;

    @BelongsToMany(() => Perfil, () => UsuarioPerfil)
    perfils!: Perfil[];
}