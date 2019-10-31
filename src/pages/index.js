import React from 'react';
import { default as NextLink } from 'next/link';
import Prismic from 'prismic-javascript';
import { Link, RichText } from 'prismic-reactjs';

import { apiEndpoint, accessToken, linkResolver, hrefResolver } from '../../prismic-configuration';
// import Slider from '../components/NetflixSlider';
import Slider from '../components/Slider';
// import NextLink from '../components/NextLink';
// import Layout from '../components/Layout';


export default class HomePage extends React.Component {
  // Fetch relevant data from Prismic before rendering
  static async getInitialProps(context) {
    const { req } = context;
    const home = await this.getHomePage(req);
    // Extra call to render the edit button, in case we've been routed client-side

    if (process.browser) window.prismic.setupEditButton();

    return {
      doc: home.document,
      menu: home.menu,
    };
  }

  static async getHomePage(req) {
    try {
      // Initializes the API, including the preview information and access token if there's any
      const API = await Prismic.getApi(apiEndpoint, { req, accessToken });
      // Queries both the homepage and navigation menu documents
      const document = await API.getSingle('homepage');
      const menu = await API.getSingle('menu');
      return { document, menu };
    } catch (error) {
      console.error(error);
      return error;
    }
  }


  render() {
    const [banner] = this.props.doc.data.homepage_banner;
    // With the Prismic data in this.props we can render the components for the Homepage
    // passing to each component the required object
    console.log(this.props.doc.data.page_content);
    const internalLink = banner.button_link.link_type === 'Document';

    const movies = [
      {
        id: 1,
        image: 'http://kinopoisk.me/uploads/posts/2017-03/1489517436-1078343692-klyatva.jpg',
        imageBg: 'http://kinopoisk.me/uploads/posts/2017-03/1489517436-1078343692-klyatva.jpg',
        title: '1983',
      },
      {
        id: 2,
        image: 'http://kinopoisk.me/uploads/posts/2017-03/1489517425-784806665-gippopotam.jpg',
        imageBg: 'http://kinopoisk.me/uploads/posts/2017-03/1489517425-784806665-gippopotam.jpg',
        title: 'Russian doll',
      },
      {
        id: 3,
        image: 'http://kinopoisk.me/uploads/posts/2017-03/1489517436-1078343692-klyatva.jpg',
        imageBg: 'http://kinopoisk.me/uploads/posts/2017-03/1489517436-1078343692-klyatva.jpg',
        title: 'The rain',
      },
      {
        id: 4,
        image: 'http://kinopoisk.me/uploads/posts/2017-03/1489517425-784806665-gippopotam.jpg',
        imageBg: 'http://kinopoisk.me/uploads/posts/2017-03/1489517425-784806665-gippopotam.jpg',
        title: 'Sex education',
      },
      {
        id: 5,
        image: 'http://kinopoisk.me/uploads/posts/2017-03/1489517436-1078343692-klyatva.jpg',
        imageBg: 'http://kinopoisk.me/uploads/posts/2017-03/1489517436-1078343692-klyatva.jpg',
        title: 'Elite',
      },
      {
        id: 6,
        image: 'http://kinopoisk.me/uploads/posts/2017-03/1489517425-784806665-gippopotam.jpg',
        imageBg: 'http://kinopoisk.me/uploads/posts/2017-03/1489517425-784806665-gippopotam.jpg',
        title: 'Black mirror',
      },
    ];

    const iii = [
      'http://kinopoisk.me/uploads/posts/2017-03/1489517436-1078343692-klyatva.jpg',
      'http://kinopoisk.me/uploads/posts/2017-03/1489517436-1078343692-klyatva.jpg',
      'http://kinopoisk.me/uploads/posts/2017-03/1489517436-1078343692-klyatva.jpg',
    ];

    return (
      <div>
        <Slider images={iii} />
        <div>
          {/* <Slider>
            {movies.map((movie) => (
              <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
            ))}
          </Slider> */}
        </div>

        <div className="homepage" data-wio-id={this.props.doc.id}>
          <div>{this.props.menu.lang}</div>
          <div>{this.props.doc.data.homepage_banner[0].image.url} <img src={this.props.doc.data.homepage_banner[0].image.url} /></div>
          <div>{this.props.doc.data.page_content.toString()}</div>
        </div>
        <>
          <section
            className="homepage-banner"
            style={{
              backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' +
            banner.image.url +
            ')',
            }}
          >
            <div className="banner-content container">
              <h2 className="banner-title">{RichText.asText(banner.title)}</h2>
              <p className="banner-description">
                {RichText.asText(banner.tagline)}
              </p>
              {RichText.asText(banner.button_label) !== '' ? (
              // Displays the button link only if it's been defined
                <NextLink
                  as={internalLink ? linkResolver(banner.button_link) : ''}
                  // No need to change how the route is shown if it's external
                  href={
                    internalLink ?
                      hrefResolver(banner.button_link) :
                      Link.url(banner.button_link, linkResolver)
                    // We get the url if it's an external link, otherwise we get the generated internal route
                  }
                  passHref
                >
                  {/* Handles the link client-side if it's a Prismic document, otherwise it's just a regular href */}
                  <a className="banner-button">
                    {RichText.asText(banner.button_label)}
                  </a>
                </NextLink>
              ) : (
                ''
              )}
            </div>
          </section>

        </>
      </div>
    );
  }
}


// const IndexPage = () => {
//   const data = getInitialProps()
//   return (
//     <Layout>

//       <article>
//         <h1>{`title`}</h1>
//       </article>
//       <div id="main">
//         <section id="two">
//           <div className="inner">
//             <header className="major">
//               <h2>Massa libero - tests CI 2</h2>
//             </header>
//             <p>{`Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.`}</p>
//             <ul className="actions">
//               <li>
//                 <NextLink to="/landing" className="button next">Get Started</NextLink>
//               </li>
//             </ul>
//           </div>
//         </section>
//       </div>

//     </Layout>
//   );
// };

// export default IndexPage;
