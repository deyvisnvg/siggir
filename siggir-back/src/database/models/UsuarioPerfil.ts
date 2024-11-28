import { Table, Column, Model, PrimaryKey, DataType, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { Perfil, User } from './index';

@Table({
    tableName: 'usuarioPerfil',
    timestamps: false,
})
export class UsuarioPerfil extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'usuarioPerfil_id',
        type: DataType.INTEGER
    })
    userPerfilId!: number;

    @Column({
        field: 'usuarioPerfil_estado',
        type: DataType.INTEGER
    })
    userPerfilEstado!: number;

    @Column({
        field: 'usuarioPerfil_fechaCreacion',
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    userPerfilFechaCreacion!: Date;

    @ForeignKey(() => User)
    @Column({
        field: 'usuario_id',
        type: DataType.UUID
    })
    userId!: string;

    @ForeignKey(() => Perfil)
    @Column({
        field: 'perfil_id',
        type: DataType.INTEGER
    })
    perfilId!: number;
}