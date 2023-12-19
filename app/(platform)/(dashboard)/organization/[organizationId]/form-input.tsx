interface IFormInputState {
  errors?: {
    title?: string[];
  };
}

export const FormInput = ({ errors }: IFormInputState) => {
  return (
    <div>
      <input
        type="text"
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className="border-black border p-1"
      />
      {errors?.title ? (
        <div>
          {errors?.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
