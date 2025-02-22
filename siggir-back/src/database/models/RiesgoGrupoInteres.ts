import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { GrupoInteres } from './GrupoInteres';
import { Riesgo } from './Riesgo';

@Table({
    tableName: 'riesgo_grupoInteres',
    timestamps: false,
    indexes: [
        {
            unique: false,
            fields: ['grupoInteres_id']
        },
        {
            unique: false,
            fields: ['riesgo_id']
        }
    ]
})
export class RiesgoGrupoInteres extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'riesgoGrupoInteres_id',
        type: DataType.INTEGER
    })
    riesgoGrupoInteresId!: number;

    @ForeignKey(() => GrupoInteres)
    @Column({
        field: 'grupoInteres_id',
        type: DataType.INTEGER
    })
    grupoInteresId!: number;

    @ForeignKey(() => Riesgo)
    @Column({
        field: 'riesgo_id',
        type: DataType.UUID
    })
    riesgoId!: string;

    @BelongsTo(() => GrupoInteres)
    grupoInteres!: GrupoInteres;

    @BelongsTo(() => Riesgo)
    riesgo!: Riesgo;
}
