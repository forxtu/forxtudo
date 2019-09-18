import { observable, action } from "mobx";

// utils
import { db } from "config/Auth";

export type Task = {
  task: string;
  userId: string;
  projectId: string;
  archived: boolean;
  completed: boolean;
  date: Date;
  id?: string;
};

export interface ITasksStore {
  rootStore: any;
}

class TasksStore implements ITasksStore {
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }

  @observable
  allTasks: Task[] = [];

  @action
  addTask = ({
    taskValue,
    projectId
  }: {
    taskValue: string;
    projectId: string;
  }) => {
    this.allTasks = [
      ...this.allTasks,
      {
        task: taskValue,
        archived: false,
        completed: false,
        date: "",
        projectId,
        userId: this.rootStore.user
      }
    ] as Task[];

    db.collection("tasks").add({
      task: taskValue,
      archived: false,
      completed: false,
      date: "",
      projectId,
      userId: this.rootStore.user
    });
  };

  @action
  deleteTask = (task: Task) => {
    db.collection("tasks")
      .doc(task.id)
      .delete()
      .then(() => {
        console.log(task.task + "deleted");
      })
      .catch(err => {
        console.log(err);
      });

    this.fetchAllTasks(this.rootStore.projectsStore.selectedProjectId);
  };

  @action
  completeTask = (task: Task) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        completed: true
      });

    this.fetchAllTasks(this.rootStore.projectsStore.selectedProjectId);
  };

  @action
  unCompleteTask = (task: Task) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        completed: false
      });

    this.fetchAllTasks(this.rootStore.projectsStore.selectedProjectId);
  };

  @action
  fetchAllTasks = (projectId: string) => {
    db.collection("tasks")
      .where("userId", "==", this.rootStore.user)
      .where("projectId", "==", projectId)
      .get()
      .then(snapshot => {
        const tasks = snapshot.docs.map(task => ({
          id: task.id,
          ...task.data()
        }));

        console.log(tasks, "allTasks");

        this.allTasks = tasks as Task[];
      });
  };
}

export default TasksStore;
