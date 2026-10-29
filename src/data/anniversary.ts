import heroImage from "../assets/images/anniversary/playa-amor.png";
import memoryOneImage from "../assets/images/anniversary/juntos.png";
import memoryTwoImage from "../assets/images/anniversary/pareja.png";
import futureImage from "../assets/images/anniversary/playa-amor-juntos.png";
import type { AnniversaryContent } from "../types/anniversary";

const relationshipStart = "30 DE OCTUBRE DEL 2025";
const anniversaryDate = "30 DE OCTUBRE DEL 2026";

export const anniversaryContent = {
  couple: {
    firstName: "Diego",
    secondName: "Marily",
    relationshipStart,
    anniversaryDate,
  },
  images: {
    hero: {
      src: heroImage,
      alt: "Diego y Marily juntos frente al mar.",
      displayMode: "portrait",
      focalPoint: { mobile: "50% 42%", desktop: "100% 50%" },
    },
    memoryOne: {
      src: memoryOneImage,
      alt: "Dos personas entrelazan sus manos en un gesto cercano.",
      focalPoint: { mobile: "48% 50%", desktop: "50% 48%" },
    },
    memoryTwo: {
      src: memoryTwoImage,
      alt: "Una pareja comparte un momento alegre tomándose de las manos.",
      focalPoint: { mobile: "50% 48%", desktop: "50% 50%" },
    },
    future: {
      src: futureImage,
      alt: "Una pareja camina junta hacia el mar al caer el sol.",
      focalPoint: { mobile: "50% 46%", desktop: "50% 48%" },
    },
  },
  scenes: [
    {
      type: "cover",
      id: "intro",
      announcement: "Portada",
      label: "DIEGO & MARILY",
      title: "Un año, una historia que seguimos eligiendo.",
      body: "Hoy quiero detener el tiempo por un momento y recordar todos los bonitos momentos que pasamos juntos mi amor.",
      date: `${relationshipStart} — ${anniversaryDate}`,
      action: "Comenzar nuestra historia",
      imageKey: "hero",
    },
    {
      type: "editorial",
      id: "beginning",
      announcement: "El comienzo",
      label: "CAPÍTULO I · EL COMIENZO",
      title: "Sin saberlo, aquel día empezó algo muy especial.",
      body: "Cada que recuerdo la forma de cómo te conocí me saca una sonrisa, sin imaginar que llegarías a ser muy especial para mí. Desde entonces, cada conversación, cada sonrisa y cada momento compartido fue dando forma a nuestra historia de amor.",
      quote: "Y así, casi sin darnos cuenta, comenzamos a caminar juntos.",
      imageKey: "hero",
      variant: "beginning",
    },
    {
      type: "memories",
      id: "memories",
      announcement: "Los recuerdos",
      label: "CAPÍTULO II · LO QUE HEMOS VIVIDO",
      title: "Hay momentos que terminan convirtiéndose inolvidables.",
      body: "Durante el año compartimos poco por la distancia que nos encontramos, pero esos momentos que estamos juntos queda en los recuerdos mas maravillosos. También son las conversaciones largas, las risas y esos instantes sencillos que contigo se vuelven inolvidables mi amor.",
      imageKeys: ["memoryOne", "memoryTwo"],
      captions: [
        "Los días especiales que siempre recordaremos.",
        "Y los días sencillos que aprendimos a disfrutar juntos.",
      ],
      quote:
        "Si pudiera guardar algo para siempre, sería la forma en que se siente compartir la vida contigo.",
    },
    {
      type: "reasons",
      id: "reasons",
      announcement: "Doce meses",
      number: "12",
      title: "meses encontrando nuevas razones para elegirte.",
      instruction: "Toca el corazón para descubrir una razón.",
    },
    {
      type: "editorial",
      id: "future",
      announcement: "Lo que viene",
      label: "CAPÍTULO III · LO QUE VIENE",
      title: "Lo más bonito de nuestra historia es que todavía la estamos escribiendo.",
      body: "No sé exactamente qué caminos nos esperan, pero sí sé que quiero seguir compartiendo contigo nuevos lugares, aprendizajes, sueños y muchos momentos que todavía no tienen fotografía mi amor.",
      quote: "Que nunca nos falten motivos para mirar hacia adelante, juntos.",
      imageKey: "future",
      variant: "future",
    },
    {
      type: "finale",
      id: "finale",
      announcement: "Dedicatoria final",
      title: "Marily,",
      paragraphs: [
        "Gracias por este año, por cada recuerdo y por todo lo que hemos aprendido juntos. Gracias por estar presente en los días felices y por permanecer también cuando el camino no fue tan sencillo mi amor.",
        "Hoy no quiero celebrar solamente el tiempo que ha pasado. Quiero celebrar la historia que estamos construido y la posibilidad de seguir creando nuevos recuerdos a tu lado mi amor.",
      ],
      closing: "Feliz primer aniversario. Te amo mucho mi amor.",
      signature: "Diego",
      action: "Volver al inicio",
      imageKey: "hero",
    },
  ],
  reasons: [
    "Porque contigo puedo ser yo mismo.",
    "Porque haces especiales incluso los días más sencillos.",
    "Porque tu sonrisa siempre consigue alegrarme.",
    "Porque me escuchas y tratas de comprenderme.",
    "Porque me inspiras a seguir mejorando.",
    "Porque hemos sabido superar los días difíciles.",
    "Porque cada abrazo tuyo me hace sentir tranquilidad",
    "Porque contigo puedo hablar durante horas",
    "Porque tu forma de querer se siente sincera.",
    "Porque me das tranquilidad cuando más la necesito.",
    "Porque juntos formamos un buen equipo.",
    "Porque siempre encontramos una razón para reír.",
  ],
} satisfies AnniversaryContent;

const sceneIds = anniversaryContent.scenes.map(({ id }) => id);
if (new Set(sceneIds).size !== sceneIds.length) {
  throw new Error("Cada escena debe tener un identificador único.");
}
