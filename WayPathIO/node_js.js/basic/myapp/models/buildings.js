var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BuildingSchema = new Schema(
  {
    building_name: {type: String, required: true, max: 100},
    busy_level: {type: number[]},
    time: {type: Date},
  }
);

// Virtual for author's full name
BuildingSchema
.virtual('name')
.get(function () {
  return this.building_name;
});

// Virtual for author's lifespan
BuildingSchema
.virtual('busy')
.get(function () {
  return (this.busy_level[0]);
});

// Virtual for author's URL
BuildingSchema
.virtual('time')
.get(function () {
  return ((this.getHours() * 60) + this.getMinutes());
});

//Export model
module.exports = mongoose.model('Building', BuildingSchema);