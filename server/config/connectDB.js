import mongoose from 'mongoose'

const connectDB = async () => {
  console.log('Starting DB Connection')
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('DB Connected')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
