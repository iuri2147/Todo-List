import { Button, Card, CardProps, Space, Tooltip } from "antd";
import "./style.css";
import teste from "../../images/pushpin.png";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Typography } from "antd";

type TaskCardsProps = {
  task: string;
  isCompleted: boolean;
  colorId: number;
  completeTask: (task: string) => void;
  deleteTask: (task: string) => void;
} & CardProps;

export const TaskCards = ({
  task,
  isCompleted,
  colorId,
  deleteTask,
  completeTask,
  ...props
}: TaskCardsProps) => {
  return (
    <Card
      {...props}
      className={colorId === 1 ? "Card1" : colorId === 2 ? "Card2" : "Card3"}
    >
      <img src={teste} />
      <p className="text">{task}</p>
      <Space
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Tooltip title="Deletar">
          <Button
            onClick={() => deleteTask(task)}
            size="middle"
            danger
            shape="circle"
            icon={<DeleteOutlined size={10} />}
          />
        </Tooltip>
        {isCompleted ? (
          <Typography.Text style={{fontWeight: 'bold', color: '#fff'}}>
           Tarefa completa
          </Typography.Text>
        ) : (
          <Tooltip title="Completar">
            <Button
              onClick={() => completeTask(task)}
              size="middle"
              shape="circle"
              icon={<CheckOutlined size={10} />}
            />
          </Tooltip>
        )}
      </Space>
    </Card>
  );
};
