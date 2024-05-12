import StateModel from "../models/States.js";

class StatesContoller {
    constructor() {

    }

    async create (req, res) {
        
        try {
            const state = await StateModel.create(req.body);
            if(state){
                res.status(200).send(state);
            }
        } catch (error) {
            res.status(500).send({message: 'Error al crear estado'});
        }
        
    }

    async getAll(req, res) {
        try {
            const where = {...req.query};
            const states = await StateModel.findAll(where);
            res.status(200).send(states);
        } catch (error) {
            res.status(500).send({message: 'Error al obtener los estados'});
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            const states = await StateModel.findByPk(id)
            if(states){
                res.status(200).send(states);
            } else {
                res.status(404).send({message: 'Estado no encontrado'});
            }
        } catch (error) {
            res.status(500).send({message: 'Error al obtener estado'});
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const data = {...req.body};
            const state = await StateModel.update(data, {where: {id}});
            if (typeof(state[0]) !== 'undefined' && state[0] === 1) {
                res.status(200).send({message: 'Estado actualizado correctamente'});
            }else{
                res.status(404).send({message: 'Estado no encontrado'});
            }
        }catch (error) {
            res.status(500).send({message: 'Error al actualizar estado'});
        }
    }

    async delete (req, res) {
        try {
            const {id} = req.params;
            const state = await StateModel.destroy({where: {id}});
            if(state){
                res.status(200).send({message: 'Estado eliminado correctamente'});
            } else {
                res.status(404).send({message: 'Estado no encontrado'});
            }
        } catch (error) {
            res.status(500).send({message: 'Error al eliminar estado'});
        }
    }
}

export default new StatesContoller();