import { Schema,model } from "mongoose";

//schema for TV shows
const tvShowSchema = new Schema({
    title : String,
    time : String,
    channel : String,
    thumbnail : String,
})


//model for TV shows
const TvShow = model("TvShow", tvShowSchema);

export default TvShow;