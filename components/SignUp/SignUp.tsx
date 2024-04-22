"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signUpSchema } from "@/ZodSchema/SignUpSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormIcon from "@/Icons/FormIcon";

// zod infers the shape of the data
type FormData = z.infer<typeof signUpSchema>;

const showSuccessToast = () => {
  toast.success("Sign-up successful!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export default function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  async function onSubmit(data: FormData) {
    console.log(isSubmitting);
    console.log(data);
    // Replace this with a server action or fetch an API endpoint to register
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
        showSuccessToast();
      }, 500);
    });
  }

  return (
    <div className="selection:bg-gray-500 selection:text-white">
      <ToastContainer />
      <div className="flex flex-row min-h-screen items-center justify-center bg-gray-200">
        <div className="p-8">
          
        <div className=" overflow-hidden rounded-3xl  bg-white shadow-xl">
            {/* Form Header */}
   

            {/* Form Body */}
            <div className="rounded-tr-4xl bg-white px-10 pb-8 pt-4"> 
              <h1 className="text-2xl font-semibold text-gray-900 text-center">
                Create an account
              </h1>
              <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-20">
                {/* Name Input */}
              
                <div className="relative col-span-1">
                  <input
                    {...register("name", { required: true })}
                    id="name"
                    name="name"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                    placeholder="John Doe"
                   
                  />
                  {errors?.name && (
                    <p className="text-red-600 text-sm">
                      {errors?.name?.message}
                    </p>
                  )}
                  <label
                    htmlFor="name"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative  col-span-1">
                  <input
                    {...register("email", { required: true })}
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                    placeholder="john@doe.com"
                    autoComplete="off"
                  />
                  {errors?.email && (
                    <p className="text-red-600 text-sm">
                      {errors?.email?.message}
                    </p>
                  )}
                  <label
                    htmlFor="email"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Email address
                  </label>
                </div>

                {/* Contact */}
                <div className="relative  col-span-1">
                  <input
                    {...register("contact", { required: true })}
                    id="contact"
                    name="contact"
                    type="number"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                    placeholder="9866087878"
                    
                  />
                  {errors?.contact && (
                    <p className="text-red-600 text-sm">
                      {errors?.contact?.message}
                    </p>
                  )}
                  <label
                    htmlFor="email"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Contact Number
                  </label>
                </div>

                {/* Address Input */}
                <div className="relative  col-span-1">
                  <input
                    {...register("email", { required: true })}
                    id="address"
                    name="address"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                    placeholder="pokhara"
                    autoComplete="off"
                  />
                  {errors?.address && (
                    <p className="text-red-600 text-sm">
                      {errors?.address?.message}
                    </p>
                  )}
                  <label
                    htmlFor="email"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Address
                  </label>
                </div>
                {/* City */}
                <div className="relative  col-span-1">
                  <input
                    {...register("city", { required: true })}
                    id="city"
                    name="city"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                    placeholder="john@doe.com"
                    autoComplete="off"
                  />
                  {errors?.city && (
                    <p className="text-red-600 text-sm">
                      {errors?.city?.message}
                    </p>
                  )}
                  <label
                    htmlFor="email"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    City
                  </label>
                </div>
                {/* Country Input */}
                <div className="relative  col-span-1">
                  <input
                    {...register("country", { required: true })}
                    id="country"
                    name="country"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                    placeholder="Nepal"
                  />
                  {errors?.country && (
                    <p className="text-red-600 text-sm">
                      {errors?.country?.message}
                    </p>
                  )}
                  <label
                    htmlFor="country"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Country
                  </label>
                </div>
                {/* DOB Input */}
                <div className="relative  col-span-1">
                  <input
                    {...register("dob", { required: true })}
                    id="dob"
                    name="dob"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-gray-300"
                    placeholder="yyyy-mm-dd"
                  
                  />
                  {errors?.dob && (
                    <p className="text-red-600 text-sm">
                      {errors?.dob?.message}
                    </p>
                  )}
                  <label
                    htmlFor="dob"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Date of Birth
                  </label>
                </div>
                {/* Gender Input */}
                <div className="relative  col-span-1">
                  <input
                    {...register("email", { required: true })}
                    id="gender"
                    name="gender"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                    placeholder="male"
                  />
                  {errors?.gender && (
                    <p className="text-red-600 text-sm">
                      {errors?.gender?.message}
                    </p>
                  )}
                  <label
                    htmlFor="gender"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Gender
                  </label>
                </div>
                {/* postal Input */}
                <div className="relative  col-span-1">
                  <input
                    {...register("postal", { required: true })}
                    id="postal"
                    name="postal"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                    placeholder="123123"
                  />
                  {errors?.postal && (
                    <p className="text-red-600 text-sm">
                      {errors?.postal?.message}
                    </p>
                  )}
                  <label
                    htmlFor="postal"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Postal
                  </label>
                </div>
                {/* State Input */}
                <div className="relative col-span-1 ">
                  <input
                    {...register("state", { required: true })}
                    id="state"
                    name="state"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                    placeholder="Gandaki"
                    autoComplete="off"
                  />
                  {errors?.state && (
                    <p className="text-red-600 text-sm">
                      {errors?.state?.message}
                    </p>
                  )}
                  <label
                    htmlFor="state"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    State
                  </label>
                </div>

                {/* Password Input */}
                <div className="relative col-span-1">
                  <input
                    {...register("password", { required: true })}
                    id="password"
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                    placeholder="Password"
                    autoComplete="off"
                  />
                  {errors?.password && (
                    <p className="text-red-600 text-sm">
                      {errors?.password?.message}
                    </p>
                  )}
                  <label
                    htmlFor="password"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Password
                  </label>
                </div>
                <div className="relative col-span-1">
                  <input
                    {...register("password", { required: true })}
                    id="password"
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                    placeholder="Password"
                    autoComplete="off"
                  />
                  {errors?.password && (
                    <p className="text-red-600 text-sm">
                      {errors?.password?.message}
                    </p>
                  )}
                  <label
                    htmlFor="password"
                    className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                  >
                    Confirm Password
                  </label>
                </div>
                </div>
                <button
                  type="submit"
                  disabled={!isDirty || !isValid || isSubmitting}
                  className="mt-20 block w-full cursor-pointer rounded bg-rose-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-6 h-6 mr-2 text-white animate-spin fill-rose-600 opacity-100"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG for Spinner Animation */}
                      </svg>
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
