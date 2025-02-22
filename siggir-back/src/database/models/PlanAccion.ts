import { v4 as uuidv4 } from 'uuid';
import { Table, Column, Model, PrimaryKey, DataType, ForeignKey, BelongsTo, BeforeCreate, HasMany } from 'sequelize-typescript';
import { Catalogo, Cargo, Riesgo } from '.';
import { Sustento } from './Sustento';

@Table({
    tableName: 'planaccion',
    timestamps: false,
})
export class PlanAccion extends Model {
    @PrimaryKey
    @Column({
        field: 'planAccion_id',
        type: DataType.UUID
    })
    planaccionId!: string;

    @Column({
        field: 'planAccion_codigo',
        type: DataType.STRING
    })
    planaccionCodigo!: string;

    @Column({
        field: 'planAccion_descripcion',
        type: DataType.STRING
    })
    planaccionDescripcion!: string;

    @Column({
        field: 'planAccion_fechaInicio',
        type: DataType.DATE
    })
    planaccionFechaInicio!: Date;

    @Column({
        field: 'planAccion_fechaFin',
        type: DataType.DATE
    })
    planaccionFechaFin!: Date;

    @Column({
        field: 'planAccion_nombreEvidencia',
        type: DataType.STRING
    })
    planaccionNombreEvidencia!: string;

    @Column({
        field: 'planAccion_fechaCreacion',
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    planaccionFechaCreacion!: Date;

    @ForeignKey(() => Catalogo)
    @Column({
        field: 'estrategiaRespuesta_id',
        type: DataType.INTEGER
    })
    estrategiaRespuestaId!: number;

    @ForeignKey(() => Catalogo)
    @Column({
        field: 'estadoPlan_id',
        type: DataType.INTEGER
    })
    estadoPlanId!: number;

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
    estrategiaRespuesta!: Catalogo;

    @BelongsTo(() => Catalogo)
    estadoPlan!: Catalogo;

    @BelongsTo(() => Cargo)
    cargo!: Cargo;

    @BelongsTo(() => Riesgo)
    riesgo!: Riesgo;

    @HasMany(() => Sustento)
    sustentos!: Sustento[];


    @BeforeCreate
    static generateUuid(instance: PlanAccion) {
        instance.planaccionId = uuidv4();
    }
}
