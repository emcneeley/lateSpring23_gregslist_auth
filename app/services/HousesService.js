import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"



class HousesService {
    async createHousesAndAddToApi() {
        await 
    }

    async gethousesFromApi() {
        const res = await api.get('api/houses')
        AppState.houses = res.data.map(h => new House(h))
        console.log('wut the house', AppState.houses)
    }

}

export const housesService = new HousesService 