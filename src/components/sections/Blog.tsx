import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet?: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const feedUrl = encodeURIComponent('https://productbyteblog.substack.com/feed');
        const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`;

        const response = await fetch(proxyUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }

        const data = await response.json();

        if (data.status !== 'ok') {
          throw new Error('Invalid feed data');
        }

        const parsedPosts = data.items.map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          content: item.content || item.description,
        }));

        if (parsedPosts.length === 0) {
          throw new Error('No posts found');
        }

        setPosts(parsedPosts);
        setError(null);

      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Unable to load blog posts at this time. Please check back later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return dateString;
    }
  };

  const createExcerpt = (content: string) => {
    const plainText = content.replace(/<[^>]+>/g, '');
    return plainText.slice(0, 200) + '...';
  };

  if (loading) {
    return (
      <section id="writing" className="section-height py-10 md:py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-modern">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-16 md:mb-20 text-gray-900">Writing</h2>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="writing" className="section-height py-10 md:py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-modern">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-16 md:mb-20 text-gray-900">Writing</h2>
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="writing" className="section-height py-20 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-modern">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4 text-gray-900">Writing</h2>
          <a
            href="https://productbyteblog.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 inline-flex items-center"
          >
            View all posts <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {posts.slice(0, 4).map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out group overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time>{formatDate(post.pubDate)}</time>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">{post.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-base">{createExcerpt(post.content)}</p>
                <div className="inline-flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Read More <ExternalLink className="ml-1 h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog