export interface UsuarioData {
  userId: string;
  user: string;
  password: string;
  estado: string;
  fechaCreacion: Date;
}

export interface UsuarioBody {
  userId: string;
  user: string;
  password: string;
  estado: string;
}