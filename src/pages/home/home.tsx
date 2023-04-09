import { Content } from "../../components/layout/Content";
import { Image, Space, Typography, Tooltip, Button, Input, Layout } from "antd";
import "./style.css";
import TaskImage from "../../images/task.png";
import { FontSizeOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { TaskCards } from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import { useLocalStorageAdd } from "../../hooks/useLocalStorageAdd";
import { TaskType } from "../../hooks/useLocalStorageAdd";
import { motion } from "framer-motion";

export const Home = () => {
  const [task, setTask] = useState<string>("");
  const { newTask, completeTask, deleteTasks, data } = useLocalStorageAdd();
  const [CardTaskData, setCardTaskData] = useState<TaskType[]>([]);

  useEffect(() => {
    setCardTaskData(JSON.parse(localStorage.getItem("Arry") ?? "[]"));
  }, [data, CardTaskData]);

  function addNewTask(value: string) {
    setTask("");
    newTask(value);
  }

  function deleteTask(value: string) {
    deleteTasks(value);
  }

  function completeTasks(value: string) {
    completeTask(value);
  }

  return (
    <Content>
      <Space>
        <Image width={50} height={50} src={TaskImage} />
        <Typography.Text className="Title">Lista de Tarefas</Typography.Text>
      </Space>
      <br></br>
      <Space align="baseline">
        <Input
          style={{ width: 700, marginTop: 20, marginRight: 20 }}
          size="large"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Digite sua Tarefa"
          prefix={<FontSizeOutlined />}
        />
        <Tooltip title="Adicionar">
          <Button
            onClick={() => addNewTask(task)}
            size="large"
            type="primary"
            shape="circle"
            icon={<PlusCircleOutlined size={22} />}
          />
        </Tooltip>
      </Space>
      <br></br>
      <Layout
        style={{
          marginTop: 30,
          width: "100%",
          background: "#4F4F4F",
        }}
      >
        <Space wrap direction="horizontal">
          {CardTaskData &&
            Array.isArray(CardTaskData) &&
            CardTaskData.map((e) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  key={e.task}
                >
                  <TaskCards
                    completeTask={(value) => completeTasks(value)}
                    deleteTask={(value) => deleteTask(value)}
                    key={e.task}
                    size="small"
                    task={e.task}
                    isCompleted={e.isCompleted}
                    colorId={e.colorId}
                  />
                </motion.div>
              );
            })}
        </Space>
      </Layout>
    </Content>
  );
};
