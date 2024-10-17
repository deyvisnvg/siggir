export const MACROPROCESOS = [
  {
    id: 1,
    codigo: "E",
    macroproceso: "Estratégicos",
    procesos: [
      {
        id: 1,
        codigo: "E1",
        proceso: "Gestion Entidad",
        subprocesos: [
          {
            id: 1,
            subproceso: "Entidad",
            codigo: "E1.1",
            responsable: "Todas las gerencias",
          },
        ],
      },
      {
        id: 2,
        codigo: "E2",
        proceso: "Gestión de la Excelencia Operacional",
        subprocesos: [
          {
            id: 2,
            subproceso: "Administración del Sistema Integrado de Gestión",
            codigo: "E2.1",
            responsable: "Jefe de la Oficina de Gestión Empresarial",
          },
          {
            id: 3,
            subproceso: "Sistema de Gestión",
            codigo: "E2.2",
            responsable: "Coordinador del SIG",
          },
        ],
      },
      {
        id: 3,
        codigo: "E3",
        proceso: "Gobernanza",
        subprocesos: [
          {
            id: 4,
            subproceso: "Gobierno Corporativo",
            codigo: "E3.1",
            responsable: "Jefe de la Oficina de Gestión Empresarial",
          },
          {
            id: 5,
            subproceso: "Sistema de Control Interno",
            codigo: "E3.2",
            responsable: "Jefe de la Oficina de Gestión Empresarial",
          },
          {
            id: 6,
            subproceso: "Gestión de Riesgos",
            codigo: "E3.3",
            responsable: "Responsable de Riesgos",
          },
          {
            id: 7,
            subproceso: "Gestión de cumplimiento",
            codigo: "E3.4",
            responsable: "Encargado de Prevención",
          },
        ],
      },
      {
        id: 4,
        codigo: "E4",
        proceso: "Planeamiento",
        subprocesos: [
          {
            id: 8,
            subproceso: "Planeamiento Institucional",
            codigo: "E4.1",
            responsable: "Especialista en evaluación de Gestión",
          },
          {
            id: 9,
            subproceso: "Planificación Eléctrica",
            codigo: "E4.2",
            responsable: "Jefe Departamento de Ingeniería",
          },
          {
            id: 10,
            subproceso: "Gestión Presupuestal",
            codigo: "E4.3",
            responsable: "Supervisor de Finanzas",
          },
        ],
      },
      {
        id: 5,
        codigo: "E5",
        proceso: "Regulación",
        subprocesos: [
          {
            id: 11,
            subproceso: "Tarifas",
            codigo: "E5.1",
            responsable: "Jefe del Departamento de Comercialización",
          },
          {
            id: 12,
            subproceso: "Estudios Regulatorios",
            codigo: "E5.2",
            responsable: "Comité de Procesos Regulatorios",
          },
        ],
      },
      {
        id: 6,
        codigo: "E6",
        proceso: "Imagen Institucional ",
        subprocesos: [
          {
            id: 13,
            subproceso: "Gestión de comunicaciones",
            codigo: "E6.1",
            responsable:
              "Responsable de Comunicaciones y Responsabilidad Social",
          },
          {
            id: 14,
            subproceso: "Responsabilidad Social",
            codigo: "E6.2",
            responsable:
              "Responsable de Comunicaciones y Responsabilidad Social",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    codigo: "O",
    macroproceso: "Operativos",
    procesos: [
      {
        id: 7,
        codigo: "O1",
        proceso: "Comercialización de energía Eléctrica",
        subprocesos: [
          {
            id: 15,
            subproceso: "Compra de Energía",
            codigo: "O1.1",
            responsable: "Jefe del Departamento de Operaciones",
          },
          {
            id: 16,
            subproceso: "Facturación y Cobranza",
            codigo: "O1.2",
            responsable: "Jefe del Departamento de Comercialización",
          },
          {
            id: 17,
            subproceso: "Atención al Cliente",
            codigo: "O1.3",
            responsable: "Jefe del Departamento de Comercialización",
          },
        ],
      },
      {
        id: 8,
        codigo: "O2",
        proceso: "Gestión de operación y Mantenimiento del sistema Eléctrico",
        subprocesos: [
          {
            id: 18,
            subproceso: "Gestión de la Operación",
            codigo: "O2.1",
            responsable: "Jefe del Departamento de Operaciones",
          },
          {
            id: 19,
            subproceso: "Gestión del Mantenimiento",
            codigo: "O2.2",
            responsable:
              "Jefe del Departamento de Operaciones / Jefe del Departamento de Distribución",
          },
        ],
      },
      {
        id: 9,
        codigo: "O3",
        proceso: "Gestión de la Calidad Operacional",
        subprocesos: [
          {
            id: 20,
            subproceso: "Detección de las Deficiencias",
            codigo: "O3.1",
            responsable:
              "Jefe del Departamento de Calidad / Jefe del Departamento de Control de Pérdidas",
          },
          {
            id: 21,
            subproceso: "Mejoras Técnicas",
            codigo: "O3.2",
            responsable:
              "Jefe del Departamento de Operaciones / Jefe del Departamento de Distribución",
          },
        ],
      },
      {
        id: 10,
        codigo: "O4",
        proceso: "Gestión de Proyectos",
        subprocesos: [
          {
            id: 22,
            subproceso: "Gestión de las Iniciativas",
            codigo: "O4.1",
            responsable: "Jefe Departamento de Ingeniería",
          },
          {
            id: 23,
            subproceso: "Desarrollo de Proyectos",
            codigo: "O4.2",
            responsable: "Jefe Departamento de Ingeniería",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    codigo: "S",
    macroproceso: "Soporte",
    procesos: [
      {
        id: 11,
        codigo: "S1",
        proceso: "Gestión Legal",
        subprocesos: [
          {
            id: 24,
            subproceso: "Solución de Controversias",
            codigo: "S1.1",
            responsable: "Jefe de la Oficina de Asesoría Legal",
          },
          {
            id: 25,
            subproceso: "Gestión del Directorio",
            codigo: "S1.2",
            responsable: "Jefe de la Oficina de Asesoría Legal",
          },
          {
            id: 26,
            subproceso: "Soporte Legal",
            codigo: "S1.3",
            responsable: "Jefe de la Oficina de Asesoría Legal",
          },
        ],
      },
      {
        id: 12,
        codigo: "S2",
        proceso: "Gestión Financiera y Contable",
        subprocesos: [
          {
            id: 27,
            subproceso: "Gestión Contable",
            codigo: "S2.1",
            responsable: "Jefe del Departamento de Contabilidad",
          },
          {
            id: 28,
            subproceso: "Gestión Financiera",
            codigo: "S2.2",
            responsable: "Jefe del Departamento de Finanzas",
          },
          {
            id: 29,
            subproceso: "Gestión de Activos Fijos y Seguros",
            codigo: "S2.3",
            responsable: "Asistente de Control Patrimonial",
          },
        ],
      },
      {
        id: 13,
        codigo: "S3",
        proceso: "Tecnologías de Información y Comunicaciones",
        subprocesos: [
          {
            id: 30,
            subproceso: "Gestión de Desarrollo y Mantenimiento de Software",
            codigo: "S3.1",
            responsable: "Supervisor de Sistemas",
          },
          {
            id: 31,
            subproceso: "Gestión de Infraestructura Tecnológica",
            codigo: "S3.2",
            responsable: "Supervisor de Sistemas",
          },
        ],
      },
      {
        id: 14,
        codigo: "S4",
        proceso: "Gestión de Logística",
        subprocesos: [
          {
            id: 32,
            subproceso: "Gestión de las contrataciones",
            codigo: "S4.1",
            responsable: "Jefe del Departamento de Logistica",
          },
          {
            id: 33,
            subproceso: "Gestión de Almacenes",
            codigo: "S4.2",
            responsable: "Auxiliar de Almacén",
          },
        ],
      },
      {
        id: 15,
        codigo: "S5",
        proceso: "Gestión Humana",
        subprocesos: [
          {
            id: 34,
            subproceso: "Gestión del Personal",
            codigo: "S5.1",
            responsable: "Jefe del Departamento de Recursos Humanos",
          },
          {
            id: 35,
            subproceso: "Desarrollo de Personal",
            codigo: "S5.2",
            responsable: "Asistente Social",
          },
          {
            id: 36,
            subproceso: "Gestión de la Compensación",
            codigo: "S5.3",
            responsable: "Asistente de Recursos Humanos",
          },
          {
            id: 37,
            subproceso: "Gestión de Bienestar",
            codigo: "S5.4",
            responsable: "Asistente Social",
          },
        ],
      },
      {
        id: 16,
        codigo: "S6",
        proceso: "Gestión Documental",
        subprocesos: [
          {
            id: 38,
            subproceso: "Gestión de Trámite Documentario",
            codigo: "S6.1",
            responsable: "Gerente de Administración y Finanzas",
          },
          {
            id: 39,
            subproceso: "Gestión de Archivo",
            codigo: "S6.2",
            responsable: "Jefe del Departamento de Logistica",
          },
        ],
      },
    ],
  },
];

export const PERFILES = [
  {
    id: 1,
    perfil: "Dueño de proceso",
    estado: "ACTIVO",
  },
  {
    id: 2,
    perfil: "Responsable de proceso",
    estado: "ACTIVO",
  },
  {
    id: 3,
    perfil: "Alta dirección",
    estado: "ACTIVO",
  },
  {
    id: 4,
    perfil: "Responsable Gir",
    estado: "ACTIVO",
  },
];

export const ASIG_USUARIOS = [
  {
    id: 1,
    usuario: "elias@gmail.com",
    estado: "ACTIVO",
  },
  {
    id: 2,
    usuario: "ana@gmail.com",
    estado: "ACTIVO",
  },
  {
    id: 3,
    usuario: "francis@gmail.com",
    estado: "ACTIVO",
  },
  {
    id: 4,
    usuario: "dani@gmail.com",
    estado: "ACTIVO",
  },
];