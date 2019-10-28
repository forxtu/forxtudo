import { observable, action, computed } from "mobx";
import moment from "moment";
import { uniq, isEqual } from "lodash";

// utils
import { db } from "config/Auth";
import { IRootStore } from "store/RootStore";
import { removeFromArray } from "utils/helpers";

type Label = string;

export type Task = {
  task: string;
  description: string;
  userId: string;
  projectId: string;
  archived: boolean;
  completed: boolean;
  date: Date;
  priority: number;
  labels: Label[];
  id?: string;
};

export type AddTask = {
  taskValue: string;
  projectId: string;
  date?: string;
  description?: string;
  priority?: number;
  labels?: Label[];
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

  @observable
  selectedTask: Task = null as any;

  @computed
  get filteredByProjectTasks() {
    return this.allTasks.filter(
      task => task.projectId == this.rootStore.projectsStore.selectedProjectId
    );
  }

  @computed
  get filteredByDateTasks() {
    return this.allTasks.filter(task => moment().isSame(task.date, "day"));
  }

  @action
  addTask = ({
    taskValue,
    projectId,
    date,
    description,
    priority,
    labels = []
  }: AddTask) => {
    this.allTasks = [
      ...this.allTasks,
      {
        task: taskValue,
        archived: false,
        completed: false,
        description,
        priority,
        labels,
        date,
        projectId,
        userId: this.rootStore.user
      }
    ] as Task[];

    db.collection("tasks").add({
      task: taskValue,
      archived: false,
      completed: false,
      description,
      priority,
      labels,
      date,
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

    this.allTasks = removeFromArray(this.allTasks, task.id);

    this.setSelectedTask(null as any);
    this.fetchAllTasks();
  };

  @action
  editTaskName = (task: Task, taskValue: string) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        task: taskValue
      });

    task.task = taskValue;
  };

  @action
  completeTask = (task: Task) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        completed: true
      });

    task.completed = true;
    this.fetchAllTasks();
  };

  @action
  unCompleteTask = (task: Task) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        completed: false
      });

    task.completed = false;
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

    task.projectId = projectId;
  };

  @action
  addLabelToTask = (task: Task, label: string) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        labels: uniq([...task.labels, label])
      });

    task.labels = uniq([...task.labels, label]);
  };

  @action
  removeLabelFromTask = (task: Task, label: string) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        labels: removeFromArray(task.labels, label)
      });

    task.labels = removeFromArray(task.labels, label);
  };

  @action
  editTaskDate = (task: Task, date: any) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        date
      });

    task.date = date;
  };

  @action
  updateTaskPriority = (task: Task, priority: number) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        priority
      });

    task.priority = priority;
  };

  @action
  editTaskDescription = (task: Task, description: string) => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        description
      });

    task.description = description;
  };

  @action
  setSelectedTask = (task: Task) => {
    this.selectedTask = task;
  };
}

export default TasksStore;
