import { v4 as uuidv4 } from 'uuid';
import { Table, Column, Model, PrimaryKey, DataType, ForeignKey, BelongsTo, BeforeCreate } from 'sequelize-typescript';
import { Control, PlanAccion } from './index';

@Table({
    tableName: 'sustento',
    timestamps: false,
})
export class Sustento extends Model {
    @PrimaryKey
    @Column({
        field: 'sustento_id',
        type: DataType.UUID
    })
    sustentoId!: string;

    @Column({
        field: 'sustento_nombreOriginal',
        type: DataType.STRING
    })
    sustentoNombreOriginal!: string;

    @Column({
        field: 'sustento_nombre',
        type: DataType.STRING
    })
    sustentoNombre!: string;

    @Column({
        field: 'sustento_path',
        type: DataType.STRING
    })
    sustentoPath!: string;

    @Column({
        field: 'control_fechaCreacion',
        type: DataType.DATE,
        defaultValue: DataType.NOW
    })
    controlFechaCreacion!: Date;

    @ForeignKey(() => Control)
    @Column({
        field: 'control_id',
        type: DataType.UUID
    })
    controlId!: string;

    @ForeignKey(() => PlanAccion)
    @Column({
        field: 'planAccion_id',
        type: DataType.UUID
    })
    planaccionId!: string;

    @BelongsTo(() => Control)
    control!: Control;

    @BelongsTo(() => PlanAccion)
    planaccion!: PlanAccion;


    @BeforeCreate
    static generateUuid(instance: Sustento) {
        instance.sustentoId = uuidv4();
    }
}
