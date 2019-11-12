import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/preloader";
import "./scripts/skills";
import "./scripts/parallax";
import "./scripts/comments_slider";
import "./scripts/burger";
import "./scripts/projects_slider";