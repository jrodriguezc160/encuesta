import React, { useState } from 'react';

const TablaEncuesta = () => {
  const [respuestas, setRespuestas] = useState([]);

  // Función para manejar el cambio en la respuesta
  const handleRespuestaChange = (index, valor) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[index] = valor;
    setRespuestas(nuevasRespuestas);
  };

  return (
    <div className='componenteTabla'>
      <div className="textoTabla">
        <h3 style={{ borderBottom: "4px solid #e2dfd6", borderTop: "2px solid #e2dfd6", width: '95%' }}>Encuesta de Satisfacción</h3>
        <div className='descripcion'>
          <p>El cuestionario que figura a continuación se realiza para tratar de medir su satisfacción con respecto al <b>servicio de formación</b> o <b>acción formativa</b> en la que usted participa o ha participado.</p>
          <p>Como verá se miden diferentes aspectos a los que usted debe responder marcando un número entre el 1 y el 5, siendo 1 la mínima satisfación y el 5 la máxima.</p>
          <p>Lea con atención y no dude en preguntar cualquier duda mientras realiza el cuestionario.</p>
          <p>Este cuestionario es anónimo. Las respuestas se analizan como respuestas de grupo y no como respuestas individuales.</p>
        </div>
      </div>

      <form action="" className='tableForm'>
        <table className='tablaEnc'>

          <tbody >
            <tr className='tituloApartados'>
              <td colSpan={"6"}>
                <p>1 - ORGANIZACIÓN</p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  1 - Las comunicaciones e información recibidas durante el curso han sido adecuadas
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_1' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_1' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_1' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_1' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_1' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  2 - La duración y temporización han sido apropiadas
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_2' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_2' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_2' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_2' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_2' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  3 - La guía del curso me ha resultado útil
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_3' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_3' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_3' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_3' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_3' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  4 - La localidad te parece adecuada para la realización de la actividad
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_4' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_4' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_4' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_4' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_4' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  5 - El horario de la acción formativa ha sido adecuado
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_5' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_5' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_5' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_5' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_5' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  6 - La duración de la actividad te parece correcta
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_6' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_6' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_6' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_6' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_6' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>


                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  7 - El espacio reúne las condiciones necesarias para el desarrollo de la actividad
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_7' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_7' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_7' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_7' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_7' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  8 - Los medios técnicos utilizados en el curso son adecuados
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_8' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_8' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_8' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_8' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_8' />
              </td>
            </tr>

            <tr className='tituloApartados'>
              <td colSpan={"6"}>
                <p>2 - PROCESO FORMATIVO</p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  9 - Los objetivos que tiene esta acción formativa se ha cumplido
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_9' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_9' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_9' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_9' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_9' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  10 - La actividad se ha adecuado a mis demandas de formación
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_10' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_10' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_10' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_10' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_10' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  11 - Los contenidos impartidos son aplicables directa o indirectamente a mi trabajo diario
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_11' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_11' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_11' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_11' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_11' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  12 - La metodología utilizada ha favorecido el interés y el aprendizaje
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_12' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_12' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_12' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_12' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_12' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  13 - Ha existido un buen ajuste entre los componentes teóricos y prácticos del curso
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_13' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_13' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_13' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_13' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_13' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  14 - El material didáctico utilizado es el adecuado
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_14' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_14' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_14' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_14' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_14' />
              </td>
            </tr>
            <tr className='tituloApartados'>
              <td colSpan={"6"}>
                <p>3 - GRUPO</p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  15 - La predisposición y participación de mis compañeras/os ha favorecido mi aprovechamiento de la acción formativa
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_15' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_15' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_15' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_15' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_15' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  16 - La participación y responsabilidad de los/las asistentes ha favorecido la actividad
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_16' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_16' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_16' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_16' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_16' />
              </td>
            </tr>
            <tr className='tituloApartados'>
              <td colSpan={"6"}>
                <p>4 - PROFESORADO</p>
              </td>
            </tr>
            <tr>
              <td colSpan={"6"}>
                <h3>MARIA MONTAÑA PAREDES PEREZ</h3>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  17 - Conocimiento
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_17' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_17' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_17' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_17' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_17' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>


            <tr>
              <td>
                <p className='pregunta'>
                  18 - Motiva y despierta su Interés
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_18' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_18' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_18' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_18' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_18' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  19 - Rápidez en las respuestas
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_19' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_19' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_19' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_19' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_19' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  20 - Claridad Expositiva
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_20' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_20' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_20' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_20' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_20' />
              </td>
            </tr>
            <tr>
              <td colSpan={"6"}>
                <h3>JOSE CARLOS RODRIGUEZ ALONSO</h3>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  21 - Conocimiento
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_21' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_21' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_21' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_21' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_21' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  22 - Motiva y despierta su Interés
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_22' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_22' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_22' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_22' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_22' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  23 - Rápidez en las respuestas
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_23' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_23' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_23' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_23' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_23' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  24 - Claridad Expositiva
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_24' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_24' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_24' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_24' />
              </td>
              <td>
                <input type="radio" value={"5"} name='respuesta_24' />
              </td>
            </tr>
            <tr>
              <td colSpan={"6"}>
                <h3>RAQUEL BRINGAS GONZALEZ</h3>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  25 - Conocimiento
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_25' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_25' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_25' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_25' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_25' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  26 - Motiva y despierta su Interés
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_26' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_26' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_26' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_26' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_26' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  27 - Rápidez en las respuestas
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_27' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_27' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_27' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_27' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_27' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>


              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  28 - Claridad Expositiva
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_28' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_28' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_28' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_28' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_28' />
              </td>
            </tr>
            <tr>
              <td colSpan={"6"}>
                <h3>ANA BELEN RAMOS MAQUEDA</h3>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  29 - Conocimiento
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_29' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_29' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_29' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_29' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_29' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  30 - Motiva y despierta su Interés
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_30' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_30' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_30' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_30' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_30' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>


              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  31 - Rápidez en las respuestas
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_31' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_31' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_31' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_31' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_31' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  32 - Claridad Expositiva
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_32' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_32' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_32' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_32' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_32' />
              </td>
            </tr>
            <tr className='tituloApartados'>
              <td colSpan={"6"}>
                <p>5 - CONOCIMIENTOS ADQUIRIDOS</p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  33 - En qué medida son aplicables en tú trabajo los conocimientos adquiridos
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_33' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_33' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_33' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_33' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_33' />
              </td>
            </tr>
            <tr className='tituloApartados'>
              <td colSpan={"6"}>
                <p>6 - PLATAFORMA</p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>


              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  34 - Te ha sido útil el manual básico del usuari@ (sobre el uso de la plataforma)?
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_34' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_34' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_34' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_34' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_34' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  35 - La navegación de la plataforma es fácil e intuitiva
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_35' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_35' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_35' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_35' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_35' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  36 - El acceso a pantallas es rápido y ágil
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_36' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_36' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_36' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_36' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_36' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  37 - He tenido problemas técnicos de navegación importantes
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_37' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_37' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_37' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_37' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_37' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  38 - La administración de la plataforma ha resuelto las incidencias técnicas, de forma rápida
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_38' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_38' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_38' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_38' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_38' />
              </td>
            </tr>
            <tr className='tituloApartados'>
              <td colSpan={"6"}>
                <p>7 - UTILIDAD DE HERRAMIENTAS</p>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  39 - Los foros
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_39' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_39' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_39' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_39' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_39' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  40 - Tablón de anuncios
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_40' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_40' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_40' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_40' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_40' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  41 - El calendario personal y del curso
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_41' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_41' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_41' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_41' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_41' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  42 - Los documentos de 1 referencia
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_42' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_42' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_42' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_42' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_42' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  43 - Listado de Participantes
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_43' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_43' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_43' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_43' />
              </td>
              <td>
                <input type="radio" value={"5"} name='respuesta_43' />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className='numero'>
                <span>1</span>
              </td>
              <td className='numero'>
                <span>2</span>
              </td>
              <td className='numero'>
                <span>3</span>
              </td>
              <td className='numero'>
                <span>4</span>
              </td>
              <td className='numero'>
                <span>5</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className='pregunta'>
                  44 - La mensajería interna
                </p>
              </td>
              <td className='inputDate'>
                <input type="radio" value={"1"} name='respuesta_44' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"2"} name='respuesta_44' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"3"} name='respuesta_44' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"4"} name='respuesta_44' />
              </td>
              <td className='inputDate'>
                <input type="radio" value={"5"} name='respuesta_44' />
              </td>
            </tr>
            <tr className='tituloApartados'>
              <td colSpan={"6"}>
                <p>8 - MEJORÍAS</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>45 -En resumen, ¿qué mejoraría de esta acción formativa?</p>
              </td>
              <td colSpan={"5"}>
                <textarea name="mejorias" id="" cols="17" rows="7"></textarea>
              </td>
            </tr>
            <tr className='tituloApartados'>
              <td colSpan={"6"}>
                <p>9 - OBSERVACIONES</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>46 -Por último, Además de esta acción o una edición más avanzada, qué acciones formativas sugiere para futuros planes y qué otras observaciones haría</p>
              </td>
              <td colSpan={"5"} className='textareaDate'>
                <textarea name="" id="" cols="17" rows="5"></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <p>Acepta publicar sus datos personales dentro de la evaluación:</p>
              </td>
              <td colSpan={"5"}>
                <select name="publico" id="">
                  <option value="Si">Sí</option>
                  <option value="No">No</option>
                </select>
              </td>
            </tr>
            <tr>
              <input type="submit" value={"Enviar"} />
            </tr>
            {/* Puedes agregar más preguntas siguiendo la misma estructura */}
          </tbody>
        </table>
      </form>
      <div style={{ height: '30px' }}>

      </div>
    </div>
  );
};

export default TablaEncuesta;