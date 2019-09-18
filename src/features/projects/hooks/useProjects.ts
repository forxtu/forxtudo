import { useState, useEffect, useContext, ChangeEvent } from "react";

// utils
import { db } from "config/Auth";
import { UserContext } from "containers/core/App";

type Project = {
  name: string;
  userId: string | null;
  id?: string;
};

type Projects = Project[];

const useProjects = () => {
  const { user } = useContext(UserContext);

  const [projects, setProjects] = useState<Projects>([]);
  const [projectValue, setProjectValue] = useState<string>("");

  const setProjectsHandler = (event: any) => {
    event.preventDefault();

    setProjects((previousProjects: Projects) => [
      ...previousProjects,
      {
        name: projectValue,
        userId: user
      }
    ]);

    db.collection("projects").add({
      name: projectValue,
      userId: user
    });

    setProjectValue("");
  };

  const setProjectValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProjectValue(event.currentTarget.value);
  };

  useEffect(() => {
    db.collection("projects")
      .where("userId", "==", user)
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          id: project.id,
          ...project.data()
        }));

        console.log("allProjects :", allProjects);

        setProjects([...projects, ...(allProjects as any)]);
      });
  }, []);

  return {
    projects,
    setProjectsHandler,
    projectValue,
    setProjectValueHandler
  };
};

export default useProjects;
