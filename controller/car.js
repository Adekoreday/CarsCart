import CarModel from '../database/model/car'
import UserModel from '../database/model/user'

class Car {
  static async Create(req, res) {
        try{
          const {name, date, ownerId} = req.body;
          const id = ownerId;
        const data = await CarModel.create({
             name,
             date,
             owner: ownerId 
         })

         const userById = await UserModel.findById(id);
         userById.cars.push(data);
         await userById.save();
         const userCar = await UserModel.findById(id).populate('cars');
         res.status(200).json({
            userCar
         })


        } catch(e) {
            console.log('user error >>>>', e)
        }
    }
}

export default Car;