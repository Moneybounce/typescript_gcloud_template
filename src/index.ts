import { Request, Response } from "express";

exports.cloudFunction = async (req: Request, res: Response) => {
  try {
    if (req.body.temp < 100) {
      res.status(200).send("Temperature kinda ok");
    } else {
      res.status(200).send("Too hot");
    }
  } catch (error) {
    //return an error
    console.log("got error: ", error);
    res.status(500).send(error);
  }
};