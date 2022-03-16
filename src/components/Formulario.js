import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";

export const Formulario = (props) => {

  const [fecha, setFecha] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log("cambiaste la fecha");
  }, [fecha])
  

  const onSubmit = (fecha, e) => {
    console.log(fecha);
    props.addFecha(fecha);
  };
  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          {...register("fecha", {
            required: {
              value: true,
              message: "Date Obligatorio",
            },
          })}
        />
        {errors.fecha && (
          <span className="text-danger text-small d-block">
            {errors.fecha.message}
          </span>
        )}
        <button className="mt-2">Ok</button>
      </form>
    </div>
  );
};
