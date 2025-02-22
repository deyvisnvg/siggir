import { v4 as uuidv4 } from 'uuid';
import { Table, Column, Model, PrimaryKey, DataType, ForeignKey, BelongsTo, BeforeCreate, HasMany } from 'sequelize-typescript';
import { Catalogo, Cargo, Riesgo } from '.';
import { Sustento } from './Sustento';

@Table({
    tableName: 'control',
    timestamps: false,
})
export class Control extends Model {
    @PrimaryKey
    @Column({
        field: 'control_id',
        type: DataType.UUID
    })
    controlId!: string;

    @Column({
        field: 'control_codigo',
        type: DataType.STRING
    })
    controlCodigo!: string;

    @Column({
        field: 'control_descripcion',
        type: DataType.STRING
    })
    controlDescripcion!: string;

    @Column({
        field: 'control_nombreEvidencia',
        type: DataType.STRING
    })
    controlNombreEvidencia!: string;

    @Column({
        field: 'control_probabilidad',
        type: DataType.STRING
    })
    controlProbabilidad!: string;

    @Column({
        field: 'control_impacto',
        type: DataType.STRING
    })
    controlImpacto!: string;

    @Column({
        field: 'control_severidad',
        type: DataType.STRING
    })
    controlSeveridad!: string;

    @Column({
        field: 'control_fechaCreacion',
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    controlFechaCreacion!: Date;

    @ForeignKey(() => Catalogo)
    @Column({
        field: 'frecuenciaControl_id',
        type: DataType.INTEGER
    })
    frecuenciaControlId!: number;

    @ForeignKey(() => Catalogo)
    @Column({
        field: 'oportunidadControl_id',
        type: DataType.INTEGER
    })
    oportunidadControlId!: number;

    @ForeignKey(() => Catalogo)
    @Column({
        field: 'automatizacionControl_id',
        type: DataType.INTEGER
    })
    automatizacionControlId!: number;

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

    @BelongsTo(() => Catalogo)
    oportunidadControl!: Catalogo;

    @BelongsTo(() => Catalogo)
    automatizacionControl!: Catalogo;

    @BelongsTo(() => Cargo)
    cargo!: Cargo;

    @BelongsTo(() => Riesgo)
    riesgo!: Riesgo;

    @HasMany(() => Sustento)
    sustentos!: Sustento[];


    @BeforeCreate
    static generateUuid(instance: Control) {
        instance.controlId = uuidv4();
    }
}
