import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export  const createType = async (type) =>{
    const {data} = await $authHost.post('api/type', type)
    return data
}
export  const deleteType = async (type) =>{
    const {data} = await $authHost.delete('api/type', type)
    return data
}

export  const fetchTypes = async () =>{
    const {data} = await $host.get('api/type')
    return data
}

export  const createGenre = async (genre) =>{
    const {data} = await $host.post('api/genre', genre)
    return data
}


export  const fetchGenre = async () =>{
    const {data} = await $host.get('api/genre')
    return data
}

export  const createComposition = async (composition) =>{
    const {data} = await $authHost.post('api/composition', composition)
    return data
}

export  const fetchComposition = async () =>{
    const {data} = await $host.get('api/composition')
    return data
}

export  const fetchOneComposition = async (id) =>{
    const {data} = await $host.get('api/composition/' + id)
    return data
}
export  const createProfession = async (profession) =>{
    const {data} = await $host.post('api/profession', profession)
    return data
}

export  const fetchProfession = async () =>{
    const {data} = await $host.get('api/profession')
    return data
}

export  const createList_profession_human  = async (list_profession_human) =>{
    const {data} = await $host.post('api/list_profession_human', list_profession_human)
    return data
}

export  const fetchList_profession_human = async () =>{
    const {data} = await $host.get('api/list_profession_human')
    return data
}

export  const createList_composition_human = async (list_composition_human) =>{
    const {data} = await $host.post('api/list_composition_human', list_composition_human)
    return data
}

export  const fetchList_composition_human = async () =>{
    const {data} = await $host.get('api/list_composition_human')
    return data
}

export  const createList_genre = async (list_genre) =>{
    const {data} = await $host.post('api/list_genre', list_genre)
    return data
}

export  const fetchList_genre = async () =>{
    const {data} = await $host.get('api/list_genre')
    return data
}

export  const createList_country = async (list_country) =>{
    const {data} = await $host.post('api/list_country', list_country)
    return data
}

export  const fetchList_country = async () =>{
    const {data} = await $host.get('api/list_country')
    return data
}

export  const createHuman = async (human) =>{
    const {data} = await $host.post('api/human', human)
    return data
}

export  const fetchHuman = async () =>{
    const {data} = await $host.get('api/human')
    return data
}

export  const createCountry = async (country) =>{
    const {data} = await $host.post('api/country', country)
    return data
}
export  const fetchCountry = async () =>{
    const {data} = await $host.get('api/country')
    return data
}


export  const fetchUser_profiles = async () =>{
    const {data} = await $host.get('api/user_profile')
    return data
}

