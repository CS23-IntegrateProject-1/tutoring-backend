import { Router } from "express";

import {
    getAllRestaurants,
    addRestaurants,
    deleteRestaurants,
} from '../controllers/restaurant.controller'

const restaurantRouter = Router();

restaurantRouter.get("/", getAllRestaurants);
restaurantRouter.post("/", addRestaurants);
restaurantRouter.delete("/:id", deleteRestaurants);



export default restaurantRouter;