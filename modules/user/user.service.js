import { hashPassword } from "../../utils/bcrypt"

import User from './user.model'

export const signupUser = async (body) => {

  //criando um objeto para enviar ao BD, copiando todos os dados da requisição e modificando o atributo senha 
  try {
    const user = {
      ...body,
      password: hashPassword(body.password)
    }
    const dbUser  = await User.create(user)
    return dbUser
  } catch (err) {
    console.error(err)
    throw err
  }


  console.log(user)
  
}