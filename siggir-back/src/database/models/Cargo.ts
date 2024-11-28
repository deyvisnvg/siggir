import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, HasMany, BelongsTo, HasOne } from 'sequelize-typescript';
import { Area, Empleado, Subproceso } from './index';

@Table({
    tableName: 'cargo',
    timestamps: false,
})
export class Cargo extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'cargo_id',
        type: DataType.INTEGER
    })
    cargoId!: number;

    @Column({
        field: 'cargo_nombre',
        type: DataType.STRING
    })
    cargoNombre!: string;

    @ForeignKey(() => Area)
    @Column({
        field: 'area_id',
        type: DataType.INTEGER
    })
    areaId!: number;

    @HasOne(() => Empleado)
    empleado!: Empleado;

    @BelongsTo(() => Area)
    area!: Area;

    @HasMany(() => Subproceso)
    subprocesos!: Subproceso[];
}
