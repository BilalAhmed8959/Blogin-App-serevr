import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "user name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save" , async function name(next) {
    if(!this.isModified("password")) return next()

        this.password = await bcrypt.hash(this.password , 10);
        next()
})



export default mongoose.model("User", userSchema);
