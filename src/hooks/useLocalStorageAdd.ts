export type TaskType = {
  key: number;
  task: string;
  colorId: number;
  isCompleted: boolean;
};

export const useLocalStorageAdd = () => {
  var data: any = [];

  function newTask(value: string): void {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const items = localStorage.getItem("Arry");
    const itemsArry = JSON.parse(items ?? "[]");
    data = {
      task: value,
      colorId: randomNumber,
      isCompleted: false,
    };
    itemsArry.push(data);
    localStorage.setItem("Arry", JSON.stringify(itemsArry));
  }

  function completeTask(value: string): void {
    const items = localStorage.getItem("Arry");
    const itemsArry = JSON.parse(items ?? "[]");
    const filterData = itemsArry.filter((task: any) => task.task === value);
    filterData.map((task: any) => (task.isCompleted = true));
    localStorage.setItem("Arry", JSON.stringify(itemsArry));
  }

  function deleteTasks(value: string): void {
    const items = localStorage.getItem("Arry");
    const itemsArry = JSON.parse(items ?? "[]");
    const deleteData = itemsArry.filter((task: any) => task.task !== value);
    localStorage.setItem("Arry", JSON.stringify(deleteData));
  }

  return { newTask, deleteTasks, completeTask, data };
};
