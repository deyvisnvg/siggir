import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import env from '../config/env';
import { Request } from 'express';

const rootDir = process.cwd();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(rootDir, "src", env.FILES_ROUTE));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter
}); // Asegúrate de que el nombre coincida con el nombre del campo en el frontend

export default upload;
