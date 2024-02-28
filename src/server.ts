import express from 'express'
import routes from './routes/index'
import mongoose from 'mongoose'

import * as articleController from './controllers/article.controller'

const app = express()
const port = 3001

app.use(express.json())
app.use('/api', routes)

app.get('/', articleController.createArticle)

mongoose.connect('mongodb+srv://nemoporc:zI3qA48WmdG4XpBF@blog.pqlbjlg.mongodb.net/')
  .then(() => {
    console.log('mongodb est connecté')
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  })
  .catch(() => {
    console.log('mongo est pas co !')
  })

