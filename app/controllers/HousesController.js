import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawHousestoPage() {
    let template = ''
    AppState.houses.forEach(h => {
        template += h.HouseCard
    })
    setHTML('app', template)

}

function _drawFormButton() {
    if (AppState.account) {
        setHTML('create-house-button', '<button class="btn btn-dark square" data-bs-toggle="modal" data-bs-target="#the-target-id" >Create House Listing</button>')
    }
}

export class HousesController {
    constructor() {

        setHTML('app', '<h1>Your new house could be here</h1>')

        this.getHousesFromApi()
        AppState.on('houses', _drawHousestoPage)

    }




    async getHousesFromApi() {
        try {
            await housesService.gethousesFromApi()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createHousesAndAddToApi() {
        try {
            await housesService.createHousesAndAddToApi()
        } catch (error) {

        }
    }
    //TODO THIS IS WHERE YOU STOPPED!!!!! MAKE SURE TO SET UP HOUSE SERVICE WHEN YOU GET BACK!!
    async createHouse() {
        try {
            // @ts-ignore
            window.event.preventDefault

            const form = window.event.target
        } catch (error) {

        }
    }
}