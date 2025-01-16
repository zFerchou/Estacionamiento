"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class VehiculoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehiculo = yield database_1.default.query('SELECT * FROM vehiculo where Estatus is null');
            resp.json(vehiculo);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log([req.body]);
            yield database_1.default.query('INSERT INTO vehiculo set ?', [req.body]);
            resp.json({ text: 'creating a booking' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { matricula } = req.params;
            yield database_1.default.query('UPDATE vehiculo set Estatus = "CANCELADA" WHERE matricula = ?', [matricula]);
            res.json({ message: 'La actividad se eliminó' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { matricula } = req.params;
            yield database_1.default.query('UPDATE vehiculo set ? WHERE matricula = ?', [req.body, matricula]);
            resp.json({ message: 'Updating a booking' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdVehiculo } = req.params;
            const vehiculo = yield database_1.default.query('SELECT * FROM vehiculo WHERE IdVehiculo=?', [IdVehiculo]);
            if (vehiculo.length > 0) {
                return resp.json(vehiculo[0]);
            }
            resp.status(404).json({ text: 'La matricula no existe' });
        });
    }
}
const vehiculoController = new VehiculoController();
exports.default = vehiculoController;
