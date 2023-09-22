import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { Request, Response } from "express"

//get all restaurants
export const getAllRestaurants =async (req : Request, res: Response) => {
    try{
        const allRestaurants = await prisma.restaurants.findMany();

        res.status(200).json({ data: allRestaurants });
    } catch(e){
        console.log(e);
    }
};

//add restaurant 
export const addRestaurants = async (req : Request, res: Response) => {

    try{
        const restaurantData = req.body;

        const addRestaurants = await prisma.restaurants.create({
            data: {
              restaurant_name: restaurantData.restaurant_name,
              restaurant_location: restaurantData.restaurant_location,
            },
          });
      
          res.status(201).json({ data: addRestaurants });
    } catch(e){
        console.log(e);
    }
};

//delete restaurant
export const deleteRestaurants =async (req : Request, res: Response) => {
    try {
    const restaurantId = req.params.id;
    const restaurantDelete = await prisma.restaurants.delete({
      where: {
        restaurantId: parseInt(restaurantId, 10),
      },
    });

    res.status(200).json({ data: {restaurantDelete} });
  } catch (e) {
    console.log(e);
  }
};
