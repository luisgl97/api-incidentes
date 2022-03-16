import React from "react";
import { useForm } from "react-hook-form";

export const Formulario = (props) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (fecha, e) => {
    console.log(fecha);
    props.obtenerDatos(fecha);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          
        <label className="me-2">Fecha</label>
        <input
          type="date"
          name="fecha"
          {...register("fecha", {
            required: {
              value: true,
              message: "Seleccionar la Fecha",
            },
          })}
        />
        {errors.fecha && (
          <span className="text-danger text-small d-block">
            {errors.fecha.message}
          </span>
        )}
        <button className="btn btn-warning btn-sm mt-2 ms-2 mb-2" >Obtener Datos</button>
      </form>
    </div>
  );
};
