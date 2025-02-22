import { Table, Column, Model, PrimaryKey, DataType, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Perfil, User } from './index';

@Table({
    tableName: 'usuario_perfil',
    timestamps: false,
    indexes: [
        {
            unique: false,
            fields: ['usuario_id']
        },
        {
            unique: false,
            fields: ['perfil_id']
        }
    ]
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
        type: DataType.STRING
    })
    userPerfilEstado!: string;

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

    @BelongsTo(() => User)
    user!: User;

    @BelongsTo(() => Perfil)
    perfil!: Perfil;
}