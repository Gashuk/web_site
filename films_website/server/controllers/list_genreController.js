const {List_genre} = require('../models/models')
const {Genre} = require('../models/models')
const {Composition} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class List_genreController {
    async creat(req,res, next){
        try{
            const {compositionId, genreId} = req.body

            const list_genre = await List_genre.create({compositionId, genreId})

            return res.json(list_genre)
        }
        catch (e){
            next(ApiError.badRequest((e.message)))
        }

    }
    async getAll(req,res){
        const all_List_genre = await List_genre.findAll()
        // return res.json(all_List_profession_human)
        const new_List_genre= []
        for (const el_all_List_genre of all_List_genre)
        {
            const {id,createdAt,updatedAt,compositionId,genreId} = el_all_List_genre
            const one_composition = await Composition.findOne({where:{id: compositionId}})
            const one_genre = await Genre.findOne({where:{id: genreId}})
            const new_one_List_genre = {
                "id": id,
                "createdAt": createdAt,
                "updatedAt": updatedAt,
                "compositionId": compositionId,
                "name_composition": one_composition.name,
                "genreId": genreId,
                "name_genre": one_genre.name

            }
            new_List_genre.push(new_one_List_genre)
        }
        return res.json(new_List_genre)
    }

    async getOne(req,res){

    }
}

module.exports = new List_genreController()