import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';

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
}
