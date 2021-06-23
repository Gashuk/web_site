const {Country} = require('../models/models')
const ApiError = require('../error/ApiError')

class CountryController {
    async creat(req,res,next){
        try {
            const {name} =req.body
            const country = await  Country.create({name})
            return res.json(country)
        }
        catch (e) {
            next(ApiError.badRequest((e.message)))
        }

    }
    async getAll(req,res){
        const country = await Country.findAll()
        return res.json(country)
    }
}

module.exports = new CountryController()