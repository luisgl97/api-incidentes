import React from "react";
import { useForm } from "react-hook-form";

export const Formulario = (props) => {

  const {token, setFecha, setIncidencia, setArrayObjeto} = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (fecha, e) => {
    console.log(fecha);
    obtenerDatos(fecha);
  };

  const obtenerDatos = async (fecha) => {

    try {

      setFecha(fecha);

      const datos = await fetch(
        "http://ogit.imp.gob.pe/impapi/sel_seguridad_incidente",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
          body: JSON.stringify(fecha),
        }
      );
      const incidencias = await datos.json();
      setIncidencia(incidencias);
      const {data} = incidencias;
      setArrayObjeto(data);
      
    } catch (error) {
      console.log(error);
    }
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
