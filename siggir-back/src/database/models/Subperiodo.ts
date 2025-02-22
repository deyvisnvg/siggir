import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Periodo } from './Periodo';
import { GestionRiesgo } from './GestionRiesgo';
import { Catalogo } from './Catalogo';
import { Riesgo } from './Riesgo';

@Table({
    tableName: 'subperiodo',
    timestamps: false,
    indexes: [
        {
            unique: false,
            fields: ['periodo_id']
        },
        {
            unique: false,
            fields: ['gestionRiesgo_id']
        }
    ]
})
export class Subperiodo extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'subperiodo_id',
        type: DataType.INTEGER
    })
    subperiodoId!: number;

    @Column({
        field: 'subperiodo_detalle',
        type: DataType.STRING
    })
    subperiodoDetalle!: string;

    @Column({
        field: 'subperiodo_fechaInicio',
        type: DataType.DATE
    })
    subperiodoFecInicio!: Date;

    @Column({
        field: 'subperiodo_fechaFin',
        type: DataType.DATE
    })
    subperiodoFecFin!: Date;

    @Column({
        field: 'subperiodo_estado',
        type: DataType.STRING
    })
    subperiodoEstado!: string;

    @ForeignKey(() => Catalogo)
    @Column({
        field: 'frecuencia_id',
        type: DataType.INTEGER
    })
    frecuenciaId!: number;

    @ForeignKey(() => GestionRiesgo)
    @Column({
        field: 'gestionRiesgo_id',
        type: DataType.INTEGER
    })
    gestionId!: number;

    @ForeignKey(() => Periodo)
    @Column({
        field: 'periodo_id',
        type: DataType.INTEGER
    })
    periodoId!: number;

    @BelongsTo(() => Catalogo)
    frecuencia!: Catalogo;

    @BelongsTo(() => Periodo)
    periodo!: Periodo;

    @BelongsTo(() => GestionRiesgo)
    gestionRiesgo!: GestionRiesgo;

    @HasMany(() => Riesgo)
    riesgos!: Riesgo[];
}
