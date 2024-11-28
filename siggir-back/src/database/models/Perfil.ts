import { Table, Column, Model, PrimaryKey, DataType, AutoIncrement, BelongsToMany } from 'sequelize-typescript';
import { Menu, PerfilMenu, User, UsuarioPerfil } from './index';

@Table({
    tableName: 'perfil',
    timestamps: false,
})
export class Perfil extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'perfil_id',
        type: DataType.INTEGER
    })
    perfilId!: number;

    @Column({
        field: 'perfil_nombre',
        type: DataType.STRING
    })
    perfilNombre!: string;

    @Column({
        field: 'perfil_estado',
        type: DataType.STRING
    })
    perfilEstado!: string;

    @Column({
        field: 'perfil_fechaCreacion',
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    perfilFechaCreacion!: Date;

    @BelongsToMany(() => User, () => UsuarioPerfil)
    users!: User[];

    @BelongsToMany(() => Menu, () => PerfilMenu)
    menus!: Menu[];
}