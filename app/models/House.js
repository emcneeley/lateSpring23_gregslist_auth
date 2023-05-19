export class House {
    constructor(data) {
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator

    }


    get HouseCard() {
        return ` 
        <div class="col-md-4 my-3">
      <div class="card elevation-1">
        <img class="rounded-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
          <p class="fs-4 mb-2 d-flex justify-content-between">
            <span>
              ${this.bedrooms} ${this.bathrooms} 
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

    static HouseForm() {
        `<form onsubmit="app.HousesController.createHouse()">
        <div class="modal-body container-fluid">
            <section class="row">
                <div class="mb-3 col-6">
                    <label for="make" class="form-label">Car Make</label>
                    <input required minlength="3" maxlength="20" type="text" class="form-control" id="make" name="make"
                        placeholder="Car Make">
                </div>
                <div class="mb-3 col-6">
                    <label for="model" class="form-label">Car Model</label>
                    <input required minlength="3" maxlength="20" type="text" class="form-control" id="model" name="model"
                        placeholder="Car Model">
                </div>
                <div class="mb-3 col-6">
                    <label for="year" class="form-label">Car Year</label>
                    <input required min="1920" type="number" class="form-control" id="year" name="year" placeholder="Car Year">
                </div>
                <div class="mb-3 col-6">
                    <label for="price" class="form-label">Car Price</label>
                    <input required min="2000" max="1000000" type="number" class="form-control" id="price" name="price"
                        placeholder="Car Price">
                </div>
                <div class="mb-3 col-12">
                    <label for="description" class="form-label">Car Description</label>
                    <input required minlength="3" maxlength="50" type="text" class="form-control" id="description" name="description"
                        placeholder="Car Description">
                </div>
                <div class="mb-3 col-12">
                    <label for="imgUrl" class="form-label">Car Image</label>
                    <input required type="text" class="form-control" id="imgUrl" name="imgUrl" placeholder="Car Image">
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

