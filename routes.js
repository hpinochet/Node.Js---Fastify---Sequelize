import AdressContoller from "./controllers/Adresses.js";
import BrandsContoller from "./controllers/Brands.js";
import CarController from "./controllers/Cars.js";
import CitiesController from "./controllers/Cities.js";
import PeopleController from "./controllers/People.js";
import EstateController from "./controllers/States.js";
import TrabajoController from "./controllers/Trabajo.js";

const rutas = [
    // Adress
    {
        method: "POST",
        url: "/adrress",
        handler: AdressContoller.create,
    },
    {
        method: "GET",
        url: "/adress",
        handler: AdressContoller.getAll
    },
    {
        method: "GET",
        url: "/adress/:id",
        handler: AdressContoller.getOne
    },
    {
        method: "PUT",
        url: "/adress/:id",
        handler: AdressContoller.update
    },
    {
        method: "DELETE",
        url: "/adress/:id",
        handler: AdressContoller.delete
    },
    // Brand
    {
        method: "POST",
        url: "/brand",
        handler: BrandsContoller.create,
    },
    {
        method: "GET",
        url: "/brand",
        handler: BrandsContoller.getAll
    },
    {
        method: "GET",
        url: "/brand/:id",
        handler: BrandsContoller.getOne
    },
    {
        method: "PUT",
        url: "/brand/:id",
        handler: BrandsContoller.update
    },
    {
        method: "DELETE",
        url: "/brand/:id",
        handler: BrandsContoller.delete
    },
    // Car
    {
        method: "POST",
        url: "/car",
        handler: CarController.create,
    },
    {
        method: "GET",
        url: "/car",
        handler: BrandsContoller.getAll
    },
    {
        method: "GET",
        url: "/car/:id",
        handler: BrandsContoller.getOne
    },
    {
        method: "PUT",
        url: "/car/:id",
        handler: BrandsContoller.update
    },
    {
        method: "DELETE",
        url: "/car/:id",
        handler: BrandsContoller.delete
    },
    // City
    {
        method: "POST",
        url: "/city",
        handler: CitiesController.create,
    },
    {
        method: "GET",
        url: "/city",
        handler: CitiesController.getAll
    },
    {
        method: "GET",
        url: "/city/:id",
        handler: CitiesController.getOne
    },
    {
        method: "PUT",
        url: "/city/:id",
        handler: CitiesController.update
    },
    {
        method: "DELETE",
        url: "/city/:id",
        handler: CitiesController.delete
    },
    // People
    {
        method: "POST",
        url: "/people",
        handler: PeopleController.create,
    },
    {
        method: "GET",
        url: "/people",
        handler: CitiesController.getAll
    },
    {
        method: "GET",
        url: "/people/:id",
        handler: CitiesController.getOne
    },
    {
        method: "PUT",
        url: "/people/:id",
        handler: CitiesController.update
    },
    {
        method: "DELETE",
        url: "/people/:id",
        handler: CitiesController.delete
    },
    // Estado
    {
        method: "POST",
        url: "/estate",
        handler: EstateController.create,
    },
    {
        method: "GET",
        url: "/estate",
        handler: EstateController.getAll
    },
    {
        method: "GET",
        url: "/estate/:id",
        handler: EstateController.getOne
    },
    {
        method: "PUT",
        url: "/estate/:id",
        handler: EstateController.update
    },
    {
        method: "DELETE",
        url: "/estate/:id",
        handler: EstateController.delete
    },
    // Trabajo
    {
        method: "GET",
        url: "/work",
        handler: TrabajoController.consulta
    }
]

export default rutas;