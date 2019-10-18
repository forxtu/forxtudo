// utils
import { Project } from "features/projects/store/ProjectsStore";

export const getProjectIdDependingOnType = (project: Project) =>
  project.name === "Inbox" ? "inbox" : project.id;
