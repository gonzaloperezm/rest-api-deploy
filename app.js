import express, { json } from 'express' // require -> commonJS

import cors from 'cors'

import { createRequire } from 'node:module'
import { moviesRouter } from './routes/movies.js'
import { corsMiddelware } from './middlewares/cors.js'

const require = createRequire(import.meta.url)


const app = express()
app.use(json())
app.use(corsMiddelware())
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS

// Todos los recursos que sean MOVIES se identifica con /movies
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 3333

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
