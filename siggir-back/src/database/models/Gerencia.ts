import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany } from 'sequelize-typescript';
import { Area } from './Area';

@Table({
    tableName: 'gerencia',
    timestamps: false,
})
export class Gerencia extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'gerencia_id',
        type: DataType.INTEGER
    })
    gerenciaId!: number;

    @Column({
        field: 'gerencia_nombre',
        type: DataType.STRING
    })
    gerenciaNombre!: string;

    @HasMany(() => Area)
    areas!: Area[];
}
