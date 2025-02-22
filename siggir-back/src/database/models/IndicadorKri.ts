import { v4 as uuidv4 } from 'uuid';
import { Table, Column, Model, PrimaryKey, DataType, ForeignKey, BelongsTo, BeforeCreate } from 'sequelize-typescript';
import { Catalogo, Cargo, Riesgo } from '.';

@Table({
    tableName: 'indicadorkri',
    timestamps: false,
})
export class IndicadorKri extends Model {
    @PrimaryKey
    @Column({
        field: 'indicadorKri_id',
        type: DataType.UUID
    })
    indicadorkriId!: string;

    @Column({
        field: 'indicadorKri_codigo',
        type: DataType.STRING
    })
    indicadorkriCodigo!: string;

    @Column({
        field: 'indicadorKri_descripcion',
        type: DataType.STRING
    })
    indicadorkriDescripcion!: string;

    @Column({
        field: 'indicadorKri_meta',
        type: DataType.STRING
    })
    indicadorkriMeta!: string;

    @Column({
        field: 'indicadorKri_actual',
        type: DataType.STRING
    })
    indicadorkriActual!: string;

    @Column({
        field: 'indicadorKri_fechaCreacion',
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    indicadorKriFechaCreacion!: Date;

    @ForeignKey(() => Catalogo)
    @Column({
        field: 'frecuenciaControl_id',
        type: DataType.INTEGER
    })
    frecuenciaControlId!: number;

    @ForeignKey(() => Cargo)
    @Column({
        field: 'cargo_id',
        type: DataType.INTEGER
    })
    cargoId!: number;

    @ForeignKey(() => Riesgo)
    @Column({
        field: 'riesgo_id',
        type: DataType.UUID
    })
    riesgoId!: string;


    @BelongsTo(() => Catalogo)
    frecuenciaControl!: Catalogo;

    @BelongsTo(() => Cargo)
    cargo!: Cargo;

    @BelongsTo(() => Riesgo)
    riesgo!: Riesgo;


    @BeforeCreate
    static generateUuid(instance: IndicadorKri) {
        instance.indicadorkriId = uuidv4();
    }
}
