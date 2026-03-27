const ensurePublicAsset = (label: string, value: string) => {
  if (!value.startsWith("/")) {
    throw new Error(`${label} must start with "/".`);
  }

  return value;
};

const ensureDate = (label: string, value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) {
    throw new Error(`Invalid date for ${label}: ${value}`);
  }

  return date;
};

export interface ContentSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Photo {
  slug: string;
  title: string;
  image: string;
  alt: string;
  featured: boolean;
  collection: string;
  year: number;
  location: string;
  tags: string[];
  camera?: string;
  lens?: string;
  blurb: string;
  note: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  featured: boolean;
  kind: "case-study" | "external-link";
  status: string;
  stack: string[];
  hero: string;
  href?: string;
  repo?: string;
  relatedPosts: string[];
  relatedPhotos: string[];
  body: ContentSection[];
}

export interface Post {
  slug: string;
  title: string;
  summary: string;
  publishDate: Date;
  hero: string;
  topic: string;
  relatedProject?: string;
  relatedPhotos: string[];
  draft: boolean;
  body: ContentSection[];
}

export const photos: Photo[] = [
  {
    slug: "meadow-daisies",
    title: "Meadow Daisies",
    image: ensurePublicAsset("meadow-daisies image", "/gallery-images/IMG_3394.jpg"),
    alt: "Wild daisies scattered across bright green grass in afternoon light.",
    featured: true,
    collection: "Spring Studies",
    year: 2025,
    location: "Waterloo, Ontario",
    tags: ["nature", "spring", "texture"],
    blurb: "A simple field study that feels more like memory than documentation.",
    note: "A frame about noticing small repetition before it becomes background noise.",
  },
  {
    slug: "blossom-walk",
    title: "Blossom Walk",
    image: ensurePublicAsset("blossom-walk image", "/gallery-images/IMG_3399.jpg"),
    alt: "Two people walking under blooming trees along a bright city path.",
    featured: true,
    collection: "Spring Studies",
    year: 2025,
    location: "Vancouver, British Columbia",
    tags: ["street", "spring", "candid"],
    blurb: "Soft focus and blooming branches turn an ordinary path into a scene.",
    note: "A reminder that a city can briefly feel staged when the trees decide to help.",
  },
  {
    slug: "weekend-dog-park",
    title: "Weekend Dog Park",
    image: ensurePublicAsset("weekend-dog-park image", "/gallery-images/IMG_4449.jpg"),
    alt: "People standing with small dogs on a grassy field near trees and a shed.",
    featured: false,
    collection: "Quiet Weekends",
    year: 2025,
    location: "Vancouver, British Columbia",
    tags: ["neighborhood", "candid", "lifestyle"],
    blurb: "A washed, almost dreamy frame from the kind of slow afternoon that never announces itself.",
    note: "The mood matters more than strict sharpness here, which is part of why I kept it.",
  },
  {
    slug: "red-brick-clocktower",
    title: "Red Brick Clocktower",
    image: ensurePublicAsset("red-brick-clocktower image", "/gallery-images/IMG_6003.jpg"),
    alt: "A red brick clocktower rising above fresh spring trees against a pale blue sky.",
    featured: true,
    collection: "City Fragments",
    year: 2025,
    location: "Spokane, Washington",
    tags: ["architecture", "skyline", "color"],
    blurb: "A bold architectural anchor framed by branches and clean sky.",
    note: "This image is one of the clearest examples of my color instincts showing up in architecture.",
  },
  {
    slug: "orchard-light",
    title: "Orchard Light",
    image: ensurePublicAsset("orchard-light image", "/gallery-images/IMG_6005.jpg"),
    alt: "White blossoms clustered on branches against an open blue sky.",
    featured: true,
    collection: "Spring Studies",
    year: 2025,
    location: "Vancouver, British Columbia",
    tags: ["blossoms", "close-up", "spring"],
    blurb: "Backlit blossoms that hold detail without losing the softness that made me stop.",
    note: "I keep coming back to images like this because they force restraint instead of spectacle.",
  },
  {
    slug: "garden-visitor",
    title: "Garden Visitor",
    image: ensurePublicAsset("garden-visitor image", "/gallery-images/IMG_6098-Enhanced-NR.jpg"),
    alt: "A raccoon standing on a lawn beside a flower bed in a backyard garden.",
    featured: true,
    collection: "Backyard Encounters",
    year: 2025,
    location: "Vancouver, British Columbia",
    tags: ["wildlife", "backyard", "observation"],
    blurb: "An alert visitor caught between curiosity and the idea that it should probably keep moving.",
    note: "The tension in this frame comes from both sides noticing each other at once.",
  },
  {
    slug: "peeking-cat",
    title: "Peeking Cat",
    image: ensurePublicAsset("peeking-cat image", "/gallery-images/IMG_6118.jpg"),
    alt: "A tabby cat peeking around furniture with one paw visible in the foreground.",
    featured: true,
    collection: "Backyard Encounters",
    year: 2025,
    location: "Vancouver, British Columbia",
    tags: ["animals", "portrait", "domestic"],
    blurb: "A close portrait built on eye contact, soft depth of field, and one suspicious paw.",
    note: "Animal portraits only work for me when the attitude arrives before the technical perfection.",
  },
  {
    slug: "neon-corridor",
    title: "Neon Corridor",
    image: ensurePublicAsset("neon-corridor image", "/gallery-images/IMG_6121.jpg"),
    alt: "Silhouetted people walking through a dim corridor with a red neon reflection on the floor.",
    featured: true,
    collection: "Night Interiors",
    year: 2025,
    location: "Vancouver, British Columbia",
    tags: ["low-light", "urban", "interior"],
    blurb: "A darker frame where silhouettes and reflected red light do the storytelling.",
    note: "This is the kind of image that makes me think about rhythm first and subject second.",
  },
];

export const projects: Project[] = [
  {
    slug: "photography-portfolio-website",
    title: "Photography Portfolio Website",
    summary:
      "Built image.sunnygong.com as a full-stack photography platform with searchable galleries, admin tooling, and an AI-assisted curation workflow that makes the archive easier to manage.",
    featured: true,
    kind: "case-study",
    status: "In progress",
    stack: ["Next.js", "TypeScript", "Node.js", "SQLite", "Immich API", "Docker"],
    hero: ensurePublicAsset("photography-portfolio-website hero", "/images/LandscapeThumbnail.jpg"),
    relatedPosts: [],
    relatedPhotos: ["meadow-daisies", "orchard-light", "garden-visitor", "peeking-cat"],
    body: [
      {
        title: "Platform overview",
        paragraphs: [
          "This project started when the old gallery setup stopped matching the scale of the photo work. I wanted something that could feel like a real archive instead of a folder of uploads wearing a theme.",
          "The result is a photography platform with searchable collections, metadata-aware publishing, and a cleaner path from raw imports to a public-facing gallery.",
        ],
      },
      {
        title: "What I built",
        paragraphs: [
          "The deeper work lives behind the gallery pages. A Node and SQLite backend handles metadata and visibility state, while the admin side keeps publishing and curation from turning into repetitive manual cleanup.",
        ],
        bullets: [
          "searchable galleries with structured metadata and collection views",
          "admin tooling for visibility, captions, and archive management",
          "an AI-assisted curation flow for sorting large photo imports before they go public",
        ],
      },
    ],
  },
  {
    slug: "yoinker-personal-cloud-media-platform",
    title: "Yoinker Personal Cloud Media Platform",
    summary:
      "A self-hosted media platform for importing, organizing, and streaming a private library, with ingestion jobs, metadata editing, playlists, and radio-style playback.",
    featured: true,
    kind: "case-study",
    status: "Active build",
    stack: ["React", "FastAPI", "PostgreSQL", "yt-dlp", "FFmpeg", "Docker"],
    hero: ensurePublicAsset("yoinker-personal-cloud-media-platform hero", "/images/hero1.jpg"),
    relatedPosts: [],
    relatedPhotos: ["neon-corridor", "peeking-cat"],
    body: [
      {
        title: "Why I built it",
        paragraphs: [
          "Yoinker came out of wanting one place to pull media into, clean it up, and play it back without depending on half a dozen disconnected tools.",
          "The project became a much larger systems exercise once ingestion, metadata, streaming, and user-facing controls all had to feel like part of the same product.",
        ],
      },
      {
        title: "System design",
        paragraphs: [
          "The backend coordinates ingestion jobs, media processing, and stream delivery while the frontend keeps the library usable enough to browse like an actual product instead of a debugging console.",
        ],
        bullets: [
          "FastAPI endpoints for authenticated ingest, metadata edits, and playlists",
          "yt-dlp and FFmpeg workers for imports, transcoding, and HLS-friendly outputs",
          "Docker Compose deployment with PostgreSQL and a streaming-ready media pipeline",
        ],
      },
    ],
  },
  {
    slug: "gigapixel-viewer",
    title: "Gigapixel Photography Platform",
    summary:
      "Built a deep-zoom platform for 140+ ultra-high-resolution photographs, with tile generation, keyboard navigation, downloads, and a desktop publishing tool for new images.",
    featured: true,
    kind: "case-study",
    status: "Actively expanding",
    stack: ["JavaScript", "OpenSeadragon", "Python", "Tkinter", "pyvips"],
    hero: ensurePublicAsset("gigapixel-viewer hero", "/images/LandscapeThumbnail.jpg"),
    relatedPosts: ["planning-a-viewer-for-the-really-big-images"],
    relatedPhotos: ["meadow-daisies", "red-brick-clocktower"],
    body: [
      {
        title: "What it does",
        paragraphs: [
          "Once a photograph carries more detail than a normal web page can show, most gallery interfaces stop helping. This platform was built to keep that detail accessible instead of flattening everything into thumbnails.",
          "It supports deep zoom, rotation, keyboard navigation, downloads, and the publishing workflow needed to keep a growing collection manageable.",
        ],
      },
      {
        title: "Publishing pipeline",
        paragraphs: [
          "The viewer is backed by a Python and pyvips tile pipeline that generates Deep Zoom assets, thumbnails, and metadata. I also built a small Tkinter desktop tool to batch new images into the site without repeating the same setup steps by hand.",
        ],
      },
    ],
  },
  {
    slug: "nas-cloud-drive",
    title: "Personal Cloud Storage Platform",
    summary:
      "Turned a NAS into a dependable personal cloud for photo libraries, backups, and large project files, with tuned storage workflows, secure remote access, and multi-terabyte indexing.",
    featured: true,
    kind: "case-study",
    status: "Running",
    stack: ["Go", "NAS", "Docker", "Nginx", "HTTPS"],
    hero: ensurePublicAsset("nas-cloud-drive hero", "/images/hero1.jpg"),
    relatedPosts: ["documenting-infrastructure-without-overexposing-it"],
    relatedPhotos: ["neon-corridor"],
    body: [
      {
        title: "Why it matters",
        paragraphs: [
          "Creative work falls apart quickly when storage is unreliable, inaccessible, or scattered across too many services. I wanted something that behaved like a personal cloud without giving up control over the underlying system.",
          "This platform became the backbone for large photo libraries, working files, and backups that need to stay reachable from more than one machine.",
        ],
      },
      {
        title: "What I changed",
        paragraphs: [
          "I customized a Go-based file browser deployment and wrapped it in a storage setup that behaves well with large directories and long-lived media archives.",
        ],
        bullets: [
          "Docker volume mapping tuned for NAS-backed storage and predictable file access",
          "automated indexing and cleaner handling for multi-terabyte directories",
          "token-based authentication behind an Nginx reverse proxy with HTTPS",
        ],
      },
    ],
  },
  {
    slug: "toyota-software-innovation-challenge",
    title: "Toyota Software Innovation Challenge",
    summary:
      "Built ROS2 autonomy and simulation improvements for Toyota's challenge environment and helped deliver a second-place solution with faster startup and better obstacle detection.",
    featured: true,
    kind: "case-study",
    status: "2nd place finish",
    stack: ["ROS2", "Python", "Gazebo", "Docker", "Sensor fusion"],
    hero: ensurePublicAsset("toyota-software-innovation-challenge hero", "/images/CityviewThumbnail.jpg"),
    relatedPosts: [],
    relatedPhotos: ["red-brick-clocktower"],
    body: [
      {
        title: "Competition context",
        paragraphs: [
          "This project came from working inside a constrained robotics challenge environment where every improvement had to show up clearly in simulation and system behavior.",
          "The work focused on making the autonomy stack more trustworthy instead of just layering on more features.",
        ],
      },
      {
        title: "What improved",
        paragraphs: [
          "I refined ROS2 sensor fusion nodes and the supporting simulation workflow so the system could react faster and waste less time getting to a usable run state.",
        ],
        bullets: [
          "obstacle detection accuracy improved by roughly thirty percent",
          "multi-stage Docker builds reduced simulation startup time by about forty percent",
          "the final system placed second in the challenge",
        ],
      },
    ],
  },
  {
    slug: "automated-circular-polarizer-lens-system",
    title: "Automated Circular Polarizer Lens System",
    summary:
      "A computer-vision-driven lens rig that rotates a circular polarizer automatically, improving image contrast while cutting manual setup and calibration time.",
    featured: true,
    kind: "case-study",
    status: "Prototype completed",
    stack: ["Python", "OpenCV", "Stepper motors", "3D printing"],
    hero: ensurePublicAsset("automated-circular-polarizer-lens-system hero", "/images/PortraitThumbnail.jpg"),
    relatedPosts: [],
    relatedPhotos: ["orchard-light", "garden-visitor"],
    body: [
      {
        title: "What it solves",
        paragraphs: [
          "Manually tuning a circular polarizer can take too long when lighting changes quickly. I wanted a system that could read the scene, move the lens, and get to a strong setting without the usual trial and error.",
          "That made the project part optics, part embedded control, and part computer vision calibration.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "The control pipeline uses contour detection and thresholding to measure the scene, then maps ambient light conditions to motor positions through a regression model.",
        ],
        bullets: [
          "image contrast improved by roughly eighty percent in testing",
          "3D-printed mounts and embedded routines kept rotation within about plus or minus one degree",
          "automating the adjustment process cut setup time by about seventy percent",
        ],
      },
    ],
  },
  {
    slug: "editorial-portfolio-rebuild",
    title: "Editorial Portfolio Rebuild",
    summary:
      "Turned an older personal site into a content-driven portfolio that can showcase photography, projects, and writing without feeling stitched together.",
    featured: false,
    kind: "case-study",
    status: "Shipped",
    stack: ["Astro", "Typed local data", "Responsive CSS", "Static deployment"],
    hero: ensurePublicAsset("editorial-portfolio-rebuild hero", "/images/hero.jpg"),
    relatedPosts: ["rebuilding-the-site-around-the-work"],
    relatedPhotos: ["blossom-walk", "red-brick-clocktower", "neon-corridor"],
    body: [
      {
        title: "What changed",
        paragraphs: [
          "The original site already had energy, but it was trapped in placeholder copy, repeated page markup, and interactions that asked for attention before the work had earned it.",
          "This rebuild turns the site into a resume-ready front page that can point to other project sites while still feeling like one coherent body of work.",
        ],
      },
      {
        title: "Why the rebuild matters",
        paragraphs: [
          "The site needed to help recruiters, collaborators, and academic contacts understand what I actually build, not just that I can style a page.",
        ],
        bullets: [
          "featured project pages that explain the thinking behind the work",
          "a faster image pipeline with generated thumbnails",
          "a cleaner structure for adding future projects and posts",
        ],
      },
    ],
  },
  {
    slug: "curated-photo-archive",
    title: "Curated Photo Archive",
    summary:
      "Reframed the gallery from a fake filter interface into a calmer archive built around sequencing, captions, and the images that actually deserve to stay in front of people.",
    featured: false,
    kind: "case-study",
    status: "In progress",
    stack: ["Editorial sequencing", "Typed content", "Metadata planning"],
    hero: ensurePublicAsset("curated-photo-archive hero", "/images/LandscapeThumbnail.jpg"),
    relatedPosts: ["designing-an-archive-that-reads-like-a-zine"],
    relatedPhotos: ["meadow-daisies", "orchard-light", "garden-visitor", "peeking-cat"],
    body: [
      {
        title: "Intent",
        paragraphs: [
          "I do not want the photo section to feel like a stock gallery template. The archive is supposed to read more like a small publication with a clear point of view.",
        ],
      },
      {
        title: "Key decisions",
        paragraphs: [
          "The biggest change was replacing fake controls with real curation. Instead of pretending the work can be sliced infinitely, the site groups images into small collections that already say something about how I shoot.",
        ],
        bullets: [
          "fewer images per view",
          "captions that explain why a frame matters",
          "metadata that helps without overwhelming the viewer",
        ],
      },
    ],
  },
  {
    slug: "gallery-data-prototype",
    title: "Gallery Data Prototype",
    summary:
      "A small Express and SQLite experiment that taught me what I actually wanted from the gallery before moving to a cleaner archive and portfolio structure.",
    featured: false,
    kind: "case-study",
    status: "Archived learning project",
    stack: ["Express", "SQLite", "Node.js"],
    hero: ensurePublicAsset("gallery-data-prototype hero", "/images/CityviewThumbnail.jpg"),
    relatedPosts: ["what-the-gallery-prototype-got-right"],
    relatedPhotos: ["red-brick-clocktower"],
    body: [
      {
        title: "Why it existed",
        paragraphs: [
          "The first gallery backend was useful because it forced me to think about image metadata, duplicate handling, and the shape of future filtering.",
          "It was the right experiment for an earlier version of the problem even though it was not the final answer.",
        ],
      },
      {
        title: "What survived",
        paragraphs: [
          "The current site still carries forward the lessons from that prototype, especially around content relationships and validation.",
        ],
      },
    ],
  },
  {
    slug: "rv32i-instruction-set-emulator",
    title: "RV32I Instruction Set Emulator",
    summary:
      "A lightweight RISC-V emulator in C with a fetch-decode-execute pipeline, simulated memory, and hand-assembled instruction tests for validating core CPU behavior.",
    featured: false,
    kind: "case-study",
    status: "Completed",
    stack: ["C", "Computer architecture", "Bitwise logic"],
    hero: ensurePublicAsset("rv32i-instruction-set-emulator hero", "/images/CityviewThumbnail.jpg"),
    relatedPosts: [],
    relatedPhotos: ["red-brick-clocktower"],
    body: [
      {
        title: "Architecture focus",
        paragraphs: [
          "This project was a good forcing function for understanding CPU behavior at a level where every register update and bitwise operation has to make sense.",
          "I built the emulator around a simple RV32I instruction subset with 1 KB of simulated memory and 32 registers.",
        ],
      },
      {
        title: "How I validated it",
        paragraphs: [
          "Instead of hiding behind tooling, I wrote and tested against hand-assembled machine code so the ALU and execution flow could be checked directly.",
        ],
      },
    ],
  },
  {
    slug: "fruit-ripeness-detector",
    title: "Fruit Ripeness Detector",
    summary:
      "A real-time fruit classification project on STM32 using a color sensor, custom I2C drivers, and calibrated thresholds that reached roughly ninety-two percent accuracy.",
    featured: false,
    kind: "case-study",
    status: "Completed",
    stack: ["Embedded C", "STM32 HAL", "I2C", "TCS34725"],
    hero: ensurePublicAsset("fruit-ripeness-detector hero", "/images/AnimalsThumbnail.jpg"),
    relatedPosts: [],
    relatedPhotos: ["garden-visitor"],
    body: [
      {
        title: "Embedded systems work",
        paragraphs: [
          "The detector reads color data from a TCS34725 sensor and classifies fruit ripeness directly on an STM32 target, which made the project a mix of low-level drivers, calibration, and noisy real-world data.",
        ],
      },
      {
        title: "What shipped",
        paragraphs: [
          "I wrote the I2C communication layer, tuned the calibration flow, and tied the final classification state to GPIO-driven status LEDs so the result stayed easy to read on-device.",
        ],
      },
    ],
  },
];

export const posts: Post[] = [
  {
    slug: "rebuilding-the-site-around-the-work",
    title: "Rebuilding the Site Around the Work",
    summary:
      "Why the portfolio stopped being a list of pages and started acting more like a front page for the work that actually matters.",
    publishDate: ensureDate("rebuilding-the-site-around-the-work", "2026-03-11"),
    hero: ensurePublicAsset("rebuilding-the-site-around-the-work hero", "/images/hero.jpg"),
    topic: "Project case study",
    relatedProject: "editorial-portfolio-rebuild",
    relatedPhotos: ["blossom-walk", "red-brick-clocktower"],
    draft: false,
    body: [
      {
        title: "The old version had energy, not shape",
        paragraphs: [
          "My earlier site had enough personality to prove I cared, but not enough structure to help anyone understand what I was actually good at.",
          "It behaved like a collection of experiments instead of a portfolio with a point of view.",
        ],
      },
      {
        title: "What the rewrite aimed for",
        paragraphs: [
          "The rebuild was not really about looking more professional in the generic sense. It was about making the work readable.",
        ],
        bullets: [
          "less noise in core navigation",
          "a stronger front page for projects and linked sites",
          "a structure that still makes sense six months from now",
        ],
      },
    ],
  },
  {
    slug: "designing-an-archive-that-reads-like-a-zine",
    title: "Designing an Archive That Reads Like a Zine",
    summary:
      "A note on why a small photo archive can feel more alive than a giant pile of filters and categories.",
    publishDate: ensureDate("designing-an-archive-that-reads-like-a-zine", "2026-03-02"),
    hero: ensurePublicAsset("designing-an-archive-that-reads-like-a-zine hero", "/images/LandscapeThumbnail.jpg"),
    topic: "Photography system",
    relatedProject: "curated-photo-archive",
    relatedPhotos: ["meadow-daisies", "orchard-light", "peeking-cat"],
    draft: false,
    body: [
      {
        title: "Not everything needs a dashboard",
        paragraphs: [
          "My first instinct for the gallery was to build more controls. The better answer turned out to be more editing.",
        ],
      },
      {
        title: "Why this works better",
        paragraphs: [
          "A tighter archive respects the viewer and the images at the same time. It also makes the site easier to maintain because every addition has to earn its place.",
        ],
      },
    ],
  },
  {
    slug: "what-the-gallery-prototype-got-right",
    title: "What the Gallery Prototype Got Right",
    summary:
      "The old Express and SQLite gallery is gone, but the lessons it forced on me are still in the current build.",
    publishDate: ensureDate("what-the-gallery-prototype-got-right", "2026-02-20"),
    hero: ensurePublicAsset("what-the-gallery-prototype-got-right hero", "/images/CityviewThumbnail.jpg"),
    topic: "Technical reflection",
    relatedProject: "gallery-data-prototype",
    relatedPhotos: ["red-brick-clocktower", "garden-visitor"],
    draft: false,
    body: [
      {
        title: "Prototypes are allowed to be awkward",
        paragraphs: [
          "The gallery backend was a rough draft, but it did important work. It made duplicate handling, file validation, and metadata feel concrete instead of theoretical.",
        ],
      },
      {
        title: "What stayed useful",
        paragraphs: [
          "A prototype can be successful even when the best outcome is deleting most of it and keeping the insight.",
        ],
      },
    ],
  },
  {
    slug: "planning-a-viewer-for-the-really-big-images",
    title: "Planning a Viewer for the Really Big Images",
    summary:
      "Notes from designing a better way to inspect very large photos without turning the experience into a technical chore.",
    publishDate: ensureDate("planning-a-viewer-for-the-really-big-images", "2026-02-09"),
    hero: ensurePublicAsset("planning-a-viewer-for-the-really-big-images hero", "/images/LandscapeThumbnail.jpg"),
    topic: "Tool design",
    relatedProject: "gigapixel-viewer",
    relatedPhotos: ["meadow-daisies", "red-brick-clocktower"],
    draft: false,
    body: [
      {
        title: "Why this tool exists",
        paragraphs: [
          "Once an image crosses a certain size, normal web presentation starts stripping away the exact detail that made the image worth sharing in the first place.",
        ],
      },
      {
        title: "What comes next",
        paragraphs: [
          "The public link will go live when the interaction feels calm enough to trust in front of other people.",
        ],
      },
    ],
  },
  {
    slug: "documenting-infrastructure-without-overexposing-it",
    title: "Documenting Infrastructure Without Overexposing It",
    summary:
      "How I talk about a home lab storage project in public without turning a portfolio piece into an accidental security overshare.",
    publishDate: ensureDate("documenting-infrastructure-without-overexposing-it", "2026-01-28"),
    hero: ensurePublicAsset("documenting-infrastructure-without-overexposing-it hero", "/images/hero1.jpg"),
    topic: "Infrastructure note",
    relatedProject: "nas-cloud-drive",
    relatedPhotos: ["neon-corridor"],
    draft: false,
    body: [
      {
        title: "The tension",
        paragraphs: [
          "Infrastructure projects are interesting because of the decisions behind them, not because strangers need a detailed map of how to get in.",
        ],
      },
      {
        title: "What I prefer to share",
        paragraphs: [
          "The public write-up focuses on workflow, backup, and access decisions while leaving sensitive implementation details off the open web.",
        ],
      },
    ],
  },
];

const photoMap = new Map(photos.map((photo) => [photo.slug, photo]));
const projectMap = new Map(projects.map((project) => [project.slug, project]));
const postMap = new Map(posts.map((post) => [post.slug, post]));

for (const project of projects) {
  for (const photoId of project.relatedPhotos) {
    if (!photoMap.has(photoId)) {
      throw new Error(`Unknown photo reference in project ${project.slug}: ${photoId}`);
    }
  }

  for (const postId of project.relatedPosts) {
    if (!postMap.has(postId)) {
      throw new Error(`Unknown post reference in project ${project.slug}: ${postId}`);
    }
  }
}

for (const post of posts) {
  if (post.relatedProject && !projectMap.has(post.relatedProject)) {
    throw new Error(`Unknown project reference in post ${post.slug}: ${post.relatedProject}`);
  }

  for (const photoId of post.relatedPhotos) {
    if (!photoMap.has(photoId)) {
      throw new Error(`Unknown photo reference in post ${post.slug}: ${photoId}`);
    }
  }
}

export const photosBySlug = photoMap;
export const projectsBySlug = projectMap;
export const postsBySlug = postMap;
