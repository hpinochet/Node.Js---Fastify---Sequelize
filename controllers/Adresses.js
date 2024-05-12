import AdressModel from "../models/Adresses.js";

class AdressesContoller {
    constructor() {

    }

    async create (req, res) {
        
        try {
            const adress = await AdressModel.create(req.body);
            if(adress){
                res.status(200).send(adress);
            }
        } catch (error) {
            res.status(500).send({message: 'Error al crear Dirección'});
        }
        
    }

    async getAll(req, res) {
        try {
            const where = {...req.query};
            const adresses = await AdressModel.findAll(where);
            res.status(200).send(adresses);
        } catch (error) {
            res.status(500).send({message: 'Error al obtener las direcciones'});
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            const adress = await AdressModel.findByPk(id)
            if(adress){
                res.status(200).send(adress);
            } else {
                res.status(404).send({message: 'Dirección no encontrada'});
            }
        } catch (error) {
            res.status(500).send({message: 'Error al obtener la dirección'});
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const data = {...req.body};
            const adress = await AdressModel.update(data, {where: {id}});
            if (typeof(adress[0]) !== 'undefined' && adress[0] === 1) {
                res.status(200).send({message: 'Dirección actualizada correctamente'});
            }else{
                res.status(404).send({message: 'Dirección no encontrada'});
            }
        }catch (error) {
            res.status(500).send({message: 'Error al actualizar el dirección'});
        }
    }

    async delete (req, res) {
        try {
            const {id} = req.params;
            const adress = await AdressModel.destroy({where: {id}});
            if(adress){
                res.status(200).send({message: 'Dirección eliminado correctamente'});
            } else {
                res.status(404).send({message: 'Dirección no encontrada'});
            }
        } catch (error) {
            res.status(500).send({message: 'Error al eliminar la dirección'});
        }
    }
}

export default new AdressesContoller();