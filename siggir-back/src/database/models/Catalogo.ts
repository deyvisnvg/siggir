import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany } from 'sequelize-typescript';
import { Subperiodo } from './Subperiodo';
import { Riesgo } from './Riesgo';

@Table({
    tableName: 'catalogo',
    timestamps: false,
})
export class Catalogo extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        field: 'catalogo_id',
        type: DataType.INTEGER
    })
    catalogoId!: number;

    @Column({
        field: 'catalogo_codigo',
        type: DataType.STRING
    })
    codigo!: string;

    @Column({
        field: 'catalogo_descripcion',
        type: DataType.STRING
    })
    descripcion!: string;

    @Column({
        field: 'catalogo_descripcionCorta',
        type: DataType.STRING
    })
    descripcionCorta!: string;

    @HasMany(() => Subperiodo)
    subperiodos!: Subperiodo[];

    @HasMany(() => Riesgo, 'nivelId')
    nivelRiesgos!: Riesgo[];

    @HasMany(() => Riesgo, 'origenId')
    origenRiesgos!: Riesgo[];

    @HasMany(() => Riesgo, 'frecuenciaRiesgoId')
    frecuenciaRiesgos!: Riesgo[];

    @HasMany(() => Riesgo, 'tipoRiesgoId')
    tipoRiesgos!: Riesgo[];
}
