import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home";
import Footer from "./components/footer/footer";
import WhoWeAreMain from "./components/who-we-are";
import WhatWeDoMain from "./components/what-we-do";
import ArticlesList from "./components/articles-listing";
import ArticlesDetails from "./components/article-details";
import OurWorkCase from "./components/work-case";
import Unilever from "./components/unilever";
import { ContactForm } from "./components/contact";
import { PrivacyPolicy } from "./components/privacy-policy";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/general-components/ScrollToTop";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const { pathname } = useLocation();
  return (
    <div className="">
      <ScrollToTop />
      {pathname !== "/contact" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAreMain />} />
        <Route path="/what-we-do" element={<WhatWeDoMain />} />
        <Route path="/our-work" element={<OurWorkCase />} />
        <Route path="/work-case/:id" element={<Unilever />} />
        <Route path="/articles-list" element={<ArticlesList />} />
        <Route path="/article-details/:id" element={<ArticlesDetails />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      {pathname !== "/contact" && <Footer />}
    </div>
  );
};

export default App;
