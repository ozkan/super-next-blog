import { useHydrate } from 'next-mdx/client'
import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { mdxComponents } from 'components/mdx-components'
import React from 'react'
import PageTransition from '@components/page-transition'
import dynamic from 'next/dynamic'
const Comment = dynamic(() => import('@components/comment'), { ssr: false })

function PostPage({ post }) {
  const content = useHydrate(post, {
    components: mdxComponents
  })

  return (
    <PageTransition>
      <div className="site-w">
        <article>
          <header>
            <h1 className="text-4xl font-bold text-highlight">
              {post.frontMatter.title}
            </h1>
            {post.frontMatter.excerpt ? (
              <p className="mt-2 text-xl">{post.frontMatter.excerpt}</p>
            ) : null}
            <time className="flex mt-2 text-gray-400 dark:text-gray-600">
              {post.frontMatter.date}
            </time>
          </header>
          <hr className="my-6 border-gray-700" />
          <div className="prose dark:prose-dark">{content}</div>
        </article>

        <Comment />
      </div>
    </PageTransition>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('post'),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const post = await getMdxNode('post', context)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}

export default PostPage
