const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
const port = 3000
var qs = require('qs')
app.use(express.json())
app.use(cors())

const apiUrl = 'https://test.satim.dz/payment/rest/register.do'
const confirmUrl = 'https://test.satim.dz/payment/rest/confirmOrder.do'
const userName ='SAT2106290205'
const password = 'satim120'
const jsonParams ='{"force_terminal_id":"E010900197"}'

app.post('/order', (request, response) => {
  let query = request.body.data
  query.userName = userName
  query.password = password
  query.jsonParams = jsonParams
  console.log(query)
  axios.get( apiUrl, {params: query}).then(res => {
    console.log(res.data)
    response.send(res.data)
})  
})

app.post('/confirm', (request, response) => {
  let query = request.body.data
  query.userName = userName
  query.password = password
  axios.get(confirmUrl, {params: query}).then(res => {
    console.log(res.data)
    response.send(res.data)

})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})