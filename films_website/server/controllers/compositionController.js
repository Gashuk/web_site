const {Composition} = require('../models/models')
const {List_composition_human} = require('../models/models')
const {List_profession_human} = require('../models/models')
const {Human} = require('../models/models')
const {Profession} = require('../models/models')
const {List_country} = require('../models/models')
const {List_genre} = require('../models/models')
const {Country} = require('../models/models')
const {Genre} = require('../models/models')
const {Type} = require('../models/models')

const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class CompositionController {
    async creat(req,res, next){
        try{
            const {name, typeId, description, year1, year2, number_seasons, rating} = req.body
            // const composition = await Composition.create({name, typeId, description, year1,rating})

            // return res.json(composition)
            try {
                const {img} = req.files
                let fileName = uuid.v4() + ".jpg"
                img.mv(path.resolve(__dirname, '..', 'static', fileName))

                const composition = await Composition.create({name, typeId, description, year1, year2,rating, number_seasons, img: fileName})

                return res.json(composition)
            }
            catch (e) {
                let fileName = "669c38f0-5ea2-4c50-acbf-b9e93bec23dc.jpg"

                const composition = await Composition.create({name, typeId, description, year1, year2,rating, number_seasons, img: fileName})

                return res.json(composition)
            }

        }
        catch (e){
            next(ApiError.badRequest((e.message)))
        }

    }
    async getOne(req,res, next){
        try {
            const {id}= req.params
            const all_el_composition = []

            const one_composition = await Composition.findOne({where:{id: id}})
            all_el_composition.push([one_composition])

            const all_Profession = await Profession.findAll()
            all_el_composition.push(all_Profession)

            const {typeId} = one_composition
            const one_type = await Type.findOne({where:{id: typeId}})
            all_el_composition.push([one_type])

            const all_Country = await List_country.findAll({where:{compositionId: id}})
            const el_list_country = []
            for (const el_all_Country of all_Country)
            {
                const {countryId} = el_all_Country
                const one_country = await Country.findAll({where: {id: countryId}})
                for (const el_one_country in one_country) {
                    el_list_country.push(one_country[el_one_country])
                }
            }
            all_el_composition.push(el_list_country)

            const all_Genre = await List_genre.findAll({where:{compositionId: id}})
            const el_list_genre = []
            for (const el_all_Genre of all_Genre)
            {
                const {genreId} = el_all_Genre
                const one_genre = await Genre.findAll({where: {id: genreId}})
                for (const el_one_genre in one_genre) {
                    el_list_genre.push(one_genre[el_one_genre])
                }
            }
            all_el_composition.push(el_list_genre)

            const all_List_composition_human = await List_composition_human.findAll({where:{compositionId: id}})
            const all_Profession_count = await Profession.findAndCountAll()
            const {count} = all_Profession_count
            for (let i = 1; i < (count + 1) ; i++)
            {
                const el_profession_human = []
                for (const el_all_List_composition_human of all_List_composition_human)
                {
                    const {listProfessionHumanId} = el_all_List_composition_human
                    const all_List_profession_human = await List_profession_human.findAll({where: {id: listProfessionHumanId}})
                    for (const el_all_List_profession_human of all_List_profession_human)
                    {
                        const {humanId, professionId} = el_all_List_profession_human
                        if (professionId == i) {
                            const all_Human = await Human.findAll({where: {id: humanId}})
                            for (const el_all_Human in all_Human) {
                                el_profession_human.push(all_Human[el_all_Human])
                            }
                        }
                    }
                }
                // return res.json(el_profession_human)
                all_el_composition.push(el_profession_human)
            }
            return res.json(all_el_composition)
        }
    catch (e){
            next(ApiError.badRequest((e.message)))
        }

    }
    async getAll(req,res){
        let{limit, page} = req.query
        page = page ||1
        limit = limit ||9
        let offset = page * limit - limit
        const all_Composition = await Composition.findAndCountAll()
        const new_el_all_Composition = []
        for (const el_all_Composition of all_Composition.rows)
        {
            const {id, description,img,year1, year2,number_seasons,rating,createdAt,updatedAt,typeId} = el_all_Composition
            const one_type = await Type.findOne({where:{id: typeId}})
            const {name} = one_type
            const new_one_composition = {
                "id": id,
                "name": el_all_Composition.name,
                "img":img,
                "description":description,
                "year1":year1,
                "year2": year2,
                "number_seasons": number_seasons,
                "rating": rating,
                "createdAt": createdAt,
                "updatedAt": updatedAt,
                "typeId":typeId,
                "name_type": name
            }
            new_el_all_Composition.push(new_one_composition)
        }
        const itog= {
            "count": all_Composition.count,
            "rows":new_el_all_Composition
        }

        return res.json(itog)
    }
    async deleteOne(req,res)
    {
        const {id}= req.params
        await Composition.destroy({
        where:{id: id}
        });

    }
}



module.exports = new CompositionController()