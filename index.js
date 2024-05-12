// Creacion de APIS y definicion de CRUD

import Fastify from 'fastify';
import rutas from './routes.js';
import cors from '@fastify/cors';
import db from './db.js';

// Instancia
const fastify = Fastify({ logger: true });
await fastify.register(cors , {});

rutas.forEach(ruta => {
    fastify.route(ruta);
});

async function database() {
    try {
        await db.sync({force: true});
        console.log('Database connected');
    } catch(err) {
        console.error(err);
    }   
}

try {
    fastify.listen({port:8000})
    database();
} catch(err) {
    console.error(err)   
}