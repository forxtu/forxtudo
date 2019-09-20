import { observable, action, computed } from "mobx";

// utils
import { db } from "config/Auth";
import { IRootStore } from "store/RootStore";

export type Task = {
  task: string;
  userId: string;
  projectId: string;
  archived: boolean;
  completed: boolean;
  date: Date;
  id?: string;
};

type AddTask = {
  taskValue: string;
  projectId: string;
};

export interface ITasksStore {
  readonly rootStore: IRootStore;
  allTasks: Task[];
  addTask: ({ taskValue, projectId }: AddTask) => void;
  deleteTask: (task: Task) => void;
  completeTask: (task: Task) => void;
  unCompleteTask: (task: Task) => void;
  fetchAllTasks: () => void;
}

class TasksStore implements ITasksStore {
  constructor(readonly rootStore: IRootStore) {}

  @observable
  allTasks: Task[] = [];

  @computed
  get filteredByProjectTasks() {
    return this.allTasks.filter(
      task => task.projectId == this.rootStore.projectsStore.selectedProjectId
    );
  }

  @action
  addTask = ({ taskValue, projectId }: AddTask) => {
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

    this.fetchAllTasks();
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

    this.fetchAllTasks();
  };

  @action
  completeTask = (task: Task) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        completed: true
      });

    this.fetchAllTasks();
  };

  @action
  unCompleteTask = (task: Task) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        completed: false
      });

    this.fetchAllTasks();
  };

  @action
  fetchAllTasks = () => {
    db.collection("tasks")
      .where("userId", "==", this.rootStore.user)
      .get()
      .then(snapshot => {
        const tasks = snapshot.docs.map(task => ({
          id: task.id,
          ...task.data()
        }));

        this.allTasks = tasks as Task[];
      });
  };

  @action
  moveTaskToProject = (task: Task, projectId: string) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        projectId
      });

    this.fetchAllTasks();
  };
}

export default TasksStore;
