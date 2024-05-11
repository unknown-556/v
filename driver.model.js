import mongoose from 'mongoose'

const driverSchema = mongoose.Schema({
  FirstName: {
    type: String,
    required: true,

  },
  LastName: {
    type: String,
    required: true,

  },

  email: {
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
  city: {
    type: String,
    // required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },

},
{
  timeStamps: true
}
);


const Driver = mongoose.model('Driver',driverSchema)
export default Driver