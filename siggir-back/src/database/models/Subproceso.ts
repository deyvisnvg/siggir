import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Proceso, Cargo, Riesgo } from './index';
import { ProcesoImpactado } from './ProcesoImpactado';

@Table({
    tableName: 'subproceso',
    timestamps: false,
})
export class Subproceso extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'subproceso_id',
        type: DataType.INTEGER
    })
    subprocesoId!: number;

    @Column({
        field: 'subproceso_codigo',
        type: DataType.STRING
    })
    subproCodigo!: string;

    @Column({
        field: 'subproceso_nombre',
        type: DataType.STRING
    })
    subproNombre!: string;

    @ForeignKey(() => Proceso)
    @Column({
        field: 'proceso_id',
        type: DataType.INTEGER
    })
    procesoId!: number;

    @ForeignKey(() => Cargo)
    @Column({
        field: 'cargo_id',
        type: DataType.INTEGER
    })
    cargoId!: number;

    @BelongsTo(() => Proceso)
    proceso!: Proceso;

    @BelongsTo(() => Cargo)
    cargo!: Cargo;

    @HasMany(() => Riesgo, 'subprocesoId')
    subProcesoRiesgos!: Riesgo[];

    @BelongsToMany(() => Riesgo, () => ProcesoImpactado, 'procesosImpactados')
    riesgos!: Riesgo[];
}
