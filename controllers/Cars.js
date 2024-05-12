import CarModel from "../models/Cars.js";

class CarsContoller {
    constructor() {

    }

    async create (req, res) {
        
        try {
            const car = await CarModel.create(req.body);
            if(car){
                res.status(200).send(car);
            }
        } catch (error) {
            res.status(500).send({message: 'Error al crear Auto'});
        }
        
    }

    async getAll(req, res) {
        try {
            const where = {...req.query};
            const cars = await CarModel.findAll(where);
            res.status(200).send(cars);
        } catch (error) {
            res.status(500).send({message: 'Error al obtener los autos'});
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            const car = await CarModel.findByPk(id)
            if(car){
                res.status(200).send(car);
            } else {
                res.status(404).send({message: 'Auto no encontrado'});
            }
        } catch (error) {
            res.status(500).send({message: 'Error al obtener auto'});
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const data = {...req.body};
            const car = await CarModel.update(data, {where: {id}});
            if (typeof(car[0]) !== 'undefined' && car[0] === 1) {
                res.status(200).send({message: 'Auto actualizado correctamente'});
            }else{
                res.status(404).send({message: 'Auto no encontrado'});
            }
        }catch (error) {
            res.status(500).send({message: 'Error al actualizar auto'});
        }
    }

    async delete (req, res) {
        try {
            const {id} = req.params;
            const brand = await CarModel.destroy({where: {id}});
            if(brand){
                res.status(200).send({message: 'Auto eliminado correctamente'});
            } else {
                res.status(404).send({message: 'Auto no encontrado'});
            }
        } catch (error) {
            res.status(500).send({message: 'Error al eliminar el auto'});
        }
    }
}

export default new CarsContoller();