import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Foda } from './Foda';
import { Riesgo } from './Riesgo';

@Table({
    tableName: 'riesgo_foda',
    timestamps: false,
    indexes: [
        {
            unique: false,
            fields: ['foda_id']
        },
        {
            unique: false,
            fields: ['riesgo_id']
        }
    ]
})
export class RiesgoFoda extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'riesgoFoda_id',
        type: DataType.INTEGER
    })
    riesgoFodaId!: number;

    @ForeignKey(() => Foda)
    @Column({
        field: 'foda_id',
        type: DataType.INTEGER
    })
    fodaId!: number;

    @ForeignKey(() => Riesgo)
    @Column({
        field: 'riesgo_id',
        type: DataType.UUID
    })
    riesgoId!: string;

    @BelongsTo(() => Foda)
    foda!: Foda;

    @BelongsTo(() => Riesgo)
    riesgo!: Riesgo;
}
