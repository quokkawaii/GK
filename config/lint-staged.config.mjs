// npm 자동 파일과 문서·검토용 시안은 커밋 전 자동 서식 검사에서 제외한다.
const getFormattableFiles = (files) => {
  const ignoredPaths = ["/docs/", "/harness/"];

  return files.filter((file) => {
    return (
      !file.endsWith("package-lock.json") &&
      !file.endsWith("/AGENTS.md") &&
      !file.endsWith("/README.md") &&
      !ignoredPaths.some((path) => file.replaceAll("\\", "/").includes(path))
    );
  });
};

const lintStagedConfig = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --config config/eslint.config.mjs",
    "prettier --config config/prettier.config.mjs --ignore-path config/prettierignore --check",
  ],
  "*.{json,css,md,html,yml,yaml}": (files) => {
    const formattableFiles = getFormattableFiles(files);

    if (formattableFiles.length === 0) {
      return [];
    }

    return `prettier --config config/prettier.config.mjs --ignore-path config/prettierignore --check ${formattableFiles.map(JSON.stringify).join(" ")}`;
  },
};

export default lintStagedConfig;
