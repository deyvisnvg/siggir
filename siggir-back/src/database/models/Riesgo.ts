import { v4 as uuidv4 } from 'uuid';
import { Table, Column, Model, PrimaryKey, DataType, HasMany, ForeignKey, BelongsTo, BelongsToMany, BeforeCreate } from 'sequelize-typescript';
import {
    Catalogo,
    Subperiodo,
    Gerencia,
    Subproceso,
    GrupoInteres,
    RiesgoGrupoInteres,
    ProcesoImpactado,
    RiesgoFoda,
    Foda,
    Control,
    PlanAccion,
    IndicadorKri
} from '.';

@Table({
    tableName: 'riesgo',
    timestamps: false,
})
export class Riesgo extends Model {
    @PrimaryKey
    @Column({
        field: 'riesgo_id',
        type: DataType.UUID
    })
    riesgoId!: string;

    @Column({
        field: 'riesgo_codigo',
        type: DataType.STRING
    })
    riesgoCodigo!: string;

    @Column({
        field: 'riesgo_titulo',
        type: DataType.STRING
    })
    riesgoTitulo!: string;

    @Column({
        field: 'riesgo_descripcion',
        type: DataType.STRING
    })
    riesgoDescripcion!: string;

    @Column({
        field: 'riesgo_probabilidad',
        type: DataType.STRING
    })
    riesgoProbabilidad!: string;

    @Column({
        field: 'riesgo_impacto',
        type: DataType.STRING
    })
    riesgoImpacto!: string;

    @Column({
        field: 'riesgo_severidad',
        type: DataType.STRING
    })
    riesgoSeveridad!: string;

    @Column({
        field: 'riesgo_fechaCreacion',
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    riesgoFechaCreacion!: Date;

    @ForeignKey(() => Catalogo)
    @Column({
        field: 'nivel_id',
        type: DataType.INTEGER
    })
    nivelId!: number;

    @ForeignKey(() => Catalogo)
    @Column({
        field: 'origen_id',
        type: DataType.INTEGER
    })
    origenId!: number;

    @ForeignKey(() => Catalogo)
    @Column({
        field: 'frecuenciaRiesgo_id',
        type: DataType.INTEGER
    })
    frecuenciaRiesgoId!: number;

    @ForeignKey(() => Catalogo)
    @Column({
        field: 'tipoRiesgo_id',
        type: DataType.INTEGER
    })
    tipoRiesgoId!: number;

    @ForeignKey(() => Subperiodo)
    @Column({
        field: 'subperiodo_id',
        type: DataType.INTEGER
    })
    subperiodoId!: number;

    @ForeignKey(() => Gerencia)
    @Column({
        field: 'gerencia_id',
        type: DataType.INTEGER
    })
    gerenciaId!: number;

    @ForeignKey(() => Subproceso)
    @Column({
        field: 'subproceso_id',
        type: DataType.INTEGER
    })
    subprocesoId!: number;

    @BelongsTo(() => Catalogo, 'nivelId')
    nivel!: Catalogo;

    @BelongsTo(() => Catalogo, 'origenId')
    origen!: Catalogo;

    @BelongsTo(() => Catalogo, 'frecuenciaRiesgoId')
    frecuenciaRiesgo!: Catalogo;

    @BelongsTo(() => Catalogo, 'tipoRiesgoId')
    tipoRiesgo!: Catalogo;

    @BelongsTo(() => Subperiodo)
    subperiodo!: Subperiodo;

    @BelongsTo(() => Gerencia)
    gerencia!: Gerencia;

    @BelongsTo(() => Subproceso, 'subproceso_id')
    subproceso!: Subproceso;

    @BelongsToMany(() => GrupoInteres, () => RiesgoGrupoInteres, 'riesgoGrupoInteres')
    grupoIntereses!: GrupoInteres[];

    @BelongsToMany(() => Subproceso, () => ProcesoImpactado, 'procesosImpactados')
    subprocesos!: Subproceso[];

    @BelongsToMany(() => Foda, () => RiesgoFoda, 'riesgoFoda')
    fodas!: Foda[];

    @HasMany(() => Control)
    controles!: Control[];

    @HasMany(() => PlanAccion)
    planacciones!: PlanAccion[];

    @HasMany(() => IndicadorKri)
    indicadorkris!: IndicadorKri[];


    @BeforeCreate
    static generateUuid(instance: Riesgo) {
        instance.riesgoId = uuidv4();
    }
}
