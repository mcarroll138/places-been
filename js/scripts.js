//Business Logic for Destination List -------
function DestinationList() {
    this.places = {};
}


//Business Logic for Place ------
function Place(country, city, landmark, favoriteFood, wouldRecommend) {
    this.country = country;
    this.city = landmark;
    this.landmark = landmark;
    this.favoriteFood = favoriteFood;
    this.wouldRecommend = wouldRecommend;
}

Place.prototype.countryCity = function() {
    return this.country + ", " + this.city;
}

