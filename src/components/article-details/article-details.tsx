import { useNavigate } from "react-router-dom";
import AnimatedButton2 from "../general-components/animated-button2";
import BlogSidebar from "./artcile-poster";
import MobileBlogSidebar from "./article-poster-mobile";

export default function BlogPost() {
  const navigate = useNavigate();
  return (
    <div className=" bg-white">
      {/* Main Content */}
      <main className="w-full mx-auto px-8 lg:max-w-6xl 2xl:max-w-9xl py-10">
        <div className="mb-12">
          <div className="text-[#65A30D] mb-2 md:mb-4 flex items-center gap-2">
            <span className="xl:absolute -left-7">/ 01</span>
            <span className="mx-2">/</span>
            <span className="text-lg font-semibold"> Article</span>
          </div>
        </div>
        <div className="">
          {/* Article Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#003262] mb-6 leading-tight">
                How to Build an Enterprise Game Platform for Millions of Players
                (1/3)
              </h1>

              {/* Hero Image */}
              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="/png/blog.png"
                  alt="3D isometric gaming platform with controllers and neon lighting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Article Body */}
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="prose w-full lg:w-[85%]">
                <p className="text-[#0060BA] leading-relaxed font-semibold mb-6">
                  If you're wondering what knowledge is used to support millions
                  of concurrent users with multiplayer games, you're in the
                  right place. This session is the first part of a three-part
                  series where we'll explore the technical challenges,
                  architectural patterns, and frameworks, and go different
                  routing models to support such complexity.
                </p>

                <p className="text-[#0060BA] font-semibold leading-relaxed mb-6">
                  We want to show you how to deploy to scale thousands and up to
                  millions of players simultaneously. We'll cover the
                  infrastructure, the technology stack, and the primary goal of
                  achieving supporting millions of concurrent users.
                </p>

                <h2 className="text-2xl font-bold text-[#0060BA] mt-8 mb-4">
                  Motivation
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The goal of this talk is to start a bit by a deep dive on
                  modern tech that helps drive scalable multiplayer gaming
                  experiences, focusing on building for the cloud.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  I've spent several years with this type of cloud architecture
                  especially when I first started working on multiplayer games.
                  The challenge is that most resources are focused on the game
                  development side, but not so much on the infrastructure and
                  the backend systems that support millions of players.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  I've spent a lot of time at companies working on scalable
                  tech. I learned about modern architecture that can scale,
                  architecting systems designed to handle millions and thousands
                  of players simultaneously. I want to share some of the key
                  learnings and patterns that I've discovered over the years.
                  This includes everything from load balancing, to data storage,
                  to real-time communication, and more. We'll also cover some of
                  the common pitfalls and how to avoid them. I'll also share
                  some practical examples and case studies from my experience
                  working on large-scale multiplayer games.
                </p>

                {/* Heading 2 */}
                <h2 className="text-2xl font-bold text-[#0060BA] mt-8 mb-4">
                  How Rock Paper Scissors works?
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  I believe most of you discovered this game as kids, but for
                  some of you who are not so familiar with the rules of the
                  game, let me explain it in the following few sentences.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Rock Paper Scissors (also known as Rochambeau, roshambo, or
                  ro-sham-bo) is a two-person hand game in which each player
                  forms one of three shapes with an outstretched hand at the
                  same time. These are the shapes "rock" (closed fist), "paper"
                  (flat hand), and "scissors" (a fist with the index finger and
                  middle finger extended, forming a V). It is a simultaneous,
                  zero-sum game with only two outcomes: a draw or a win for one
                  player and a loss for the other. A player who chooses rock
                  will beat another who chooses scissors but will lose to one
                  who chooses paper; a play of paper will lose to a play of
                  scissors. If both players select the same shape, the game is
                  considered tied and is usually replayed to break the tie
                </p>

                <img src="/png/blog2.png" alt="" />

                {/* Heading 3 */}
                <h2 className="text-2xl font-bold text-[#0060BA] mt-8 mb-4">
                  Early days
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Because we had a few weeks to do our research, we began
                  focusing on specific issues in terms of gameplay very quickly.
                  To respond to questions as soon as possible, such as:
                </p>

                <ul className="list-disc pl-6">
                  <li className="text-gray-700 leading-relaxed mb-6">
                    What should the domain look like?
                  </li>
                  <li className="text-gray-700 leading-relaxed mb-6">
                    Due to the fact that we initially identified a scalability
                    issue - we applied a microservice architecture and began
                    asking questions about the bounding context and
                    responsibilities of each service?
                  </li>
                  <li className="text-gray-700 leading-relaxed mb-6">
                    How can we conduct large-scale gameplay testing?
                  </li>
                  <li className="text-gray-700 leading-relaxed mb-6">
                    What is a cost-effective alternative to costly HTTP
                    requests? We knew Websockets were a good choice, but we
                    weren't certain Azure SignalR was a good fit for such a
                    large scale.
                  </li>
                </ul>
                <p>
                  Throughout the analysis, we created numerous process flow
                  diagrams to demonstrate that we comprehend the entire process
                  from beginning to end.
                </p>
                <img src="/png/blog3.png" alt="" />

                {/* Heading 4 */}
                <h2 className="text-2xl font-bold text-[#0060BA] mt-8 mb-4">
                  Early days
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Because we had a few weeks to do our research, we began
                  focusing on specific issues in terms of gameplay very quickly.
                  To respond to questions as soon as possible, such as:
                </p>

                <ul className="list-disc pl-6">
                  <li className="text-gray-700 leading-relaxed mb-6">
                    What should the domain look like?
                  </li>
                  <li className="text-gray-700 leading-relaxed mb-6">
                    Due to the fact that we initially identified a scalability
                    issue - we applied a microservice architecture and began
                    asking questions about the bounding context and
                    responsibilities of each service?
                  </li>
                  <li className="text-gray-700 leading-relaxed mb-6">
                    How can we conduct large-scale gameplay testing?
                  </li>
                  <li className="text-gray-700 leading-relaxed mb-6">
                    What is a cost-effective alternative to costly HTTP
                    requests? We knew Websockets were a good choice, but we
                    weren't certain Azure SignalR was a good fit for such a
                    large scale.
                  </li>
                </ul>
                <p>
                  Throughout the analysis, we created numerous process flow
                  diagrams to demonstrate that we comprehend the entire process
                  from beginning to end.
                </p>
              </div>

              <div className="hidden md:block">
                <BlogSidebar />
              </div>
              <div className="md:hidden">
                <MobileBlogSidebar />
              </div>
            </div>
          </div>

          {/* Sidebar */}
        </div>
        <div className="justify-between hidden md:flex">
          <AnimatedButton2
            buttonText="All Articles"
            orderIcon="order-1"
            orderText="order-2"
            handleClick={() => navigate("/articles-list")}
          />

          <AnimatedButton2
            buttonText="Next Article"
            orderIcon="order-2"
            orderText="order-1"
            handleClick={() => navigate("/article-details/02")}
          />
        </div>
      </main>
    </div>
  );
}
