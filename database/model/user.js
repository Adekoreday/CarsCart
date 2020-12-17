import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  age: Number,
  cars: [{ type: Schema.Types.ObjectId, ref: "Car" }],
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

export default User;