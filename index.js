import { userRouter, express } from "./controller/Usercontroller.js";
import { productRouter } from "./controller/Productcontroller.js";
import {orderRouter} from "./controller/Ordercontroller.js";
import cookieParser from "cookie-parser";
import {errorHandling} from './middleware/ErrorHandling.js'
import path from 'path'
import cors from 'cors'
import { config } from "dotenv"
config()