import mongoose from 'mongoose';
const { Schema } = mongoose;

const CarSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  date: String,
  owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
  }
},{
    timestamps: true
});

const Car = mongoose.model('Car', CarSchema);

export default Car;