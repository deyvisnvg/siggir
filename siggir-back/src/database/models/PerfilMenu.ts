import { Table, Column, Model, PrimaryKey, DataType, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Menu, Perfil } from './index';

@Table({
    tableName: 'perfil_menu',
    timestamps: false,
    indexes: [
        {
            unique: false,
            fields: ['menu_id']
        },
        {
            unique: false,
            fields: ['perfil_id']
        }
    ]
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
        type: DataType.STRING
    })
    perfilMenuEstado!: string;

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
    menuId!: string;

    @ForeignKey(() => Perfil)
    @Column({
        field: 'perfil_id',
        type: DataType.INTEGER
    })
    perfilId!: number;

    @BelongsTo(() => Menu)
    menu!: Menu;

    @BelongsTo(() => Perfil)
    perfil!: Perfil;
}