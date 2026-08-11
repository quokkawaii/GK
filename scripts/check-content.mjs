import { readFile } from "node:fs/promises";

const casesPath = new URL("../src/content/cases.json", import.meta.url);
const sitePath = new URL("../src/content/site.json", import.meta.url);
const errors = [];

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function requireString(value, path) {
  if (!isNonEmptyString(value)) {
    errors.push(`${path} must be a non-empty string`);
  }
}

function requireStringArray(value, path) {
  if (!Array.isArray(value) || value.length === 0) {
    errors.push(`${path} must contain at least one item`);
    return;
  }

  value.forEach((item, index) => requireString(item, `${path}[${index}]`));
}

async function readJson(url, label) {
  try {
    return JSON.parse(await readFile(url, "utf8"));
  } catch (error) {
    errors.push(`${label} could not be read as JSON: ${error.message}`);
    return null;
  }
}

const casesContent = await readJson(casesPath, "cases.json");
const siteContent = await readJson(sitePath, "site.json");

if (casesContent) {
  if (!Array.isArray(casesContent.content) || casesContent.content.length === 0) {
    errors.push("cases.json.content must contain at least one case");
  } else {
    const ids = new Set();

    casesContent.content.forEach((caseItem, index) => {
      const path = `cases.json.content[${index}]`;

      if (!Number.isInteger(caseItem.id)) {
        errors.push(`${path}.id must be an integer`);
      } else if (ids.has(caseItem.id)) {
        errors.push(`${path}.id is duplicated: ${caseItem.id}`);
      } else {
        ids.add(caseItem.id);
      }

      requireString(caseItem.title, `${path}.title`);
      requireStringArray(caseItem.tags, `${path}.tags`);
      requireString(caseItem.location, `${path}.location`);
      requireStringArray(caseItem.productIds, `${path}.productIds`);

      if (!Array.isArray(caseItem.images) || caseItem.images.length === 0) {
        errors.push(`${path}.images must contain at least one image`);
      } else {
        caseItem.images.forEach((image, imageIndex) => {
          const imagePath = `${path}.images[${imageIndex}]`;
          requireString(image.src, `${imagePath}.src`);
          requireString(image.alt, `${imagePath}.alt`);
        });

        if (
          !Number.isInteger(caseItem.thumbnailIndex) ||
          caseItem.thumbnailIndex < 0 ||
          caseItem.thumbnailIndex >= caseItem.images.length
        ) {
          errors.push(`${path}.thumbnailIndex must point to an existing image`);
        }
      }
    });
  }
}

if (siteContent) {
  requireString(siteContent.companyName, "site.json.companyName");
  requireStringArray(siteContent.keywords, "site.json.keywords");
  requireString(siteContent.about?.title, "site.json.about.title");
  requireString(siteContent.about?.lead, "site.json.about.lead");
  requireStringArray(siteContent.about?.body, "site.json.about.body");
  requireString(siteContent.about?.closing, "site.json.about.closing");
}

if (errors.length > 0) {
  console.error("Content validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log("Content validation passed.");
}
