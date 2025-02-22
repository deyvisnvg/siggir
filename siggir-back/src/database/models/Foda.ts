import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, BelongsToMany } from 'sequelize-typescript';
import { Riesgo } from './Riesgo';
import { RiesgoFoda } from './RiesgoFoda';

@Table({
    tableName: 'foda',
    timestamps: false,
})
export class Foda extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'foda_id',
        type: DataType.INTEGER
    })
    fodaId!: number;

    @Column({
        field: 'foda_codigo',
        type: DataType.STRING
    })
    fodaCodigo!: string;

    @Column({
        field: 'foda_tipo',
        type: DataType.STRING
    })
    fodaTipo!: string;

    @Column({
        field: 'foda_descripcion',
        type: DataType.STRING
    })
    fodaDescripcion!: string;

    @BelongsToMany(() => Riesgo, () => RiesgoFoda, 'riesgoFoda')
    riesgos!: Riesgo[];
}
