const {Genre} = require('../models/models')
const ApiError = require('../error/ApiError')

class GenreController {
    async creat(req,res,next){
        try {
            const {name} =req.body
            const genre = await  Genre.create({name})
            return res.json(genre)
        }
        catch (e) {
            next(ApiError.badRequest((e.message)))
        }

    }
    async getAll(req,res){
        const genre = await Genre.findAll()
        return res.json(genre)
    }
}

module.exports = new GenreController()