import express  from "express";
const app = express();

import Note from "../model/notemodel.js";

import mongoose from "mongoose";

// make router
const myRouter = express.Router();

// get api to get all data
myRouter.get('/' , async(req,res)=>{
    try{
        const NoteFetched = await Note.find();
        res.status(201).json(NoteFetched);
    }
    catch(error)
    {
        console.log(err);
        res.status(400).json({ error: error.message });
    }
});

// create api with post to store data in databse - myRouter ni jgya e app htu pela
myRouter.post('/', async(req,res)=>{
    // req ma j nam ne badhu send thayu e 
     const { title, description } = req.body;

     try{
        //  user data document nu nam che - j user nam na collection ma validation schema nu dhyan rakhinne insert thase
     const NoteAdded = await Note.create({
       title: title,
       description: description,
      //  age: age,
     });

     res.status(201).json(NoteAdded);//data successfully jai to res male - network tab ma
     }
     catch(error)
     {
      // error ave to apde state bnaveli chhe error mate - useState
        console.log(error);
        res.status(400).json({error:error.message})
     }
    

})

// to get single user by id 
myRouter.get("/:id", async (req, res) => {
    const {id} = req.params;
  try {
    const singleNote = await Note.findById({_id:id});
    res.status(201).json(singleNote);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// delete user based on id
myRouter.delete("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const deleteSingleNote = await Note.findByIdAndDelete({ _id: id });
    res.status(201).json(deleteSingleNote);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// put - patch for updating data
myRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updateSingleNote = await Note.findByIdAndUpdate({ _id: id },req.body,{new:true});
    res.status(201).json(updateSingleNote);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});



export default myRouter;
