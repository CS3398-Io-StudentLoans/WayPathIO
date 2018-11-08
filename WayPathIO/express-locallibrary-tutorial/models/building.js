var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BuildingSchema = new Schema(
  {
    building_name: {type: String, required: true, max: 100},
    busy_level: {type: "array", "contains": {
     "type": "int" }},
    time: {type: Date},
    
  }
);

// Virtual for building's full name
BuildingSchema
.virtual('name')
.get(function () {
  return this.building_name;
});

// Virtual for building's lifespan
BuildingSchema
.virtual('lifespan')
.get(function () {
  return  ( (this.time.getHours() * 60 )  + this.time.getMinutes() ).toString();
});

// Virtual for building's URL
BuildingSchema
.virtual('url')
.get(function () {
  return '/catalog/building/' + this._id;
});

//Export model
module.exports = mongoose.model('Building', BuildingSchema);