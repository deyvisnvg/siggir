import { Table, Column, Model, PrimaryKey, DataType, AutoIncrement, BelongsToMany } from 'sequelize-typescript';
import { Perfil, PerfilMenu } from './index';

@Table({
    tableName: 'menu',
    timestamps: false,
})
export class Menu extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'menu_id',
        type: DataType.INTEGER
    })
    menuId!: number;

    @Column({
        field: 'menu_nombre',
        type: DataType.STRING
    })
    menuNombre!: string;

    @Column({
        field: 'menu_url',
        type: DataType.STRING
    })
    menuUrl!: string;

    @Column({
        field: 'menu_estado',
        type: DataType.STRING
    })
    menuEstado!: string;

    @Column({
        field: 'menu_fechaCreacion',
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    menuFechaCreacion!: Date;

    @BelongsToMany(() => Perfil, () => PerfilMenu)
    perfils!: Perfil[];
}