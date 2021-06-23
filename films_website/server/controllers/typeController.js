const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async creat(req,res,next){
        try {
            const {name} =req.body
            const type = await  Type.create({name})
            return res.json(type)
        }
        catch (e) {
            next(ApiError.badRequest((e.message)))

        }

    }
    async getAll(req,res){
        const type = await Type.findAll()
        return res.json(type)
    }
    async delete(req,res,next){
        try {
            const {id} =req.body
            const type = await  Type.destroy({where:{id: id}})
            return res.json(type)
        }
        catch (e) {
            next(ApiError.badRequest((e.message)))

        }

    }
}

module.exports = new TypeController()