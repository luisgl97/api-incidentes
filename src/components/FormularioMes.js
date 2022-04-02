import React from "react";
import { useForm } from "react-hook-form";

export const FormularioMes = (props) => {
  const { token, setFechaMes, setIncidenciaMes } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (fechaMes, e) => {
    e.preventDefault();//evita que se recargue la pagina
    console.log(fechaMes.fecha);
    let mesAnio = fechaMes.fecha;//"2020-01";
    let arr = mesAnio.split("-");//["2020", "01"]
    let [obtenerAnio, obtenerMes] = arr;
    let diasMes = new Date(obtenerAnio, obtenerMes, 0).getDate();//31
    setFechaMes(mesAnio);
    console.log(arr);
    console.log(obtenerAnio);
    console.log(obtenerMes);
    console.log(diasMes);

    let objetoFecha = {
      fecha: "",
    };

    for (let dia = 1; dia <= diasMes; dia++) {
      let fM = `${fechaMes.fecha}-${dia}`;//"2020-01-01";
      // console.log(fM);
      objetoFecha["fecha"] = fM; // objetoFecha={ fecha:"2020-01-01" }
      // console.log(objetoFecha);
      obtenerDatos(objetoFecha);
    }
  };

  const obtenerDatos = async (fecha) => {
    
    try {
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
      const incidenciasMes = await datos.json();
      const { data } = incidenciasMes;
      setIncidenciaMes((incidenciaMes) => [...incidenciaMes, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 id="titulo_form">Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="me-2">
          <b>Fecha de Búsqueda: </b>
        </label>
        <input
          type="month"
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
        <button className="btn btn-block btn-warning btn-sm mt-3 ms-3 mb-3">
          Obtener Datos
        </button>
      </form>
    </div>
  );
};
