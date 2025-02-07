import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  completeLocation: string;
};

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>React Hook Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "First Name is Required" })}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>\
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last Name is Required" })}
          />
          {errors.lastName && (
            <p style={{ color: "red" }}>{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid Email address",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is Required" })}
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            {...register("city", { required: "City is Required" })}
          />
          {errors.city && <p style={{ color: "red" }}>{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            {...register("state", { required: "State is Required" })}
          />

          {errors.state && (
            <p style={{ color: "red" }}>{errors.state.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            {...register("country", { required: "Country is Required" })}
          />

          {errors.country && (
            <p style={{ color: "red" }}>{errors.country.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            type="text"
            id="zipcode"
            {...register("zipcode", { required: "Zip Code is Required" })}
          />

          {errors.zipcode && (
            <p style={{ color: "red" }}>{errors.zipcode.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="completeLocation">Complete Location</label>
          <input
            type="text"
            id="completeLocation"
            {...register("completeLocation", {
              required: "Complete Location is Required",
            })}
          />

          {errors.completeLocation && (
            <p style={{ color: "red" }}>{errors.completeLocation.message}</p>
          )}
        </div>

        <button disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
