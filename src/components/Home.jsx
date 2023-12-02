import React, { useState } from "react";
import { data } from "../data.js";
import PlayIcon from "../img/play.png";
import Arrow from "../img/arrow.png";
import Desk from "../img/img1.png";
import Star from "../img/star.png";
import Img2 from "../img/img2.png";
import Card1 from "../img/card1.png";
import Card2 from "../img/card2.png";
import Card3 from "../img/card3.png";
import Phone from "../img/phone.png";
import Bell from "../img/noti.png";
import Flame from "../img/fire.png";
import Tools from "../img/tools.png";
import Pic3 from "../img/pic3.png";
import Pic2 from "../img/pic2.png";
import Pic1 from "../img/pic1.png";
import Plus from "../img/plus.png";
import Minus from "../img/minus.png";
import Emily from "../img/Emily.png";
import Sarah from "../img/Sarah.png";
import Alex from "../img/Alex.png";
import David from "../img/David.png";
import Users from "../img/happyusers.png";
import Logo from "../img/logo.png";
import Linkedin from "../img/linkedin.png";
import X from "../img/x.png";
import Insta from "../img/instagram.png";
import "./slider.css";

const Home = () => {
  const [opened, setOpened] = useState({});

  const toggle = (id) => {
    setOpened({
      ...opened,
      [id]: !opened[id],
    });
  };
  return (
    <div className="flex flex-col items-center">
      <div
        className="py-1 px-3 bg-white mt-24 mb-5 rounded-lg text-center"
        style={{ border: "1px solid #EAE0FF" }}
      >
        <p className="text-violet font-sans text-sm">
          👋 WELCOME TO MANAGE WISE!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-sans text-7xl text-darkGrey font-medium tracking-tighter">
          Empower your business with
        </p>
        <p className="font-sans text-7xl text-darkGrey font-medium tracking-tighter">
          <span className="text-orange">Strategic</span> insights
        </p>
      </div>
      <div className="text-center pt-10 ">
        <p className="font-mons text-xl font-semibold text-middleGrey">
          Powerful management platform designed to streamline your business
        </p>
        <p className="font-mons text-xl font-semibold text-middleGrey">
          operations, boost productivity, and drive success
        </p>
      </div>
      <div className="flex py-4">
        <button className="flex items-center justify-center h-14 py-3 px-10 m-2.5 font-sans font-medium text-xl text-white bg-violet rounded-2xl">
          Get Started
          <img
            src={Arrow}
            alt="icon"
            style={{ width: "20px" }}
            className="ml-2"
          />
        </button>
        <button
          className="flex items-center h-14 py-3 px-10 m-2 bg-white rounded-2xl font-sans font-semibold text-xl cursor-pointer"
          style={{
            border: "1px solid #F0F0F0",
          }}
        >
          Watch Demo
          <img
            src={PlayIcon}
            alt="icon"
            style={{ width: "20px", marginLeft: "8px" }}
          />
        </button>
      </div>
      <img
        src={Desk}
        alt="img1"
        className="shadow-xl"
        style={{
          marginTop: "50px",
          borderRadius: "20px",
          border: "1px solid #F0F0F0",
        }}
      />
      <div
        className="py-1 px-3 bg-white mt-32 mb-5 rounded-lg text-center"
        style={{ border: "1px solid #EAE0FF" }}
      >
        <p className="text-violet font-sans text-sm">🔥 PREMIER FEATURES</p>
      </div>
      <div>
        <p className="font-sans font-medium text-5xl text-darkGrey pb-5 mt-7">
          Discover our product's{" "}
          <span className="text-orange">Capabilities</span>
        </p>
      </div>
      <div className="text-center">
        <p className="font-mons text-xl font-semibold text-middleGrey">
          Don't settle for mediocrity - embrace the future of management
        </p>
        <p className="font-mons text-xl font-semibold text-middleGrey">
          with Manage Wise.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-ultraLightViolet w-[30%] h-4/6 px-8 py-20 rounded-2xl m-10">
          <div className="bg-white w-11 p-2 mb-8 rounded-xl">
            <img src={Star} alt="star" />
          </div>

          <p className="font-sans text-darkGrey text-4xl">
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </p>
        </div>
        <div>
          <img src={Img2} alt="img2" style={{ borderRadius: "20px" }} />
        </div>
      </div>
      <div className="flex align-center justify-center pb-32">
        <div
          className="bg-white w-[24%] py-8 px-4 ml-10 mr-7 rounded-2xl"
          style={{ border: "1px solid #F0F0F0" }}
        >
          <div className="px-5 pb-10">
            <img
              src={Card1}
              alt="card1"
              className="rounded-lg shadow-xl"
              style={{
                border: "1px solid #F0F0F0",
              }}
            />
          </div>

          <p className="font-semibold text-xl pl-5">Flexible Scheduling</p>
          <p className="pl-5 py-3">
            Stay productive with our flexible scheduling system
          </p>
        </div>
        <div
          className="bg-white w-[24%] py-8 px-4 rounded-2xl"
          style={{ border: "1px solid #F0F0F0" }}
        >
          <div className="px-5 pb-6">
            <img
              src={Card2}
              alt="card2"
              className="rounded-lg shadow-xl"
              style={{
                border: "1px solid #F0F0F0",
              }}
            />
          </div>

          <p className="font-semibold text-xl pl-5">Easy Communication</p>
          <p className="pl-5 py-3">
            Collaborate seamlessly with your team in real-time
          </p>
        </div>
        <div
          className="bg-white w-[24%] py-8 px-4 ml-7 rounded-2xl"
          style={{ border: "1px solid #F0F0F0" }}
        >
          <div className="px-5 pb-6">
            <img
              src={Card3}
              alt="card3"
              className="rounded-lg shadow-xl"
              style={{
                border: "1px solid #F0F0F0",
              }}
            />
          </div>

          <p className="font-semibold text-xl pl-5">Analytics</p>
          <p className="pl-5 py-3">
            Gain valuable insights with our advanced analytics feature
          </p>
        </div>
      </div>
      <div className="bg-darkGrey w-[100%] h-screen">
        <div className="flex flex-col items-center">
          <div
            className="py-1 px-3 bg-white mt-32 mb-5 rounded-lg text-center"
            style={{ border: "1px solid #EAE0FF" }}
          >
            <p className="text-violet font-sans text-sm">🤩 AND MORE...</p>
          </div>
          <div className="flex flex-col items-left">
            <p className="font-sans text-6xl text-white font-medium tracking-tighter">
              Explore an array of features that elevate your
            </p>
            <p className="font-sans text-6xl text-white font-medium tracking-tighter">
              <span className="text-orange">Productivity</span> to new heights
            </p>
            <div className="text-left pt-10">
              <p className="font-mons text-xl font-semibold text-middleGrey">
                Powerful management platform designed to streamline your
                business
              </p>
              <p className="font-mons text-xl font-semibold text-middleGrey">
                operations, boost productivity, and drive success
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <div className="flex items-center flex-col bg-middleDarkGrey p-5 m-5 rounded-3xl w-[20%] h-96">
            <div className="bg-violet w-16 p-3 rounded-2xl my-9">
              <img src={Phone} alt="icon" />
            </div>
            <p className="text-white text-xl text-center">
              Cross-Platform Compatibility
            </p>
            <p className="text-middleGrey text-center pt-12 px-4">
              Enjoy the flexibility of cross-platform compatibility. Our product
              works seamlessly across desktop, web, and mobile devices, allowing
              you to work from your preferred device.
            </p>
          </div>
          <div className="flex items-center flex-col bg-middleDarkGrey p-5 m-5 rounded-3xl w-[20%] h-96">
            <div className="bg-violet w-16 p-3 rounded-2xl my-9">
              <img src={Bell} alt="icon" />
            </div>
            <p className="text-white text-xl text-center">
              Stay Informed with Essential Notifications
            </p>
            <p className="text-middleGrey text-center py-6 px-3">
              Automate support from first customer contact to closing the
              ticket. Drastically improve time to resolution.Automate support
              from first customer contact to closing the ticket.
            </p>
          </div>
          <div className="flex items-center flex-col bg-middleDarkGrey p-5 m-5 rounded-3xl w-[20%] h-96">
            <div className="bg-violet w-16 p-3 rounded-2xl my-9">
              <img src={Flame} alt="icon" />
            </div>
            <p className="text-white text-xl text-center">
              Secure Data Encryption at all times
            </p>
            <p className="text-middleGrey text-center py-6 px-4">
              Trust in our robust data encryption to keep your sensitive
              information safe and secure. Rest easy knowing your data is
              protected at all times.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-darkGrey w-[100%] h-[100%] pt-40">
          <div
            className="flex items-center justify-center bg-white rounded-lg w-40"
            style={{ border: "1px solid #EAE0FF" }}
          >
            <img src={Tools} alt="tools" style={{ width: "15px" }} />{" "}
            <p className="text-violet ml-2">INTEGRATIONS</p>
          </div>
          <div className="w-[40%] text-center pt-10">
            <p className="font-sans text-6xl text-white font-medium tracking-tighter">
              Enable <span className="text-orange">integration</span> with other
              popular tools and platforms
            </p>
          </div>
          <div className="w-[20%] text-center">
            <p className="font-mons font-semibold text-middleGrey text-xl mt-8">
              Seamlessly connect and amplify your workflow by enabling
              integration with a diverse array of widely-used tools and
              platforms.
            </p>
          </div>
          <img src={Pic1} alt="icon" className="absolute left-48 pt-24" />
          <div className="pt-[7.2rem]">
            <img src={Pic3} alt="icon" className="rounded-t-3xl" />
          </div>
          <img src={Pic2} alt="icon" className="absolute right-48 pt-24" />
        </div>

        <div className="pl-[22%] py-32">
          <div className="flex">
            <div>
              <div
                className="flex justify-center bg-white rounded-lg px-2 my-5 w-20"
                style={{ border: "1px solid #EAE0FF" }}
              >
                <p className="text-violet">🙋‍♀️ FAQ</p>
              </div>
              <div className="w-72">
                <p className="font-sans text-6xl text-darkGrey font-medium tracking-tighter">
                  Need
                </p>
                <span className="font-sans text-6xl font-medium text-orange">
                  Answers?
                </span>
                <p className="text-middleGrey my-5 text-xl">
                  Check out our most commonly asked questions below to find the
                  information you need.
                </p>
              </div>
            </div>

            {/* Accordeon */}

            <div className="w-[53%] pl-32">
              {data.map(({ answer, question, id }) => (
                <div
                  className="bg-ultraLightViolet mb-1 py-6 px-4 rounded-2xl"
                  key={id}
                >
                  <div
                    className="text-darkGrey flex justify-between align-center cursor-pointer"
                    onClick={() => toggle(id)}
                  >
                    <h3 className="text-xl font-semibold w-[75%]">
                      {question}
                    </h3>
                    <div>
                      <img
                        src={opened[id] ? Minus : Plus}
                        alt="more"
                        style={{ width: "17px" }}
                      />
                    </div>
                  </div>

                  {opened[id] && <div className="text-grey py-5">{answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="py-1 px-3 bg-white mt-32 mb-5 rounded-lg text-center"
            style={{ border: "1px solid #EAE0FF" }}
          >
            <p className="text-violet font-sans text-sm">💲 Pricing</p>
          </div>

          <div>
            <p className="font-sans font-medium text-5xl text-darkGrey pb-5 mt-7">
              Select your ideal <span className="text-orange">Pricing</span>{" "}
              plan
            </p>
          </div>
          <div className=" w-[29%]">
            <p className="font-mons text-xl font-semibold text-middleGrey text-center">
              At Manage Wise, we believe in providing you with pricing plans
              that adapt to your unique needs.
            </p>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <div className="bg-lightViolet w-[20%] m-5 rounded-3xl">
            <p className="bg-white text-orange rounded-md w-16 ml-9 mt-10 text-center">
              Free
            </p>
            <div className="flex ml-9 mt-5">
              <p className="text-6xl">$10</p>
              <span>/month</span>
            </div>

            <ul className="p-9">
              <li>✔️ Access to all basic features</li>
              <li>✔️ Reporting and analytics</li>
              <li>✔️ Up to 5 individual users</li>
              <li>✔️ Chat and email support</li>
            </ul>
            <button className="bg-white p-4 rounded-2xl ml-9 mt-12">
              Get Started
            </button>
          </div>
          <div className="bg-darkGrey w-[20%] m-5 rounded-3xl">
            <p className="bg-white text-orange rounded-md w-24 ml-9 mt-10 text-center">
              Standard
            </p>
            <div className="flex ml-9 mt-5">
              <p className="text-white text-6xl">$25</p>
              <span className="text-white">/month</span>
            </div>
            <ul className="text-white p-9">
              <li>✔️Access to all basic features</li>
              <li>✔️ Reporting and analytics</li>
              <li>✔️ Up to 5 individual users</li>
              <li>✔️ Chat and email support</li>
              <li>✔️ 3+ integrations</li>
              <li>✔️ Account performance reporting</li>
            </ul>
            <button className="bg-violet text-white p-4 rounded-2xl ml-9 mb-5">
              Get Started
            </button>
          </div>
          <div className="bg-lightViolet w-[20%] m-5 rounded-3xl">
            <p className="bg-white text-orange rounded-md w-24 ml-9 mt-10 text-center">
              Business
            </p>
            <div className="flex ml-9 mt-5">
              <p className="text-6xl">$42</p>
              <span>/month</span>
            </div>
            <ul className="p-9">
              <li>✔️ Access to all basic features</li>
              <li>✔️ Reporting and analytics</li>
              <li>✔️ Up to 5 individual users</li>
              <li>✔️ Chat and email support</li>
              <li>✔️ 3+ integrations</li>
            </ul>
            <button className="bg-white p-4 rounded-2xl ml-9 mt-6">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="py-1 px-3 bg-white mt-32 mb-5 rounded-lg text-center"
            style={{ border: "1px solid #EAE0FF" }}
          >
            <p className="text-violet font-sans text-sm">🧡 Testimonials</p>
          </div>
          <div className="flex flex-col items-left">
            <p className="font-sans text-6xl text-darkGrey font-medium tracking-tighter">
              Hear from our <span className="text-orange">Satisfied</span>{" "}
              clients
            </p>
            <div className="text-left pt-7">
              <p className="font-mons text-xl font-semibold text-middleGrey">
                Discover why our clients love working with us. Read their
              </p>
              <p className="font-mons text-xl font-semibold text-middleGrey">
                testimonials and learn how we has helped businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="p-2">
              <img
                src={Emily}
                alt="user"
                className="rounded-2xl"
                style={{ border: "1px solid #eee" }}
              />
            </div>
            <div className="p-2">
              <img
                src={Sarah}
                alt="user"
                className="rounded-2xl"
                style={{ border: "1px solid #eee" }}
              />
            </div>
            <div className="p-2">
              <img
                src={David}
                alt="user"
                className="rounded-2xl"
                style={{ border: "1px solid #eee" }}
              />
            </div>
            <div className="p-2">
              <img
                src={Alex}
                alt="user"
                className="rounded-2xl"
                style={{ border: "1px solid #eee" }}
              />
            </div>
            <div className="p-2">
              <img
                src={Emily}
                alt="user"
                className="rounded-2xl"
                style={{ border: "1px solid #eee" }}
              />
            </div>
            <div className="p-2">
              <img
                src={Sarah}
                alt="user"
                className="rounded-2xl"
                style={{ border: "1px solid #eee" }}
              />
            </div>
            <div className="p-2">
              <img
                src={David}
                alt="user"
                className="rounded-2xl"
                style={{ border: "1px solid #eee" }}
              />
            </div>
            <div className="p-2">
              <img
                src={Alex}
                alt="user"
                className="rounded-2xl"
                style={{ border: "1px solid #eee" }}
              />
            </div>
            <div className="p-2">
              <img
                src={Emily}
                alt="user"
                className="rounded-2xl"
                style={{ border: "1px solid #eee" }}
              />
            </div>
            <div className="p-2">
              <img
                src={Sarah}
                alt="user"
                className="rounded-2xl"
                style={{ border: "1px solid #eee" }}
              />
            </div>
            <div className="p-2">
              <img
                src={David}
                alt="user"
                className="rounded-2xl"
                style={{ border: "1px solid #eee" }}
              />
            </div>
            <div className="p-2">
              <img
                src={Alex}
                alt="user"
                className="rounded-2xl"
                style={{ border: "1px solid #eee" }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-40 px-10 rounded-3xl">
          <div className="pr-8">
            <div
              className="flex justify-center bg-white rounded-lg px-2 my-5 w-40"
              style={{ border: "1px solid #EAE0FF" }}
            >
              <p className="text-violet">👋 Don't miss out</p>
            </div>
            <div className="w-96">
              <p className="font-sans text-5xl text-darkGrey font-medium tracking-tighter">
                Unleash your <span className=" text-orange">Potential</span>{" "}
                with us
              </p>

              <p className="text-middleGrey my-5 text-lg">
                Join our community of ambitious individuals and organizations
                eager to make a difference.
              </p>
            </div>
          </div>
          <div className="pl-5">
            <img src={Users} alt="users" className="rounded-2xl" />
          </div>
        </div>

        <footer className="">
          <div
            className="flex justify-between w-[70%] mx-auto pb-10"
            style={{ marginBottom: "1px solid #eee" }}
          >
            <div className="">
              <img src={Logo} alt="logo" style={{ height: "44px" }} />
            </div>
            <div>
              <ul>
                <li className="py-1">Feature</li>
                <li className="py-1">FAQ</li>
                <li className="py-1">Pricing </li>
                <li className="py-1">Testimonials</li>
              </ul>
            </div>
          </div>
          <hr className="text-grey w-[70%] mx-auto" />
          <div className="flex justify-between w-[70%] mx-auto py-16">
            <div>
              <p>© 2022 ManageWise, Inc.</p>
            </div>
            <div className="flex">
              <div className="pl-2">
                <img src={Insta} alt="icon" style={{ width: "20px" }} />
              </div>
              <div className="pl-2">
                <img src={X} alt="icon" style={{ width: "20px" }} />
              </div>
              <div className="pl-2">
                <img src={Linkedin} alt="icon" style={{ width: "20px" }} />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
