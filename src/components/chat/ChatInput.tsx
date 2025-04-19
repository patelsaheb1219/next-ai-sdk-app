interface ChatInputProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export function ChatInput({ input, handleInputChange, handleSubmit, isLoading }: ChatInputProps) {
  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="position-relative">
        <textarea
          className="form-control"
          value={input}
          onChange={handleInputChange}
          rows={3}
          placeholder="Type your message here..."
          disabled={isLoading}
        />
        <button 
          type="submit"
          className="btn btn-primary position-absolute bottom-0 end-0 m-2"
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Sending...
            </>
          ) : (
            'Send'
          )}
        </button>
      </div>
    </form>
  );
}