const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
   thumbnail: String,
   company: String,
   price: Number,
   techs: [String],
   user: {
      //Referência ao usuário que criou o spot
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
   }
}, {
   toJSON: {
      virtuals: true
   }
});

//esse campo � criado pelo  js no frontend
SpotSchema.virtual('thumbnail_url').get(function () {
   return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);