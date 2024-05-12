import BrandModel from "../models/Brands.js";

class BrandsContoller {
    constructor() {

    }

    async create (req, res) {
        
        try {
            const brand = await BrandModel.create(req.body);
            if(brand){
                res.status(200).send(brand);
            }
        } catch (error) {
            res.status(500).send({message: 'Error al crear Marca'});
        }
        
    }

    async getAll(req, res) {
        try {
            const where = {...req.query};
            const brands = await BrandModel.findAll(where);
            res.status(200).send(brands);
        } catch (error) {
            res.status(500).send({message: 'Error al obtener las marcas'});
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            const brand = await BrandModel.findByPk(id)
            if(brand){
                res.status(200).send(brand);
            } else {
                res.status(404).send({message: 'Marca no encontrada'});
            }
        } catch (error) {
            res.status(500).send({message: 'Error al obtener marca'});
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const data = {...req.body};
            const brand = await BrandModel.update(data, {where: {id}});
            if (typeof(brand[0]) !== 'undefined' && brand[0] === 1) {
                res.status(200).send({message: 'Marca actualizada correctamente'});
            }else{
                res.status(404).send({message: 'Marca no encontrada'});
            }
        }catch (error) {
            res.status(500).send({message: 'Error al actualizar la marca'});
        }
    }

    async delete (req, res) {
        try {
            const {id} = req.params;
            const brand = await BrandModel.destroy({where: {id}});
            if(brand){
                res.status(200).send({message: 'Marca eliminada correctamente'});
            } else {
                res.status(404).send({message: 'Marca no encontrada'});
            }
        } catch (error) {
            res.status(500).send({message: 'Error al eliminar la marca'});
        }
    }
}

export default new BrandsContoller();