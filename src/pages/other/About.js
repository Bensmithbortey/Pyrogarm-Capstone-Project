import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../../layouts/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import Banner from "../../wrappers/banner/Banner";
import TextGrid from "../../wrappers/text-grid/TextGrid";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import TeamMember from "../../wrappers/team-member/TeamMember";

const About = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Pyrogarm | About us</title>
        <meta
          name="description"
          content="An e-commerce platform that provides authentic luxury and streetwear items for its customers."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        About us
      </BreadcrumbsItem>
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

        {/* banner */}
        <Banner spaceBottomClass="pb-70" />

        {/* text grid */}
        <TextGrid spaceBottomClass="pb-70" />

        {/* fun fact */}
        <FunFactOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          bgClass="bg-gray-3"
        />

        {/* team member */}
        <TeamMember spaceTopClass="pt-95" spaceBottomClass="pb-70" />
      </Layout>
    </Fragment>
  );
};

About.propTypes = {
  location: PropTypes.object,
};

export default About;
