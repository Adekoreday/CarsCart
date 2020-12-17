import UserModel from '../database/model/user'

class User {
  static async Create(req, res) {
        try{
          const {name, age} = req.body;
        const data = await UserModel.create({
             name,
             age
         })
         res.status(200).json({
        data
         })
        } catch(e) {
            console.log('user error >>>>', e)
        }
    }
}

export default User;