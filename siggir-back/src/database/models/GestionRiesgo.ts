import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Empleado } from './index';

@Table({
    tableName: 'gestionRiesgo',
    timestamps: false,
})
export class GestionRiesgo extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'gestionRiesgo_id',
        type: DataType.INTEGER
    })
    gestionId!: number;

    @Column({
        field: 'gestionRiesgo_nombre',
        type: DataType.STRING
    })
    gestionNombre!: string;

    @Column({
        field: 'gestionRiesgo_abreviatura',
        type: DataType.STRING
    })
    gestionAbreviatura!: string;

    @Column({
        field: 'gestionRiesgo_color',
        type: DataType.STRING
    })
    gestionColor!: string;

    @ForeignKey(() => Empleado)
    @Column({
        field: 'empleado_id',
        type: DataType.UUID
    })
    empleadoId!: string;

    @BelongsTo(() => Empleado)
    empleado!: Empleado;
}
