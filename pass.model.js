import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
    unique: true

  },
  LastName: {
    type: String,
    required: true,
    unique: true

  },
  password: {
    type: String,
    required: true
  },
  verifypassword: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  profilePic: {
    type: Buffer,
    default: ''
  },
  gender: {
    type: String,
    enum: ['Male', 'MALE', 'Female', 'FEMALE', 'male', 'female', 'Frog'],

  }
},
{
  timeStamps: true
}
);


const User = mongoose.model('User',userSchema)
export default User