import { observable, action } from "mobx";

// utils
import { db } from "config/Auth";

export interface ITasksStore {
  rootStore: any;
}

class TasksStore implements ITasksStore {
  rootStore: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }

  @observable
  allTasks = [] as any;

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
    ];

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
  deleteTask = (task: any) => {
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
  completeTask = (taskId: string) => {
    db.collection("tasks")
      .doc(taskId)
      .update({
        completed: true
      });

    this.fetchAllTasks(this.rootStore.projectsStore.selectedProjectId);
  };

  @action
  unCompleteTask = (taskId: string) => {
    db.collection("tasks")
      .doc(taskId)
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

        this.allTasks = tasks;
      });
  };
}

export default TasksStore;
