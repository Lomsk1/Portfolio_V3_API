import mongoose, { Document } from "mongoose";

interface IWeb {
  name: string;
}

const webSchema = new mongoose.Schema<IWeb>({
  name: {
    type: String,
    required: [true, "A web must have a name"],
  },
});

const Web = mongoose.model<IWeb & Document>("Web", webSchema);

export default Web;
