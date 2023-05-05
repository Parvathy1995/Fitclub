import img1 from "../../Components/Images/w1.jpg";
import img2 from "../../Components/Images/w2.jpeg";
import img3 from "../../Components/Images/w5.jpg";
import img4 from "../../Components/Images/w3.jpg";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./styles.css";
import React, { useEffect, useState } from "react";
import data from "./TemplateData.json";
import { apis, fetchAPI } from "../../Network";
import { useDispatch, useSelector } from "react-redux";
import { TestimonialSlice } from "./reducer";

const Testimonials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const state = useSelector((state) => state.TestimonialReducer);
  const dispatch = useDispatch();
  const newdata = state.userList??[];
  const handleDatafetch = async () => {
    const result = await fetchAPI({ url: apis.userList });
    dispatch(TestimonialSlice.actions.fetchTestimonialData(result.users));
  };
  useEffect(() => {
    handleDatafetch();
  }, []);
  return (
    <div>
      <section className="our__team">
        <div className="container">
          <div className="team__content">
            <h6 className="subtitle"></h6>
            <h2>
              Join With <span className="highlight">Our Success Stories</span>
            </h2>
          </div>
          <div className="templateContainer">
            <div className="template_Container">
              {data
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val, i) => {
                  return (
                    <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>
                        {newdata[i] && (
                          <img
                            src={newdata[i].image}
                            alt="profile"
                            className="profile_img"
                          />
                        )}
                        {val.title}
                      </h3>
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
