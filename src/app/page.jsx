import TaskCard from "@/components/TaskCard";
import { prisma } from "@/app/libs/prisma";

async function loadTask() {
  /*   const res = await fetch("http://localhost:3000/api/tasks");
  const data = await res.json();
  console.log(data); */
  const tasks = await prisma.task.findMany();
  return tasks;
}

export const revalidate = 5;

export async function getServerSideProps() {
  const tasks = await loadTask();
  return {
    props: { tasks },
  };
}

function HomePage({ tasks }) {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks && tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}


export default HomePage;

