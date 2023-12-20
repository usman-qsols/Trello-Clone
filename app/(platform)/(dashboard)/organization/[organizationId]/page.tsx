import { Info } from "./_components/Info";
import { BoardList } from "./_components/board-list";

const OrganizationalIdPage = async () => {
  return (
    <div className="w-full mb-20">
      <Info />
      <BoardList />
    </div>
  );
};

export default OrganizationalIdPage;
