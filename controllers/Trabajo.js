import { Op, where } from 'sequelize';
import People from '../models/People.js';
import Address from '../models/Adresses.js';
import City from '../models/Cities.js';
import State from '../models/States.js';
import Car from '../models/Cars.js';
import Brand from '../models/Brands.js';

class TrabajoController {
    constructor() {}

    async consulta(req, res) {
        try {
            const state = await People.findAll({
                attributes: ['id', 'firstName', 'lastName'],
                include: [{
                        model: Address,
                        required: true,
                        attributes: ['id', 'street', 'number'],
                        on: {
                            '$people.addressId$': { [Op.col]: 'adresses.id' }
                        },
                        where: {
                            main: { [Op.eq]: 1 }
                        },
                        include: [{
                            model: City,
                            required: false,
                            attributes: ['id', 'name'],
                            include: [{
                                model: State,
                                required: false,
                                attributes: ['id', 'name']
                            }]
                        }
                    ]
                },
            {
                model: Car,
                required: true,
                attributes: ['id', 'model', 'year'],
                on: {
                    '$people.carId$': { [Op.col]: 'cars.id' }
                },
                include: [{
                    model: Brand,
                    required: false,
                    attributes: ['id', 'name']
                }]
                 
            }],
                where: { firstName: "Juan" }
            });
            if (state) {
                res.status(200).send(state);
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'Error al ejecutar sql' });
        }
    }

}

export default new TrabajoController();
