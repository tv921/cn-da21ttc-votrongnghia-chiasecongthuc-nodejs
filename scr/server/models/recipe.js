
const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeSchema = new Schema({
  title: { type: String, required: true }, 
  images: { type: String, required: true }, 
  cookingStyle: { type: String, required: true }, 
  cookingTime: { type: String, required: true }, 
  ingredients: [{ type: String, required: true }],
  stepsDescriptions: [{ type: String, required: true }], 
  stepsImages: [{ type: String, default: '' }], 
  video: { type: String, default: '' }, 
  createdAt: { type: Date, default: Date.now }, 
  updatedAt: { type: Date, default: Date.now }, 
  ratings: [{
    type: Schema.Types.ObjectId,
    ref: 'Rating', 
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment', 
  }],
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;

