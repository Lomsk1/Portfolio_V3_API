import mongoose from "mongoose";

const webModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A web must have a name"],
  },
});

const Web = mongoose.model("Web", webModel);

export default Web;
