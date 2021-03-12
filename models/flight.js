const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: {
    type: Date
  }
});
	
const flightSchema = new Schema({
  airline: {
      type: String,
      enum: ['American', 'Delta', 'Southwest', 'United']
    },
  airport: {
      type: String,
      default: "DEN",
      enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
    },
  flightNo: {
      type: Number, 
      min: 10, 
      max: 9999
    },
  departs: {
      type: Date,
      default: function () {
        return new Date(+new Date() + 365*24*60*60*1000)
    }
    },
    destinations: [destinationSchema],
    nowFlying: Boolean,
  

  } 
);
	
// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);