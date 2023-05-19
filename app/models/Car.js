import { AppState } from "../AppState.js"

export class Car {
  constructor(data) {
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.color = data.color
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.engineType = data.engineType
    this.creatorId = data.creatorId
    this.creator = data.creator
  }

  //TODO dont forget to create/ put in a delete function for the houses in the CarCard 
  get CarCard() {
    return /*html*/`
    <div class="col-md-4 my-3">
      <div class="card elevation-1">
        <img class="rounded-top" src="${this.imgUrl}" alt="${this.make}">
        <div class="card-body">
          <p class="fs-4 mb-2 d-flex justify-content-between">
            <span>
              ${this.make} ${this.model}
            </span>
            <span>
              $${this.price}
            </span>
          </p>
          <div class="d-flex align-items-center justify-content-between border-top pt-2">
              
           
          
              <div>
                <span class="text-capitalize">${this.creator.name}</span>
                <img class="rounded seller-picture" src="${this.creator.picture}" alt="${this.creator.name}">
              </div>
          </div>
        </div>
      </div>
    </div>
    `
  }


  get deleteButtonIfCarIsYours() {
    //                                    v 🕺 has Elvis left the building
    if (this.creatorId != AppState.account?.id) {
      return ''
    }

    return /*html*/`
    <button 
      class="btn btn-danger" 
      onclick="app.CarsController.deleteCar('${this.id}')"
    >💀</button>`

  }



  static CarForm() {
    return /*html*/`
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">List House</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <form onsubmit="app.CarsController.createCar()">
      <div class="modal-body container-fluid">
        <section class="row">
          <div class="mb-3 col-6">
            <label for="year" class="form-label">House Year</label>
            <input required minlength="3" maxlength="20" type="text" class="form-control" id="year" name="year"
              placeholder="House Year">
          </div>
          <div class="mb-3 col-6">
            <label for="bedrooms" class="form-label">Bedrooms</label>
            <input required minlength="3" maxlength="20" type="text" class="form-control" id="bedrooms" name="bedrooms"
              placeholder="Bedrooms">
          </div>
          <div class="mb-3 col-6">
            <label for="bathrooms" class="form-label">Bathrooms</label>
            <input required min="1920" type="number" class="form-control" id="bathrooms" name="bathrooms"  placeholder="Bathrooms">
          </div>
          <div class="mb-3 col-6">
            <label for="price" class="form-label">House Price</label>
            <input required min="2000" max="1000000" type="number" class="form-control" id="price" name="price"
              placeholder="House Price">
          </div>
          <div class="mb-3 col-12">
            <label for="description" class="form-label">House Description</label>
            <input required minlength="3" maxlength="50" type="text" class="form-control" id="description" name="description"
              placeholder="House Description">
          </div>
          <div class="mb-3 col-12">
            <label for="imgUrl" class="form-label">House Image</label>
            <input required type="text" class="form-control" id="imgUrl" name="imgUrl" placeholder="House Image">
          </div>
        </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Create Listing</button>
      </div>
    </form>
    `
  }







} 