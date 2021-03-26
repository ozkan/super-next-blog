import { getAllNodes } from 'next-mdx'
import NextLink from 'next/link'
import PageTransition from '@components/page-transition'

function NotePage({ posts }) {
  return (
    <PageTransition>
      <div className="site-w">
        {posts.length ? (
          posts.map((post) => (
            <article key={post.slug} className="mb-10">
              <NextLink href={post.url} passHref>
                <a className="text-lg leading-6 font-bold">
                  {post.frontMatter.title}
                </a>
              </NextLink>
              <p>
                <time>{post.frontMatter.date}</time>
              </p>
            </article>
          ))
        ) : (
          <p>Hiç not yazılmamış. İlginç...</p>
        )}
      </div>
    </PageTransition>
  )
}

export async function getStaticProps() {
  const posts = await getAllNodes('post')

  return {
    props: {
      posts
    }
  }
}

export default NotePage
