import { db } from "@/lib/db";
import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

const OrganizationalIdPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y-4">
      <form action={create}>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
        <Button type="submit">Submit</Button>
      </form>
      <div className="space-y-2">
        {boards.map(board)=>{
          <div key={boards.id}>{board.t'}</div>
        }}
      </div>
    </div>
  );
};

export default OrganizationalIdPage;
