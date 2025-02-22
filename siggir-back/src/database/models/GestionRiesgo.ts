import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo, HasMany, BelongsToMany } from 'sequelize-typescript';
import { Empleado, Periodo } from './index';
import { Subperiodo } from './Subperiodo';

@Table({
    tableName: 'gestionriesgo',
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

    @HasMany(() => Subperiodo)
    subperiodos!: Subperiodo[];

    @BelongsToMany(() => Periodo, () => Subperiodo)
    periodos!: Periodo[];
    /* periodos!: Array<Periodo & {Subperiodo: Subperiodo}>; */
}
