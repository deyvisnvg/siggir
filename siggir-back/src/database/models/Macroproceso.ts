import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, HasMany, BelongsTo } from 'sequelize-typescript';
import { Empleado, Proceso } from './index';

@Table({
    tableName: 'macroproceso',
    timestamps: false,
})
export class Macroproceso extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'macroproceso_id',
        type: DataType.INTEGER
    })
    macroprocesoId!: number;

    @Column({
        field: 'macroproceso_codigo',
        type: DataType.STRING
    })
    macroproCodigo!: string;

    @Column({
        field: 'macroproceso_nombre',
        type: DataType.STRING
    })
    macroproNombre!: string;

    @HasMany(() => Proceso)
    procesos!: Proceso[];
}
