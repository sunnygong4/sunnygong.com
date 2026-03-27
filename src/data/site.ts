import { existsSync } from "node:fs";
import { join } from "node:path";

const ensurePublicAsset = (label: string, value: string) => {
  if (!value.startsWith("/")) {
    throw new Error(`${label} must start with "/".`);
  }

  const file = join(process.cwd(), "public", value.slice(1));
  if (!existsSync(file)) {
    throw new Error(`${label} does not exist: ${value}`);
  }

  return value;
};

const maybeUrl = (label: string, value?: string) => {
  if (!value) {
    return undefined;
  }

  try {
    return new URL(value).toString();
  } catch {
    throw new Error(`Invalid URL for ${label}: ${value}`);
  }
};

const personalEmail = "sunny.gong4@gmail.com";
const schoolEmail = "s43gong@uwaterloo.ca";
const linkedinUrl =
  maybeUrl("LinkedIn profile", "https://www.linkedin.com/in/fangxu-gong-7b9b26221/") ??
  "https://www.linkedin.com/in/fangxu-gong-7b9b26221/";
const instagramHandle = "sunny.gong5";
const instagramUrl =
  maybeUrl("Instagram profile", `https://instagram.com/${instagramHandle}`) ??
  `https://instagram.com/${instagramHandle}`;
const phone = "+1 (236) 869-3297";

export const site = {
  name: "Sunny Gong",
  title: "Sunny Gong | Portfolio and Gallery",
  tagline: "A personal site for projects, photography, and the small experiments that still deserve a page.",
  description:
    "A personal portfolio for Sunny Gong featuring project write-ups, photography, and the tools built along the way.",
  email: personalEmail,
  location: "Waterloo, Ontario",
  copyrightYear: 2026,
  heroImage: ensurePublicAsset("Site hero image", "/images/hero.jpg"),
  logo: ensurePublicAsset("Site logo", "/images/logo.png"),
  wordmark: ensurePublicAsset("Site wordmark", "/images/headerTrans.png"),
  gallerySite: maybeUrl("Gallery site", "https://image.sunnygong.com") ?? "https://image.sunnygong.com",
  blogSite: maybeUrl("Blog site", "https://blog.sunnygong.com") ?? "https://blog.sunnygong.com",
  photoInboxEndpoint: maybeUrl("Photo inbox", import.meta.env.PUBLIC_PHOTO_INBOX_ENDPOINT),
  contact: {
    schoolEmail,
    phone,
    phoneHref: `tel:${phone.replace(/[^\d+]/g, "")}`,
    linkedin: linkedinUrl,
    instagramHandle,
    instagramUrl,
    discord: "sunnygong",
    wechat: "sunny060214",
  },
  availability:
    "Built to make the work easier to browse, share, and keep up to date while keeping the personality intact.",
  socials: [
    {
      label: "Instagram",
      href: instagramUrl,
      note: `@${instagramHandle}`,
    },
    {
      label: "GitHub",
      href: maybeUrl("GitHub", "https://github.com/sunnygong4/"),
      note: "github.com/sunnygong4",
    },
    {
      label: "LinkedIn",
      href: linkedinUrl,
      note: "Professional profile",
    },
  ],
  projectLinks: {
    "sd-mover":
      maybeUrl("SD Mover", "https://github.com/sunnygong4/sd_mover") ?? "https://github.com/sunnygong4/sd_mover",
    "gigapixel-viewer":
      maybeUrl("Gigapixel Viewer", "https://github.com/sunnygong4/gigapixel") ?? "https://github.com/sunnygong4/gigapixel",
    "nas-cloud-drive":
      maybeUrl("Personal Cloud Storage Platform", "https://drive.sunnygong.com") ?? "https://drive.sunnygong.com",
  },
};

export const getProjectLink = (projectId: string) =>
  site.projectLinks[projectId as keyof typeof site.projectLinks];

export const socialLinks = site.socials.filter((item) => item.href);
