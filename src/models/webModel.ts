import mongoose from "mongoose";

interface IWeb {
  name: string;
}

const webModel = new mongoose.Schema<IWeb>({
  name: {
    type: String,
    required: [true, "A web must have a name"],
  },
});

const Web = mongoose.model("Web", webModel);

export default Web;
