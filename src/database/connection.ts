import mongoose from 'mongoose'

const mongoUri: string = 'mongodb://localhost:27017/tindin'

mongoose.connect(mongoUri)

export default mongoose