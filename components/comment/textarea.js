import { useAuth0 } from '@auth0/auth0-react'

function CommentTextarea({ text, textSet, onSubmit, isSubmitting }) {
  const { isAuthenticated, loginWithPopup } = useAuth0()

  const onBeforeSubmit = async (e) => {
    e.preventDefault()
    onSubmit(text)
  }

  return (
    <form onSubmit={onBeforeSubmit}>
      <textarea
        className="flex w-full max-h-40 p-3 rounded resize-y bg-gray-200 text-gray-900 placeholder-gray-500"
        rows="2"
        placeholder={`What are your thoughts?`}
        onChange={(e) => textSet(e.target.value)}
        value={text}
      />

      <div className="flex items-center mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <button
              className="py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              Send
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700"
            onClick={() => loginWithPopup()}
          >
            Log In
          </button>
        )}
      </div>
    </form>
  )
}

export default CommentTextarea
