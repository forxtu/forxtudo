// utils
import { Project } from "features/projects/store/ProjectsStore";

const setIsInbox = (project: Project) =>
  project.name === "Inbox" ? "inbox" : project.id;

export default setIsInbox;
