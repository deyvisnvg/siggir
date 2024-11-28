import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Macroproceso, Subproceso } from './index';

@Table({
    tableName: 'proceso',
    timestamps: false,
})
export class Proceso extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'proceso_id',
        type: DataType.INTEGER
    })
    procesoId!: number;

    @Column({
        field: 'proceso_codigo',
        type: DataType.STRING
    })
    procesoCodigo!: string;

    @Column({
        field: 'proceso_nombre',
        type: DataType.STRING
    })
    procesoNombre!: string;

    @ForeignKey(() => Macroproceso)
    @Column({
        field: 'macroproceso_id',
        type: DataType.INTEGER
    })
    macroprocesoId!: number;

    @BelongsTo(() => Macroproceso)
    macroproceso!: Macroproceso;

    @HasMany(() => Subproceso)
    subprocesos!: Subproceso[];
}
