import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../../layouts/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BlogSidebar from "../../wrappers/blog/BlogSidebar";
import BlogPagination from "../../wrappers/blog/BlogPagination";
import BlogPosts from "../../wrappers/blog/BlogPosts";

const Blog = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Pyrogarm | Blog</title>
        <meta name="description" content="Blog of Pyrogarm." />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Blog
      </BreadcrumbsItem>
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="blog-area pt-100 pb-100">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-lg-9">
                <div className="ml-20">
                  <div className="row">
                    {/* blog posts */}
                    <BlogPosts />
                  </div>

                  {/* blog pagination */}
                  <BlogPagination />
                </div>
              </div>
              <div className="col-lg-3">
                {/* blog sidebar */}
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

Blog.propTypes = {
  location: PropTypes.object,
};

export default Blog;
