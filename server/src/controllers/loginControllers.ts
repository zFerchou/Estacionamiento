import{Request,Response}from'express';
import pool from "../database";

class LoginController{

    public async login(req:Request, resp:Response){
        const { correo, password1 } = req.body;
        const usuario = await pool.query('SELECT * FROM usuario WHERE correo = ? AND password1 = ?', [correo, password1]);
        
        if(usuario.length > 0) {
            // Si el usuario existe y las credenciales son correctas
            resp.json({ success: true, message: "Inicio de sesión exitoso", usuario: usuario });
        } else {
            // Si las credenciales son incorrectas
            resp.status(401).json({ success: false, message: "Correo o contraseña incorrectos" });
        }
    }
    
}
const loginController = new LoginController();
export default loginController ;