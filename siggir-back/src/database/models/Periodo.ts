import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { GestionRiesgo } from './GestionRiesgo';
import { Subperiodo } from './Subperiodo';

@Table({
    tableName: 'periodo',
    timestamps: false,
})
export class Periodo extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'periodo_id',
        type: DataType.INTEGER
    })
    periodoId!: number;

    @Column({
        field: 'periodo_anio',
        type: DataType.STRING
    })
    periodoAnio!: string;

    @Column({
        field: 'periodo_estado',
        type: DataType.STRING
    })
    periodoEstado!: string;

    @BelongsToMany(() => GestionRiesgo, () => Subperiodo)
    gestionriesgos!: GestionRiesgo[];
    /* gestionriesgos!: Array<GestionRiesgo & {Subperiodo: Subperiodo}>; */
}
