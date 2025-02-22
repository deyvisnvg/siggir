import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, BelongsToMany } from 'sequelize-typescript';
import { RiesgoGrupoInteres } from './RiesgoGrupoInteres';
import { Riesgo } from './Riesgo';

@Table({
    tableName: 'grupoInteres',
    timestamps: false,
})
export class GrupoInteres extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'grupoInteres_id',
        type: DataType.INTEGER
    })
    grupoInteresId!: number;

    @Column({
        field: 'grupoInteres_nombre',
        type: DataType.STRING
    })
    grupoInteresNombre!: string;

    @BelongsToMany(() => Riesgo, () => RiesgoGrupoInteres, 'riesgoGrupoInteres')
    riesgos!: Riesgo[];
}
