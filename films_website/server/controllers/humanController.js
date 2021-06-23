const {Human} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class HumanController {
    async creat(req,res, next){
        try{

            const {fio} =req.body
            try {
                const {img} = req.files
                let fileName = uuid.v4() + ".jpg"
                img.mv(path.resolve(__dirname, '..', 'static', fileName))

                const human = await  Human.create({fio, img: fileName})
                return res.json(human)
            }
            catch (e){
                let fileName = "669c38f0-5ea2-4c50-acbf-b9e93bec23dc.jpg"

                const human = await  Human.create({fio: fio, img: fileName})
                return res.json(human)
            }

        }
        catch (e){
            next(ApiError.badRequest((e.message)))
        }

    }
    async getAll(req,res){
        const human = await Human.findAll()
        return res.json(human)
    }
}

module.exports = new HumanController()