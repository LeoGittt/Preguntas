"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";

import CorazonAnimado from "@/Components/CorazonAnimado";

const preguntas = [
  {
    pregunta: "¿En qué fecha nos conocimos? (DD/MM/YYYY)",
    respuesta: "01/01/2024",
    opciones: ["01/01/2024", "14/02/2022", "25/12/2021", "10/11/2020"],
  },
  {
    pregunta: "¿Cuál es mi comida favorita?",
    respuesta: "pizza",
    opciones: ["pizza", "hamburguesa", "sushi", "tacos"],
  },
  {
    pregunta: "¿Cuál es el nombre de nuestra canción?",
    respuesta: "perfect",
    opciones: ["perfect", "shallow", "blinding lights", "thinking out loud"],
  },
  {
    pregunta: "¿En qué ciudad tuvimos nuestra primera cita?",
    respuesta: "madrid",
    opciones: ["madrid", "barcelona", "paris", "roma"],
  },
  {
    pregunta: "¿Cuál es mi película favorita?",
    respuesta: "titanic",
    opciones: ["titanic", "inception", "the dark knight", "the godfather"],
  },
  {
    pregunta: "¿Cuál es mi color favorito?",
    respuesta: "azul",
    opciones: ["azul", "rojo", "verde", "amarillo"],
  },
  {
    pregunta: "¿Cuál es el nombre de mi mejor amigo?",
    respuesta: "juan",
    opciones: ["juan", "pedro", "andrés", "luis"],
  },
  {
    pregunta: "¿Qué deporte me gusta más?",
    respuesta: "fútbol",
    opciones: ["fútbol", "baloncesto", "tenis", "natación"],
  },
  {
    pregunta: "¿Cuál es mi actor favorito?",
    respuesta: "leonardo dicaprio",
    opciones: ["leonardo dicaprio", "brad pitt", "will smith", "johnny depp"],
  },
  {
    pregunta: "¿En qué país nací?",
    respuesta: "argentina",
    opciones: ["argentina", "chile", "uruguay", "colombia"],
  },
  {
    pregunta: "¿Cuál es mi libro favorito?",
    respuesta: "cien años de soledad",
    opciones: [
      "cien años de soledad",
      "1984",
      "el gran gatsby",
      "harry potter",
    ],
  },
  {
    pregunta: "¿Qué instrumento musical toco?",
    respuesta: "guitarra",
    opciones: ["guitarra", "piano", "batería", "violín"],
  },
  {
    pregunta: "¿Cuál es mi serie favorita?",
    respuesta: "breaking bad",
    opciones: ["breaking bad", "game of thrones", "stranger things", "friends"],
  },
  {
    pregunta: "¿Qué tipo de música me gusta más?",
    respuesta: "rock",
    opciones: ["rock", "pop", "electrónica", "reggaeton"],
  },
];

export default function DesafioRomantico() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<string[]>([]);
  const [mostrarPropuesta, setMostrarPropuesta] = useState(false);
  const [respuestaPropuesta, setRespuestaPropuesta] = useState<boolean | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleRespuesta = (respuestaSeleccionada: string) => {
    if (
      respuestaSeleccionada.toLowerCase() ===
      preguntas[preguntaActual].respuesta.toLowerCase()
    ) {
      setRespuestas([...respuestas, respuestaSeleccionada]);
      setError(null);
      if (preguntaActual < preguntas.length - 1) {
        setPreguntaActual(preguntaActual + 1);
      } else {
        setMostrarPropuesta(true);
      }
    } else {
      setError("¡Ups! Esa no es la respuesta correcta. Inténtalo de nuevo.");
    }
  };

  const handlePropuesta = (respuesta: boolean) => {
    setRespuestaPropuesta(respuesta);
    if (respuesta) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.6 },
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {mostrarPropuesta
              ? "Una pregunta especial"
              : `Desafío de Amor - Pregunta ${preguntaActual + 1}`}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            {!mostrarPropuesta ? (
              <motion.div
                key={preguntaActual}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <p className="text-lg text-center font-mono font-semibold mb-6">
                  {preguntas[preguntaActual].pregunta}
                </p>
                <div className="space-y-2">
                  <div className="space-y-2 font-mono">
                    {preguntas[preguntaActual].opciones.map((opcion, index) => (
                      <Button
                        key={index}
                        onClick={() => handleRespuesta(opcion)}
                        className="w-full bg-gradient-to-r text-gray-900 from-pink-300 via-purple-300 to-indigo-400 p-4"
                      >
                        {opcion}
                      </Button>
                    ))}
                  </div>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </motion.div>
            ) : respuestaPropuesta === null ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xl text-center font-bold mb-4"
              >
                ¡Has superado el desafío! Ahora, la pregunta más importante:
                ¿Quieres ser mi novia?
              </motion.p>
            ) : (
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xl text-center font-bold mb-4"
              >
                {respuestaPropuesta
                  ? "¡Qué felicidad! Nuestro amor ha superado todas las pruebas. 💖"
                  : "Oh... Entiendo. Gracias por tu honestidad. 😢"}
              </motion.p>
            )}
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4 ">
          {!mostrarPropuesta ? (
            <Button
              className="bg-gradient-to-r text-gray-700 from-pink-300 via-purple-300 to-indigo-400 p-4"
              onClick={() => handleRespuesta("")}
            >
              Responder
            </Button>
          ) : respuestaPropuesta === null ? (
            <>
              <Button
                onClick={() => handlePropuesta(true)}
                className="bg-green-500 hover:bg-green-600"
              >
                Sí
              </Button>
              <Button
                onClick={() => handlePropuesta(false)}
                className="bg-red-500 hover:bg-red-600"
              >
                No
              </Button>
            </>
          ) : null}
        </CardFooter>
      </Card>
      {respuestaPropuesta === true && <CorazonAnimado />}
    </div>
  );
}
