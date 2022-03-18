import React from "react";
import { useForm } from "react-hook-form";

export const Login = (props) => {
  const { setToken } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    obtenerToken(data);
  };

  const obtenerToken = async (data) => {
    try {
      const res = await fetch("http://ogit.imp.gob.pe/impapi/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const token = await res.json();
      console.log(token.status);
      setToken(token.sesion.token);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="form-control my-2"
        type="email"
        name="u"
        placeholder="Ingrese email"
        {...register("u", { required: true })}
      />
      {errors.u && (
        <span className="text-danger text-small d-block">Ingrese el email</span>
      )}
      <input
        className="form-control my-2"
        type="password"
        name="p"
        placeholder="Ingrese password"
        {...register("p", { required: true })}
      />
      {errors.password && (
        <span className="text-danger text-small d-block">
          Ingrese correctamente el password
        </span>
      )}
      <button className="btn btn-primary">Login</button>
    </form>
  );
};
