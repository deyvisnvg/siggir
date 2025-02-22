import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Periodo } from './Periodo';
import { GestionRiesgo } from './GestionRiesgo';
import { Catalogo } from './Catalogo';
import { Subproceso } from './Subproceso';
import { Riesgo } from './Riesgo';

@Table({
    tableName: 'proceso_impactado',
    timestamps: false,
    indexes: [
        {
            unique: false,
            fields: ['subproceso_id']
        },
        {
            unique: false,
            fields: ['riesgo_id']
        }
    ]
})
export class ProcesoImpactado extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'procesoImpactado_id',
        type: DataType.INTEGER
    })
    procesoImpactadoId!: number;

    @ForeignKey(() => Subproceso)
    @Column({
        field: 'subproceso_id',
        type: DataType.INTEGER
    })
    subprocesoId!: number;

    @ForeignKey(() => Riesgo)
    @Column({
        field: 'riesgo_id',
        type: DataType.UUID
    })
    riesgoId!: string;

    @BelongsTo(() => Subproceso)
    subproceso!: Subproceso;

    @BelongsTo(() => Riesgo)
    riesgo!: Riesgo;
}
