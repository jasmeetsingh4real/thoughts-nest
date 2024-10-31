import { z } from "zod";

export const loginDetailsSchema = z.object({
  userName: z.string().min(1, "Please enter your username"),
  password: z.string().min(7, "Password must be 7 min letters"),
});
