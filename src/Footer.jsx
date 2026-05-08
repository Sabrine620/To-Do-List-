export default function Footer({ tasks }) {
  const complitedTask = tasks.filter((ele) => ele.completed).length;
  const uncomplitedTask = tasks.filter((ele) => !ele.completed).length;

  return (
    <div className="footer">
      <span>
        Completed {complitedTask}|Uncompleted {uncomplitedTask}
      </span>
    </div>
  );
}
