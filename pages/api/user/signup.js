import createHandler from '../../../lib/middleware/nextConnect'
import Joi from  'joi'

import validate from '../../../lib/middleware/validation'

import { signupUser } from '../../../modules/user/user.service'

//validação dos dados recebidos
const postSchema = Joi.object({
  firstName: Joi.string().required().max(50),
  lastName: Joi.string().required().max(50),
  user: Joi.string().required().max(30),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(50).min(6),
})

const signup = createHandler()
//função validate => estamos dizendo que vamos validar o body com as validações do postSchema
//só entra na função da requisição se todos os dados estiverem válidos
signup.post(validate({body: postSchema}), async (req,res) => {
  try{
    console.log("Entrou requisição")
    const user = await signupUser(req.body)
    res.status(201).json(user)
  }
  catch (err){
    console.error(err)
    throw err
  }
})

export default signup;