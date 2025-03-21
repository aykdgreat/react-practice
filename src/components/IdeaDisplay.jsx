export default function IdeaDisplay() {
  const ideas = [
    {
      id: 1,
      title: "A new idea",
      body: "This is the first item",
    },
    {
      id: 2,
      title: "A second idea",
      body: "This is the first item",
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Idea Board</h1>
      <form action="#">
        <button className="bg-blue-900 p-3 mr-4 hover:bg-blue-950 text-white">
          New Idea
        </button>
        <label htmlFor="sort" className="mr-1">
          Sort ideas by:
        </label>
        <select name="sort" className="border">
          <option value="created">Date created</option>
          <option value="modified">Date modified</option>
        </select>
      </form>
      <div className="flex gap-4 mt-10">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="bg-yellow-200 mb-4 p-5 w-48 h-48 overflow-auto rounded-md"
          >
            <h1 contentEditable={true} className="font-bold text-2xl mb-1">
              {idea.title}
            </h1>
            <p>{idea.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
