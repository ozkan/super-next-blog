import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import useSWR, { mutate } from 'swr'
import fetcher from '@lib/fetcher'
import CommentTextarea from '@components/comment/textarea'
import CommentList from '@components/comment/list'

function Comment() {
  const { getAccessTokenSilently } = useAuth0()
  const [text, textSet] = useState('')

  const url = window.location.origin + window.location.pathname
  const urlParams = new URLSearchParams(Object.entries({ url }))
  const fetchCommentUrl = `/api/comment?${urlParams}`

  const { data, isValidating } = useSWR(fetchCommentUrl, fetcher, {
    initialData: [],
    revalidateOnMount: true
  })

  const onSubmit = async (text) => {
    const token = await getAccessTokenSilently()
    try {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ token, text, url }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      textSet('')
      await mutate(fetchCommentUrl)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="mt-10">
      <CommentTextarea
        onSubmit={onSubmit}
        isSubmitting={isValidating}
        text={text}
        textSet={textSet}
      />
      <CommentList comments={data} />
    </div>
  )
}

export default Comment
