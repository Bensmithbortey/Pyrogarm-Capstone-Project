import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../../layouts/Layout";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSlider";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Pyrogarm | Luxury Fashion </title>
        <meta name="description" content="Home of Luxury Fashion" />
      </MetaTags>
      <Layout headerTop="visible">
        {/* hero slider */}
        <HeroSliderOne />
        {/* featured icon */}
        <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />
        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />
        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
      </Layout>
    </Fragment>
  );
};

export default Home;
