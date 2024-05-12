import CitiesModel from '../models/Cities.js';

class CitiesContoller {
    constructor() {

    }

    async create (req, res) {
        
        try {
            const city = await CitiesModel.create(req.body);
            if(city){
                res.status(200).send(city);
            }
        } catch (error) {
            res.status(500).send({message: 'Error al crear Ciudad'});
        }
        
    }

    async getAll(req, res) {
        try {
            const where = {...req.query};
            const cities = await CitiesModel.findAll(where);
            res.status(200).send(cities);
        } catch (error) {
            res.status(500).send({message: 'Error al obtener las ciudades'});
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            const citie = await CitiesModel.findByPk(id)
            if(citie){
                res.status(200).send(citie);
            } else {
                res.status(404).send({message: 'Ciudad no encontrada'});
            }
        } catch (error) {
            res.status(500).send({message: 'Error al obtener ciudad'});
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const data = {...req.body};
            const city = await CitiesModel.update(data, {where: {id}});
            if (typeof(city[0]) !== 'undefined' && city[0] === 1) {
                res.status(200).send({message: 'Ciudad actualizada correctamente'});
            }else{
                res.status(404).send({message: 'Ciudad no encontrada'});
            }
        }catch (error) {
            res.status(500).send({message: 'Error al actualizar ciudad'});
        }
    }

    async delete (req, res) {
        try {
            const {id} = req.params;
            const city = await CitiesModel.destroy({where: {id}});
            if(city){
                res.status(200).send({message: 'Ciudad eliminada correctamente'});
            } else {
                res.status(404).send({message: 'Ciudad no encontrada'});
            }
        } catch (error) {
            res.status(500).send({message: 'Error al eliminar ciudad'});
        }
    }
}

export default new CitiesContoller();