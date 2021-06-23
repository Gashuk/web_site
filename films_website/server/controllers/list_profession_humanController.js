const {List_profession_human} = require('../models/models')
const {Profession} = require('../models/models')
const {Human} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class List_profession_humanController {
    async creat(req,res, next){
        try{
            const {professionId, humanId} = req.body

            const list_profession_human = await List_profession_human.create({professionId, humanId})

            return res.json(list_profession_human)
        }
        catch (e){
            next(ApiError.badRequest((e.message)))
        }

    }
    async getAll(req,res){
        const all_List_profession_human = await List_profession_human.findAll()
        // return res.json(all_List_profession_human)
        const new_List_profession_human = []
        for (const el_all_List_profession_human of all_List_profession_human)
        {
            const {id,professionId,createdAt,updatedAt,humanId} = el_all_List_profession_human
            const one_profession = await Profession.findOne({where:{id: professionId}})
            const one_human = await Human.findOne({where:{id: humanId}})
            const new_one_List_profession_human = {
                "id": id,
                "createdAt": createdAt,
                "updatedAt": updatedAt,
                "humanId": humanId,
                "name_human":one_human.fio,
                "professionId": professionId,
                "name_profession": one_profession.name

            }
            new_List_profession_human.push(new_one_List_profession_human)
        }
        return res.json(new_List_profession_human)
    }

    async getOne(req,res){

    }
}

module.exports = new List_profession_humanController()