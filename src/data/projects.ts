export type Project = {
  id: string;
  title: string;
  category: string;
  role: string;
  tools: string[];
  description: string;
  credit?: string;
  size: "tall" | "wide" | "standard";
  poster: string;
  previewVideo?: string;
  fullVideo?: string;
  videoAspect?: "wide" | "square" | "portrait";
};

export const projects: Project[] = [
  {
    id: "final-render",
    title: "Pixel Point: Flux 2 Explainer",
    category: "Product Explainer",
    role: "Motion design, animation, compositing — studio collaboration",
    tools: ["After Effects"],
    description:
      "A product explainer for Flux 2, shaped around cinematic pacing, layered transitions, and a polished final-grade finish.",
    credit:
      "My contribution was created in collaboration with other members of the Pixel Point studio team. All rights to the video production and design belong to Pixel Point.",
    size: "wide",
    poster: "/media/posters/projects/final-render.jpg",
    previewVideo: "/media/videos/final-render-preview.mp4",
    fullVideo: "/media/videos/final-render-full.mp4",
    videoAspect: "wide",
  },
  {
    id: "comp-4",
    title: "Scale: Cortex",
    category: "Product Explainer",
    role: "Design, animation, compositing",
    tools: ["After Effects"],
    description:
      "A product explainer for Scale Cortex, built around clear visual storytelling, controlled pacing, and a precise motion language.",
    credit:
      "My contribution was created in collaboration with the Scale team. All rights to the video production and design belong to Scale.",
    size: "wide",
    poster: "/media/posters/projects/comp-4.jpg",
    previewVideo: "/media/videos/comp-4-preview.mp4",
    fullVideo: "/media/videos/comp-4-full.mp4",
    videoAspect: "wide",
  },
  {
    id: "smart-speaker",
    title: "Smart Speaker",
    category: "3D Product Animation",
    role: "Direction, animation, lighting",
    tools: ["After Effects", "Cinema 4D"],
    description:
      "A compact launch loop built around product scale, soft reflections, and a calm camera move that makes the object feel tangible.",
    size: "wide",
    poster: "/media/posters/kima-crops/pulse.png",
    previewVideo: "/media/videos/smart-speaker.mp4",
    videoAspect: "wide",
  },
  {
    id: "keyboard",
    title: "Keyboard",
    category: "Product Animation",
    role: "3D animation, compositing",
    tools: ["After Effects", "Cinema 4D"],
    description:
      "A hardware-focused loop with macro surfaces, key travel, and rhythmic timing designed for an immediate visual impact.",
    size: "tall",
    poster: "/media/posters/kima-crops/zenith.png",
    previewVideo: "/media/videos/keyboard.mp4",
    fullVideo: "/media/videos/keyboard-full.mp4",
    videoAspect: "portrait",
  },
  {
    id: "stash",
    title: "Stash",
    category: "Brand Motion",
    role: "Motion design, adaptation",
    tools: ["After Effects", "Photoshop"],
    description:
      "A compact brand animation package with bold timing, simple staging, and enough contrast to survive small placements.",
    size: "tall",
    poster: "/media/posters/kima-crops/scarlet.png",
    previewVideo: "/media/videos/stash.mp4",
    fullVideo: "/media/videos/stash-full.mp4",
    videoAspect: "portrait",
  },
  {
    id: "ae-circle",
    title: "Shape Play",
    category: "After Effects Loop",
    role: "Animation, compositing",
    tools: ["After Effects"],
    description:
      "A clean circular motion experiment with loopable timing and simple high-contrast composition.",
    size: "tall",
    poster: "/media/posters/kima-crops/eclipse.png",
    previewVideo: "/media/videos/ae-circle.mp4",
    fullVideo: "/media/videos/ae-circle-full.mp4",
    videoAspect: "portrait",
  },
  {
    id: "camera",
    title: "CCTV",
    category: "3D Branding",
    role: "Animation, lighting, edit",
    tools: ["After Effects", "Cinema 4D"],
    description:
      "A clean product sequence focused on lens geometry, material contrast, and restrained motion for a premium hardware read.",
    size: "standard",
    poster: "/media/posters/kima-crops/nova.png",
    previewVideo: "/media/videos/camera.mp4",
    videoAspect: "square",
  },
  {
    id: "button",
    title: "Button",
    category: "Micro Product Motion",
    role: "Motion design, rendering",
    tools: ["Cinema 4D", "After Effects"],
    description:
      "A short tactile study that sells click, pressure, and surface detail through timing rather than noise.",
    size: "standard",
    poster: "/media/posters/kima-crops/ember.png",
    previewVideo: "/media/videos/button.mp4",
    videoAspect: "square",
  },
  {
    id: "blue",
    title: "Blue System",
    category: "Abstract Motion",
    role: "Look development, animation",
    tools: ["After Effects", "Cinema 4D"],
    description:
      "A visual direction pass using blue light, graphic movement, and a simple loop structure for social and web placement.",
    size: "standard",
    poster: "/media/posters/kima-crops/eclipse.png",
    previewVideo: "/media/videos/blue.mp4",
    videoAspect: "square",
  },
  {
    id: "zjglka",
    title: "Lighter",
    category: "Kinetic Study",
    role: "Design, animation",
    tools: ["After Effects", "Photoshop"],
    description:
      "A graphic motion study built around fast cuts, hard edges, and a controlled visual rhythm.",
    size: "standard",
    poster: "/media/posters/kima-crops/ember.png",
    previewVideo: "/media/videos/zjglka.mp4",
    videoAspect: "square",
  },
  {
    id: "fs",
    title: "4roll",
    category: "Motion Identity",
    role: "Direction, animation",
    tools: ["After Effects"],
    description:
      "A short identity sequence shaped for fast recognition, sharp transitions, and repeat viewing.",
    size: "tall",
    poster: "/media/posters/kima-crops/pulse.png",
    previewVideo: "/media/videos/fs.mp4",
    fullVideo: "/media/videos/fs-full.mp4",
    videoAspect: "portrait",
  },
  {
    id: "all-widgets",
    title: "Widgets",
    category: "UI Motion",
    role: "Design, animation, compositing",
    tools: ["After Effects", "Figma"],
    description:
      "A modular interface-motion study that brings a complete widget system together through precise rhythm and transitions.",
    size: "standard",
    poster: "/media/posters/projects/all-widgets.jpg",
    previewVideo: "/media/videos/all-widgets-preview.mp4",
    fullVideo: "/media/videos/all-widgets-full.mp4",
    videoAspect: "square",
  },
  {
    id: "fff",
    title: "PixPop",
    category: "Vertical Motion Film",
    role: "Design, animation, compositing",
    tools: ["After Effects"],
    description:
      "A vertical motion piece built around fast visual progression, bold composition, and a tightly controlled edit.",
    size: "tall",
    poster: "/media/posters/projects/fff.jpg",
    previewVideo: "/media/videos/fff-preview.mp4",
    fullVideo: "/media/videos/fff-full.mp4",
    videoAspect: "portrait",
  },
];
