type PostBodyProps = {
  isEditing: boolean;

  content: string;
  editedContent: string;

  onContentChange: (
    value: string
  ) => void;

  onSave: () => void;
  onCancel: () => void;
};

export default function PostBody({
  isEditing,

  content,
  editedContent,

  onContentChange,

  onSave,
  onCancel,
}: PostBodyProps) {
  if (isEditing) {
    return (
      <>
        <textarea
          rows={4}
          value={editedContent}
          onChange={(event) =>
            onContentChange(event.target.value)
          }
          className="mt-3 w-full resize-none rounded-lg border border-neutral-800 bg-transparent p-4 outline-none focus:border-neutral-600"
        />

        <div className="mt-4 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-900"
          >
            Cancel
          </button>

          <button
            onClick={onSave}
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200"
          >
            Save Changes
          </button>
        </div>
      </>
    );
  }

  return (
    <p className="mt-3 leading-7">
      {content}
    </p>
  );
}