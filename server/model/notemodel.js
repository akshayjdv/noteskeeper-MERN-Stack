import mongoose from 'mongoose'

// create schema for collection
const noteSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true,
        // unique : true
    },

    
},{ timestamps:true});

// now create the user model - say user collection
// mongoose.model ma pela model nu nam pachhi validation mate schema jase
// crud operation USer nam use thi thase
const Note = mongoose.model('Note',noteSchema);//model user kryu etle collection bnyu users nam nu - as mongodb ma evu thai singular nu plural amd so on

export default Note;
