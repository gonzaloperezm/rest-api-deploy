import { readJSON } from "../utils.js"
import { randomUUID } from 'node:crypto'
const movies = readJSON('./movies.json')
export class MovieModel{
  static getAll = async ({genre}) => {
    if (genre) {
      return movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
  }
  return movies
}

  static async getById(id) {
    return movies.find(movie => movie.id === id)
  }

  static async create(data) {
    const newMovie = {
      id: randomUUID(), 
      ...input
    }

    return newMovie
  }
}