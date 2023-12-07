const IDpage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>ID : {params.id}</h1>
    </div>
  );
};

export default IDpage;
