//Business Logic for Destination List -------
function DestinationList() {
    this.places = {};
}

DestinationList.prototype.addPlace = function(place) {
    this.places[place.city] = place;
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

