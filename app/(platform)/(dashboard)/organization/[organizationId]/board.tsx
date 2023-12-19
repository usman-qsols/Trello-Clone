import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

interface BoardPage {
  title: string;
  id: string;
}

const Board = ({ title, id }: BoardPage) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board Title : {title}</p>
      <Button variant="destructive" size="sm" type="submit">
        Delete
      </Button>
    </form>
  );
};

export default Board;
