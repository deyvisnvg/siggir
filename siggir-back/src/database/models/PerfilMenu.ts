import { Table, Column, Model, PrimaryKey, DataType, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { Menu, Perfil } from './index';

@Table({
    tableName: 'perfilMenu',
    timestamps: false,
})
export class PerfilMenu extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'perfilMenu_id',
        type: DataType.INTEGER
    })
    perfilMenuId!: number;

    @Column({
        field: 'perfilMenu_estado',
        type: DataType.INTEGER
    })
    perfilMenuEstado!: number;

    @Column({
        field: 'perfilMenu_fechaCreacion',
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    perfilMenuFechaCreacion!: Date;

    @ForeignKey(() => Menu)
    @Column({
        field: 'menu_id',
        type: DataType.INTEGER
    })
    userId!: string;

    @ForeignKey(() => Perfil)
    @Column({
        field: 'perfil_id',
        type: DataType.INTEGER
    })
    perfilId!: number;
}