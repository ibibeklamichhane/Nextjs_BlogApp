// SignUpSchema.ts
import * as z from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  contact: z.string().min(10, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),

  country: z.string().min(1, "Country is required"),
  dob: z.string().min(1, "Dob is required"),
  gender: z.string().min(1, "Gender is required"),
  postal: z.string(),
  state: z.string(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be at most 32 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
