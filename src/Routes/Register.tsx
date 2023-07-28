import { Controller, useForm } from "react-hook-form";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
    useEffect(() => {
        localStorage.getItem("Login") === "true"? window.location.replace("/") : null;
    }, [])
  const onSubmit = (data: unknown) => {
    setLoading(true)
    fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.ok) {
            window.location.replace("/login");
        } else {
            toast.error("Register Failed", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                theme: "colored",
            });
        }
        setLoading(false);
    })
  };

  return (
    <div className="w-full py-10 justify-center flex items-center flex-grow min-h-[100vh-20rem]">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <Controller
                name="fullname"
                control={control}
                defaultValue=""
                rules={{ required: "Full name is required" }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={`input input-bordered ${
                      errors.fullname ? "input-error" : ""
                    }`}
                    {...field}
                  />
                )}
              />
              {errors.fullname && (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <p className="text-error">{errors.fullname.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Email"
                    className={`input input-bordered ${
                      errors.email ? "input-error" : ""
                    }`}
                    {...field}
                  />
                )}
              />
              {errors.email && (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <p className="text-error">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                render={({ field }) => (
                  <input
                    type="password"
                    placeholder="Password"
                    className={`input input-bordered ${
                      errors.password ? "input-error" : ""
                    }`}
                    {...field}
                  />
                )}
              />
              {errors.password && (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <p className="text-error">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
                { loading &&
                    <button type="submit" disabled className={`btn btn-primary btn-disabled`} >
                        Register
                    </button>}
                {!loading &&  <button type="submit" className={`btn btn-primary`}>
                    Register
                </button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
