export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  tools: string[];
  description: string;
  size: "tall" | "wide" | "standard";
  poster: string;
  previewVideo?: string;
  fullVideo?: string;
  videoAspect?: "wide" | "square" | "portrait";
};

export const projects: Project[] = [
  {
    id: "final-render",
    title: "Final Render",
    category: "Motion Film",
    year: "2026",
    role: "Motion design, animation, compositing",
    tools: ["After Effects"],
    description:
      "A cinematic motion piece shaped around dramatic pacing, layered transitions, and a polished final-grade finish.",
    size: "wide",
    poster: "/media/posters/projects/final-render.jpg",
    previewVideo: "/media/videos/final-render-preview.mp4",
    fullVideo: "/media/videos/final-render-full.mp4",
    videoAspect: "wide",
  },
  {
    id: "comp-4",
    title: "Comp 4",
    category: "Motion Study",
    year: "2026",
    role: "Design, animation, compositing",
    tools: ["After Effects"],
    description:
      "An extended motion study exploring composition, rhythm, and visual progression across a widescreen sequence.",
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
    year: "2025",
    role: "Direction, animation, lighting",
    tools: ["After Effects", "Cinema 4D"],
    description:
      "A compact launch loop built around product scale, soft reflections, and a calm camera move that makes the object feel tangible.",
    size: "tall",
    poster: "/media/posters/kima-crops/pulse.png",
    previewVideo: "/media/videos/smart-speaker.mp4",
  },
  {
    id: "keyboard",
    title: "Keyboard",
    category: "Product Animation",
    year: "2023",
    role: "3D animation, compositing",
    tools: ["After Effects", "Cinema 4D"],
    description:
      "A hardware-focused loop with macro surfaces, key travel, and rhythmic timing designed for a first-scroll portfolio hit.",
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
    year: "2023",
    role: "Motion design, adaptation",
    tools: ["After Effects", "Photoshop"],
    description:
      "A compact brand animation package with bold timing, simple staging, and enough contrast to survive small placements.",
    size: "standard",
    poster: "/media/posters/kima-crops/scarlet.png",
    previewVideo: "/media/videos/stash.mp4",
    fullVideo: "/media/videos/stash-full.mp4",
    videoAspect: "portrait",
  },
  {
    id: "ae-circle",
    title: "AE Circle",
    category: "After Effects Loop",
    year: "2022",
    role: "Animation, compositing",
    tools: ["After Effects"],
    description:
      "A clean circular motion experiment with loopable timing and simple high-contrast composition.",
    size: "standard",
    poster: "/media/posters/kima-crops/eclipse.png",
    previewVideo: "/media/videos/ae-circle.mp4",
    fullVideo: "/media/videos/ae-circle-full.mp4",
    videoAspect: "portrait",
  },
  {
    id: "camera",
    title: "Camera",
    category: "Product Film",
    year: "2025",
    role: "Animation, lighting, edit",
    tools: ["After Effects", "Cinema 4D"],
    description:
      "A clean product sequence focused on lens geometry, material contrast, and restrained motion for a premium hardware read.",
    size: "standard",
    poster: "/media/posters/kima-crops/nova.png",
    previewVideo: "/media/videos/camera.mp4",
  },
  {
    id: "button",
    title: "Button",
    category: "Micro Product Motion",
    year: "2024",
    role: "Motion design, rendering",
    tools: ["Cinema 4D", "After Effects"],
    description:
      "A short tactile study that sells click, pressure, and surface detail through timing rather than noise.",
    size: "wide",
    poster: "/media/posters/kima-crops/ember.png",
    previewVideo: "/media/videos/button.mp4",
  },
  {
    id: "blue",
    title: "Blue System",
    category: "Abstract Motion",
    year: "2024",
    role: "Look development, animation",
    tools: ["After Effects", "Cinema 4D"],
    description:
      "A visual direction pass using blue light, graphic movement, and a simple loop structure for social and web placement.",
    size: "standard",
    poster: "/media/posters/kima-crops/eclipse.png",
    previewVideo: "/media/videos/blue.mp4",
  },
  {
    id: "zjglka",
    title: "ZJGLKA",
    category: "Kinetic Study",
    year: "2023",
    role: "Design, animation",
    tools: ["After Effects", "Photoshop"],
    description:
      "A graphic motion study built around fast cuts, hard edges, and a controlled visual rhythm.",
    size: "wide",
    poster: "/media/posters/kima-crops/ember.png",
    previewVideo: "/media/videos/zjglka.mp4",
  },
  {
    id: "fs",
    title: "FS",
    category: "Motion Identity",
    year: "2022",
    role: "Direction, animation",
    tools: ["After Effects"],
    description:
      "A short identity sequence shaped for fast recognition, sharp transitions, and repeat viewing.",
    size: "wide",
    poster: "/media/posters/kima-crops/pulse.png",
    previewVideo: "/media/videos/fs.mp4",
    fullVideo: "/media/videos/fs-full.mp4",
    videoAspect: "portrait",
  },
  {
    id: "all-widgets",
    title: "All Widgets",
    category: "UI Motion",
    year: "2026",
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
    title: "FFF",
    category: "Vertical Motion Film",
    year: "2025",
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
