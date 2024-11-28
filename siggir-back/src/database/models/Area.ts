import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, HasMany, BelongsTo } from 'sequelize-typescript';
import { Gerencia, Cargo } from './index';

@Table({
    tableName: 'area',
    timestamps: false,
})
export class Area extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'area_id',
        type: DataType.INTEGER
    })
    areaId!: number;

    @Column({
        field: 'area_nombre',
        type: DataType.STRING
    })
    areaNombre!: string;

    @ForeignKey(() => Gerencia)
    @Column({
        field: 'gerencia_id',
        type: DataType.INTEGER
    })
    gerenciaId!: number;

    @BelongsTo(() => Gerencia)
    gerencia!: Gerencia;

    @HasMany(() => Cargo)
    cargos!: Cargo[];
}
