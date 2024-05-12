import PeopleModel from '../models/People.js';

class PeoplesContoller {
    constructor() {

    }

    async create (req, res) {
        
        try {
            const people = await PeopleModel.create(req.body);
            if(people){
                res.status(200).send(people);
            }
        } catch (error) {
            res.status(500).send({message: 'Error al crear persona'});
        }
        
    }

    async getAll(req, res) {
        try {
            const where = {...req.query};
            const people = await PeopleModel.findAll(where);
            res.status(200).send(people);
        } catch (error) {
            res.status(500).send({message: 'Error al obtener las personas'});
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            const people = await PeopleModel.findByPk(id)
            if(people){
                res.status(200).send(people);
            } else {
                res.status(404).send({message: 'Persona no encontrada'});
            }
        } catch (error) {
            res.status(500).send({message: 'Error al obtener persona'});
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const data = {...req.body};
            const people = await PeopleModel.update(data, {where: {id}});
            if (typeof(people[0]) !== 'undefined' && people[0] === 1) {
                res.status(200).send({message: 'Persona actualizada correctamente'});
            }else{
                res.status(404).send({message: 'Persona no encontrada'});
            }
        }catch (error) {
            res.status(500).send({message: 'Error al actualizar persona'});
        }
    }

    async delete (req, res) {
        try {
            const {id} = req.params;
            const people = await PeopleModel.destroy({where: {id}});
            if(people){
                res.status(200).send({message: 'Persona eliminada correctamente'});
            } else {
                res.status(404).send({message: 'Persona no encontrada'});
            }
        } catch (error) {
            res.status(500).send({message: 'Error al eliminar persona'});
        }
    }
}

export default new PeoplesContoller();