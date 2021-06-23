const {Profession} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProfessionController {
    async creat(req,res,next){
        try {
            const {name} =req.body
            const profession = await  Profession.create({name})
            return res.json(profession)
        }
        catch (e) {
            next(ApiError.badRequest((e.message)))
        }

    }
    async getAll(req,res){
        const professions = await Profession.findAll()
        return res.json(professions)
    }

}

module.exports = new ProfessionController()